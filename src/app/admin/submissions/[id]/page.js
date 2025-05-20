"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function SubmissionDetailPage() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;

  const [submission, setSubmission] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Instead of useEffect, fetch on demand via a button or if id is present and not loaded
  async function handleFetchSubmission() {
    if (!id) return;
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`/api/submissions/${id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch submission");
      }
      const data = await response.json();
      if (data.success && data.submission) {
        setSubmission(data.submission);
      } else {
        throw new Error(
          data.message || "Submission data not found in response"
        );
      }
    } catch (err) {
      console.error("Error fetching submission:", err);
      setError(
        err.message || "An error occurred while fetching the submission."
      );
    } finally {
      setLoading(false);
    }
  }

  // Auto-fetch if id is present and not loaded, but without useEffect
  if (!submission && !loading && !error && id) {
    // This is a hacky way to trigger fetch on first render without useEffect
    // eslint-disable-next-line no-unused-expressions
    handleFetchSubmission();
    // Show loading state while fetching
    return (
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
        <Navigation menuItems={[{ href: "/admin", label: "Back to Admin" }]} />
        <main className="flex-grow flex items-center justify-center py-12">
          <p className="text-xl text-gray-700">Loading submission details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
        <Navigation menuItems={[{ href: "/admin", label: "Back to Admin" }]} />
        <main className="flex-grow flex items-center justify-center py-12">
          <p className="text-xl text-gray-700">Loading submission details...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
        <Navigation menuItems={[{ href: "/admin", label: "Back to Admin" }]} />
        <main className="flex-grow flex flex-col items-center justify-center py-12 text-center px-4">
          <p className="text-xl text-red-600 mb-4">Error: {error}</p>
          <button
            onClick={handleFetchSubmission}
            className="px-6 py-2 bg-[#003D6E] text-white rounded-md hover:bg-[#004d8a] transition-colors mb-4"
          >
            Retry
          </button>
          <Link
            href="/admin"
            className="px-6 py-2 bg-[#003D6E] text-white rounded-md hover:bg-[#004d8a] transition-colors"
          >
            Back to Submissions
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  if (!submission) {
    return (
      <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
        <Navigation menuItems={[{ href: "/admin", label: "Back to Admin" }]} />
        <main className="flex-grow flex flex-col items-center justify-center py-12 text-center px-4">
          <p className="text-xl text-gray-700 mb-4">
            Submission not found or failed to load.
          </p>
          <button
            onClick={handleFetchSubmission}
            className="px-6 py-2 bg-[#003D6E] text-white rounded-md hover:bg-[#004d8a] transition-colors mb-4"
          >
            Retry
          </button>
          <Link
            href="/admin"
            className="px-6 py-2 bg-[#003D6E] text-white rounded-md hover:bg-[#004d8a] transition-colors"
          >
            Back to Submissions
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
      <Navigation menuItems={[{ href: "/admin", label: "Back to Admin" }]} />
      <main className="flex-grow py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <button
              onClick={() => router.back()}
              className="text-[#003D6E] hover:text-[#004d8a] transition-colors font-medium"
            >
              &larr; Back to Submissions
            </button>
          </div>

          <div className="bg-white shadow-xl rounded-lg p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#003D6E] mb-6">
              Submission Details
            </h1>
            <div className="space-y-4">
              <div>
                <strong className="block text-gray-600 text-sm">
                  Date Submitted:
                </strong>
                <p className="text-gray-800 text-lg">
                  {new Date(submission.submittedAt).toLocaleString()}
                </p>
              </div>
              <div>
                <strong className="block text-gray-600 text-sm">Name:</strong>
                <p className="text-gray-800 text-lg">{submission.name}</p>
              </div>
              <div>
                <strong className="block text-gray-600 text-sm">Email:</strong>
                <p className="text-gray-800 text-lg">{submission.email}</p>
              </div>
              <div>
                <strong className="block text-gray-600 text-sm">Phone:</strong>
                <p className="text-gray-800 text-lg">
                  {submission.phone || "N/A"}
                </p>
              </div>
              <div>
                <strong className="block text-gray-600 text-sm">
                  Country:
                </strong>
                <p className="text-gray-800 text-lg">{submission.country}</p>
              </div>
              <div>
                <strong className="block text-gray-600 text-sm">
                  Message:
                </strong>
                <p className="text-gray-800 text-lg whitespace-pre-wrap bg-gray-50 p-3 rounded-md">
                  {submission.message}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
