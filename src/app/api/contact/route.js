import { createClient } from 'contentful-management';

const ENVIRONMENT_ID = 'master'; // Change this if you're using a different environment

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, country, message } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !country || !message) {
      return Response.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialize the management client
    // This requires a management token which should be set in your environment variables
    if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN) {
      console.error('Missing CONTENTFUL_MANAGEMENT_TOKEN environment variable');
      return Response.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const client = createClient({
      accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
    });

    // Get space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT_ID);

    // Create an entry in Contentful
    // Using the confirmed content type ID 'contactForm'
    const entry = await environment.createEntry('contactForm', {
      fields: {
        firstName: {
          'en-US': firstName
        },
        lastName: {
          'en-US': lastName
        },
        email: {
          'en-US': email
        },
        country: {
          'en-US': country
        },
        message: {
          'en-US': message
        },
        submittedAt: {
          'en-US': new Date().toISOString()
        }
      }
    });

    // Publish the entry if needed
    // await entry.publish();

    return Response.json({ 
      success: true, 
      message: 'Form submitted successfully',
      entryId: entry.sys.id
    });
  } catch (error) {
    console.error('Error submitting form:', error);
    return Response.json(
      { error: 'Failed to submit form', details: error.message },
      { status: 500 }
    );
  }
}