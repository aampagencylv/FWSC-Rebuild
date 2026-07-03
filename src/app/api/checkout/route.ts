import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

const tiers = {
  skipper: {
    name: 'Skipper',
    price: 35000, // $350 in cents
  },
  fleet: {
    name: 'Fleet',
    price: 75000, // $750 in cents
  },
  harbor: {
    name: 'Harbor',
    price: 150000, // $1500 in cents
  },
}

export async function POST(request: NextRequest) {
  try {
    const { tier, email, company } = await request.json()

    if (!tier || !email || !company) {
      return NextResponse.json(
        { error: 'Missing required fields: tier, email, company' },
        { status: 400 }
      )
    }

    if (!tiers[tier as keyof typeof tiers]) {
      return NextResponse.json(
        { error: 'Invalid tier' },
        { status: 400 }
      )
    }

    const tierInfo = tiers[tier as keyof typeof tiers]
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : 'http://localhost:3000'

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `FWSC ${tierInfo.name} Membership`,
              description: `Florida Water Sports Coalition - ${tierInfo.name} Tier Annual Membership`,
            },
            unit_amount: tierInfo.price,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      customer_email: email,
      metadata: {
        tier,
        company,
      },
      success_url: `${baseUrl}/membership?status=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/membership?status=cancelled`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Checkout error:', error)
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    )
  }
}
