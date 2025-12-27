import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { cookies } from 'next/headers'

const secret = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || 'your-secret-key-min-32-chars-long'
)

export async function GET() {
  try {
    const cookieStore = await cookies()
    const token =  cookieStore.get('admin-token')?.value

    if (!token) {
      return NextResponse.json({ authenticated: false }, { status: 401 })
    }

    await jwtVerify(token, secret)
    return NextResponse.json({ authenticated: true })
  } catch (error) {
    return NextResponse.json({ authenticated: false }, { status: 401 })
  }
}
