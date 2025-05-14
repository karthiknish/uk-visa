import { NextResponse } from "next/server";
import { createClient } from "contentful-management";

const client = createClient({
  accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
});

const CONTENTFUL_SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const CONTENTFUL_ENVIRONMENT_ID = "master";

export async function GET(request, context) {
  await Promise.resolve(); // Added micro-delay
  const resolvedParams = await context.params;
  const submissionId = resolvedParams.id;

  if (!process.env.CONTENTFUL_MANAGEMENT_TOKEN || !CONTENTFUL_SPACE_ID) {
    console.error("Contentful Management Token or Space ID is not configured.");
    return NextResponse.json(
      { success: false, message: "Server configuration error." },
      { status: 500 }
    );
  }

  if (!submissionId) {
    return NextResponse.json(
      { success: false, message: "Submission ID is required." },
      { status: 400 }
    );
  }

  try {
    const space = await client.getSpace(CONTENTFUL_SPACE_ID);
    const environment = await space.getEnvironment(CONTENTFUL_ENVIRONMENT_ID);
    const entry = await environment.getEntry(submissionId);

    if (!entry) {
      return NextResponse.json(
        { success: false, message: "Submission not found." },
        { status: 404 }
      );
    }

    const submission = {
      id: entry.sys.id,
      name: `${entry.fields.firstName["en-US"] || ""} ${
        entry.fields.lastName["en-US"] || ""
      }`.trim(),
      email: entry.fields.email ? entry.fields.email["en-US"] : "N/A",
      message: entry.fields.message ? entry.fields.message["en-US"] : "N/A",
      country: entry.fields.country ? entry.fields.country["en-US"] : "N/A",
      phone: entry.fields.phone ? entry.fields.phone["en-US"] : "N/A",
      submittedAt: entry.sys.createdAt,
    };

    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error(
      `Error fetching submission ${submissionId} from Contentful:`,
      error
    );
    let errorMessage = "Failed to fetch submission.";
    if (error.name === "NotFound") {
      return NextResponse.json(
        { success: false, message: "Submission not found." },
        { status: 404 }
      );
    }
    if (error.name === "AccessTokenInvalid") {
      errorMessage =
        "Contentful access token is invalid. Please check server configuration.";
    }
    // Add more specific error handling based on Contentful errors if needed
    return NextResponse.json(
      { success: false, message: errorMessage, errorDetails: error.message }, // Include error.message for more details during dev
      { status: 500 }
    );
  }
}
