import { NextResponse } from 'next/server'
import { SignJWT } from 'jose'

const secret = new TextEncoder().encode(
  process.env.NEXTAUTH_SECRET || 'your-secret-key-min-32-chars-long'
)

export async function POST(request) {
  try {
    const { password } = await request.json()

    if (password === process.env.ADMIN_PASSWORD) {
      // Create JWT token
      const token = await new SignJWT({ admin: true, authenticated: true })
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('24h')
        .sign(secret)

      // Create response with cookie
      const response = NextResponse.json({ success: true })
      
      response.cookies.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 86400, // 24 hours
        path: '/',
      })

      return response
    }

    return NextResponse.json(
      { error: 'Invalid password' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Server error' },
      { status: 500 }
    )
  }
}
