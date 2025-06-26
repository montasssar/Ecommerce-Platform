import Stripe from 'stripe';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil',
});

interface CheckoutItem {
  name: string;
  image?: string;
  price: number | string;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const items: CheckoutItem[] = await req.json();

    const line_items = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image ? `${process.env.NEXT_PUBLIC_BASE_URL}/${item.image}` : ''],
        },
        unit_amount: Math.round(Number(item.price) * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/app/home`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error('[STRIPE_SESSION_ERROR]', err);
    return NextResponse.json(
      { error: 'Stripe session creation failed' },
      { status: 500 }
    );
  }
}
