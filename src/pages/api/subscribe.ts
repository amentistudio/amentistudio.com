import type { APIRoute } from 'astro';
import axios from 'axios';
import { z } from 'zod';

export const prerender = false;

// Define the schema for input validation
const subscribeSchema = z.object({
  email: z.string().email(),
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = subscribeSchema.parse(body);

    const url = `${import.meta.env.MAILCHIMP_API_URL}/3.0/lists/${import.meta.env.MAILCHIMP_LIST_ID}/members`;
    const apiKey = import.meta.env.MAILCHIMP_API_KEY;

    const response = await axios.post(url, {
      email_address: email,
      status: 'subscribed'
    }, {
      validateStatus: (status) => {
        return status === 200 || status === 400;
      },
      headers: {
        'Authorization': `apikey ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });

    console.log(response.status);

    if (response.status === 200) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else if (response.status === 400) {
      return new Response(JSON.stringify({ success: false, error: 'Email already subscribed' }), { status: 400 });
    } else {
      throw new Error('Failed to subscribe');
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid email format' }), { status: 400 });
    }
    console.error('Error subscribing email:', error);
    return new Response(JSON.stringify({ success: false, error: error instanceof Error ? error.message : 'Unknown error' }), { status: 500 });
  }
};