import { createClient } from 'contentful';
import { createClient as createManagementClient } from 'contentful-management';

const SPACE_ID = 'nql3d04airsl';
const DELIVERY_API_KEY = '9Kcr9YOi4y2_Eh11dLbPZcHimYVyMhKD-M-SlJPFMuM';
const PREVIEW_API_KEY = 'eXxryyNz07fe8vm5OWZCnHxY4k8o9W5TsGNMeiaPSfk';

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