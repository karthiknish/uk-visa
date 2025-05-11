# Contentful Integration for UK Visa Application Form

This document outlines how to set up and use the Contentful integration for the contact form in the UK Visa application.

## Prerequisites

- Contentful account with access to your space
- Contentful Delivery API key
- Contentful Preview API key
- Contentful Management Token (to be created in Contentful)

## Setup

1. **Create a Management Token**:
   - Log in to your Contentful account
   - Go to Settings > API Keys
   - Create a new Personal Access Token
   - Copy this token

2. **Set up Environment Variables**:
   - Add your API keys and management token to the `.env.local` file:
   ```
   CONTENTFUL_SPACE_ID=your_space_id_here
   CONTENTFUL_DELIVERY_API_KEY=your_delivery_api_key_here
   CONTENTFUL_PREVIEW_API_KEY=your_preview_api_key_here
   CONTENTFUL_MANAGEMENT_TOKEN=your_management_token_here
   ```

3. **Content Type in Contentful**:
   - The content type ID is `contactForm` (already created)
   - Field IDs:
     - `firstName` (Short text)
     - `lastName` (Short text)
     - `email` (Short text)
     - `country` (Short text)
     - `message` (Long text)
     - `submittedAt` (Date & time)

## How the Integration Works

1. The `ContactForm.jsx` component collects user input for fields: firstName, lastName, email, country, and message
2. When submitted, the form data is sent to the API endpoint at `/api/contact`
3. The API endpoint validates the data and creates an entry in Contentful using the Management API
4. The submission is stored in Contentful for review in the 'contactForm' content type

## Viewing Submissions

To view form submissions:
1. Log in to your Contentful account
2. Go to Content > Contact Form Submissions
3. You'll see a list of all form submissions with timestamps

## Customization

To customize the form fields or add additional ones:
1. Update the `contactForm` content type in Contentful
2. Modify the `ContactForm.jsx` component to match the field IDs
3. Update the API endpoint in `src/app/api/contact/route.js` to match the field IDs

## Troubleshooting

- If submissions aren't being stored, check if your Management Token is correctly set in the environment variables
- Ensure the content type ID in the API route matches your Contentful content type ID
- Check the browser console and server logs for any errors

## Security Considerations

- The Management Token has write access to your Contentful space, so keep it secure
- Never expose your API keys in client-side code or commit them to version control
- Always use environment variables to store sensitive information
- Consider adding rate limiting to the API endpoint to prevent abuse
- Regularly rotate your API keys for enhanced security
- Use environment-specific API keys (development, staging, production)
- Set appropriate access permissions in Contentful for each API key