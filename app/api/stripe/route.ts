import Stripe from 'stripe';
import { NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2022-11-15', // ✅ Compatible with current @types/stripe
});

export async function POST(req: Request) {
  const items = await req.json();

  const line_items = items.map((item: any) => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
        images: [`/images/${item.image}`],
      },
      unit_amount: Number(item.price) * 100, // ✅ Safe conversion
    },
    quantity: item.quantity,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error('[STRIPE_SESSION_ERROR]', err);
    return NextResponse.json({ error: 'Stripe session creation failed' }, { status: 500 });
  }
}
