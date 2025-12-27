import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }
const generateEmailHTML = (name, email, message) => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Form Submission</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background: #fafafa; padding: 60px 20px;">
  
  <table role="presentation" style="width: 100%; max-width: 650px; margin: 0 auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 20px rgba(0,0,0,0.08);">
    
    <!-- Minimal Header -->
    <tr>
      <td style="padding: 60px 50px 40px; border-bottom: 3px solid #000000;">
        <h1 style="margin: 0; color: #000000; font-size: 36px; font-weight: 300; letter-spacing: -1px;">
          New Inquiry
        </h1>
      </td>
    </tr>
    
    <!-- Content -->
    <tr>
      <td style="padding: 50px;">
        
        <!-- Name Field -->
        <table role="presentation" style="width: 100%; margin-bottom: 35px; padding-bottom: 25px; border-bottom: 1px solid #e8e8e8;">
          <tr>
            <td style="width: 120px; vertical-align: top;">
              <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #999; font-weight: 600;">Name</p>
            </td>
            <td>
              <p style="margin: 0; font-size: 20px; color: #000000; font-weight: 500;">${name}</p>
            </td>
          </tr>
        </table>
        
        <!-- Email Field -->
        <table role="presentation" style="width: 100%; margin-bottom: 35px; padding-bottom: 25px; border-bottom: 1px solid #e8e8e8;">
          <tr>
            <td style="width: 120px; vertical-align: top;">
              <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #999; font-weight: 600;">Email</p>
            </td>
            <td>
              <a href="mailto:${email}" style="color: #000000; text-decoration: none; font-size: 18px; font-weight: 400; border-bottom: 2px solid #000000; padding-bottom: 2px;">
                ${email}
              </a>
            </td>
          </tr>
        </table>
        
        <!-- Message Field -->
        <table role="presentation" style="width: 100%; margin-bottom: 35px;">
          <tr>
            <td style="width: 120px; vertical-align: top;">
              <p style="margin: 0; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #999; font-weight: 600;">Message</p>
            </td>
            <td>
              <p style="margin: 0; font-size: 16px; line-height: 1.8; color: #333; white-space: pre-wrap;">
                ${message}
              </p>
            </td>
          </tr>
        </table>
        
        <!-- Clean CTA -->
        <table role="presentation" style="width: 100%; margin-top: 50px;">
          <tr>
            <td>
              <a href="mailto:${email}" style="display: inline-block; padding: 16px 40px; background: #000000; color: #ffffff; text-decoration: none; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; transition: all 0.3s;">
                Reply
              </a>
            </td>
          </tr>
        </table>
        
      </td>
    </tr>
    
    <!-- Footer -->
    <tr>
      <td style="padding: 30px 50px; background: #fafafa; border-top: 1px solid #e8e8e8;">
        <p style="margin: 0; font-size: 13px; color: #999; line-height: 1.6;">
          Sent ${new Date().toLocaleString('en-US', { dateStyle: 'long', timeStyle: 'short' })}<br/>
          via Portfolio Contact Form
        </p>
      </td>
    </tr>
    
  </table>
  
</body>
</html>
`;




    // Send email
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Use verified domain or resend's domain
      to: [process.env.YOUR_EMAIL], // Your Gmail
      replyTo: email, // User's email for easy reply
      subject: `New Contact Form Submission from ${name}`,
      html: generateEmailHTML(name, email, message),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!',
      data 
    })

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
