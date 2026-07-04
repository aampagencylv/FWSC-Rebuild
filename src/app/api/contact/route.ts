import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json()

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Send email to FWSC
    const internalResult = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: 'info@flwsc.org',
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (internalResult.error) {
      console.error('Failed to send internal email:', internalResult.error)
      return NextResponse.json(
        { error: 'Failed to send message' },
        { status: 500 }
      )
    }

    // Send confirmation email to user
    const confirmationResult = await resend.emails.send({
      from: 'Florida Water Sports Coalition <onboarding@resend.dev>',
      to: data.email,
      subject: 'We received your message',
      html: `
        <h2>Thank you, ${data.name}!</h2>
        <p>We've received your message and will get back to you as soon as possible.</p>
        <p>If you need immediate assistance, please call us at <strong>(800) 555-1234</strong></p>
        <hr>
        <p><strong>Your message:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    })

    if (confirmationResult.error) {
      console.error('Failed to send confirmation email:', confirmationResult.error)
      // Don't fail the request if confirmation email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Message sent successfully',
    })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    )
  }
}
