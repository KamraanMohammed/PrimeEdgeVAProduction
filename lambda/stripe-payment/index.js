import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': 'http://localhost:5173',
  'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token,Origin',
  'Access-Control-Allow-Methods': 'OPTIONS,POST',
  'Access-Control-Allow-Credentials': true
};

export const handler = async (event) => {
  console.log('Event received:', JSON.stringify(event, null, 2));

  // Handle OPTIONS request (preflight)
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({ message: 'Success' })
    };
  }

  try {
    // Validate event body exists
    if (!event.body) {
      throw new Error('Missing request body');
    }

    console.log('Raw event body:', event.body);

    // Parse the incoming request body
    let body;
    try {
      body = JSON.parse(event.body);
    } catch (e) {
      console.error('Failed to parse request body:', e);
      throw new Error('Invalid JSON in request body');
    }

    console.log('Parsed body:', body);

    // Validate required fields
    if (!body.amount || !body.planName) {
      throw new Error('Missing required fields: amount and planName are required');
    }

    const { amount, planName } = body;

    console.log('Creating Stripe session with:', { amount, planName });

    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${planName} Plan`,
              description: 'Virtual Assistant Service',
            },
            unit_amount: amount, // amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: process.env.SUCCESS_URL || 'http://localhost:5173/success',
      cancel_url: process.env.CANCEL_URL || 'http://localhost:5173/cancel',
    });

    console.log('Stripe session created:', session.id);

    // Return the session ID
    return {
      statusCode: 200,
      headers: corsHeaders,
      body: JSON.stringify({
        sessionId: session.id,
      }),
    };
  } catch (error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      type: error.type,
      raw: error
    });

    return {
      statusCode: 500,
      headers: corsHeaders,
      body: JSON.stringify({
        error: error.message,
        type: error.type || 'UnknownError',
        requestId: event.requestContext?.requestId
      })
    };
  }
}; 