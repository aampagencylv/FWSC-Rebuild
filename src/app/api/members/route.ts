import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

interface NewMemberData {
  businessName: string
  county: string
  waterway: string
  fleetSize: string
  vesselTypes: string
  insuranceCarrier: string
  policyNumber: string
  contactName: string
  contactEmail: string
  tier: string
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('session_id')

  if (!sessionId) {
    return NextResponse.json(
      { error: 'Missing session ID' },
      { status: 400 }
    )
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      )
    }

    return NextResponse.json({
      success: true,
      customer_email: session.customer_email,
      metadata: session.metadata,
      amount_paid: session.amount_total,
    })
  } catch (error) {
    console.error('Session retrieval error:', error)
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const data: NewMemberData & { sessionId: string } = await request.json()

    if (!data.sessionId) {
      return NextResponse.json(
        { error: 'Missing session ID' },
        { status: 400 }
      )
    }

    // Verify payment
    const session = await stripe.checkout.sessions.retrieve(data.sessionId)

    if (session.payment_status !== 'paid') {
      return NextResponse.json(
        { error: 'Payment not verified' },
        { status: 400 }
      )
    }

    // TODO: Save to database
    // For now, we'll just verify the payment was successful
    // In production, you would:
    // 1. Create an operator/member entry in your database
    // 2. Send a confirmation email
    // 3. Set up their directory listing

    console.log('New member onboarded:', {
      businessName: data.businessName,
      email: data.contactEmail,
      tier: data.tier,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json({
      success: true,
      message: 'Member application received. We will review and contact you shortly.',
      businessName: data.businessName,
      email: data.contactEmail,
    })
  } catch (error) {
    console.error('Member creation error:', error)
    return NextResponse.json(
      { error: 'Failed to process member data' },
      { status: 500 }
    )
  }
}
