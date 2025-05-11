import { createClient } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';

// Use environment variables for all keys
const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const DELIVERY_API_KEY = process.env.CONTENTFUL_DELIVERY_API_KEY;
const PREVIEW_API_KEY = process.env.CONTENTFUL_PREVIEW_API_KEY;

// Regular client for delivery API (published content)
export const contentfulClient = createClient({
  space: SPACE_ID,
  accessToken: DELIVERY_API_KEY,
});

// Preview client for draft content
export const contentfulPreviewClient = createClient({
  space: SPACE_ID,
  accessToken: PREVIEW_API_KEY,
  host: 'preview.contentful.com',
});

// Management client (for creating/updating entries)
export const getManagementClient = async () => {
  const managementClient = createManagementClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN, // This should be set in your environment variables
  });
  
  return managementClient.getSpace(SPACE_ID);
};

// Helper function to get entries (with preview mode support)
export async function getEntries(query, preview = false) {
  const client = preview ? contentfulPreviewClient : contentfulClient;
  return client.getEntries(query);
}

// Helper function to get a single entry (with preview mode support)
export async function getEntry(id, preview = false) {
  const client = preview ? contentfulPreviewClient : contentfulClient;
  return client.getEntry(id);
}