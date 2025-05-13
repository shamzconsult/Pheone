import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-04-30.basil',
  typescript: true,
});

export async function POST(request: Request) {
  try {
    const { amount, currency, donorInfo } = await request.json();

    if (!amount || !currency || !donorInfo) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const stripeAmount = currency.toLowerCase() === 'usd' 
      ? Math.round(amount * 100) 
      : Math.round(amount * 100);

    const paymentIntent = await stripe.paymentIntents.create({
      amount: stripeAmount,
      currency: currency.toLowerCase(),
      metadata: {
        donor_name: `${donorInfo.firstName} ${donorInfo.lastName}`,
        donor_email: donorInfo.email,
         original_amount: amount.toString(),
      },
      //  automatic_payment_methods: {
      //   enabled: true,
      // },
    });

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    });

  } catch (err) {
    console.error('Stripe error:', err);
    return NextResponse.json(
      { error: 'Failed to create payment intent' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}