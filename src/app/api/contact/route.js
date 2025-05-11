import { createClient } from 'contentful-management';

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

export async function POST(request) {
  try {
    const data = await request.json();
    const { firstName, lastName, email, country, message } = data;

    // Validate required fields
    if (!firstName || !lastName || !email || !country || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Get space and environment
    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment("master");

    // Create entry
    await environment.createEntry("contactForm", {
      fields: {
        firstName: { "en-US": firstName },
        lastName: { "en-US": lastName },
        email: { "en-US": email },
        country: { "en-US": country },
        message: { "en-US": message },
      },
    });

    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(
      JSON.stringify({ error: "Failed to submit form. Please try again." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
