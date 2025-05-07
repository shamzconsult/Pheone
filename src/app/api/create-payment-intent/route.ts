import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function createPaymentIntent(amount: number, currency: string = 'usd') {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: '2024-04-10',
      typescript: true,
    });
    return await stripe.paymentIntents.create({
        amount,
        currency,
      });
}

export async function POST(request: Request) {
  try {
    const { amount, currency, donorInfo } = await request.json();

    if (!amount || !currency || !donorInfo) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), 
      currency: currency.toLowerCase(),
      metadata: {
        donor_name: `${donorInfo.firstName} ${donorInfo.lastName}`,
        donor_email: donorInfo.email,
      },
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