import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // WARNING: Hardcoded credentials are a major security risk.
    // Replace with a secure authentication mechanism for production.
    if (username === "admin" && password === "Admin1!") {
      // In a real app, you would generate and return a session token here.
      return NextResponse.json({ success: true, message: "Login successful" });
    } else {
      return NextResponse.json(
        { success: false, message: "Invalid credentials" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred during login" },
      { status: 500 }
    );
  }
}
