import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  const validEmail = process.env.GATE_EMAIL;
  const validPassword = process.env.GATE_PASSWORD;

  if (email === validEmail && password === validPassword) {
    const response = NextResponse.json({ success: true });
    response.cookies.set("gate_auth", "authenticated", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json({ success: false, error: "Invalid credentials" }, { status: 401 });
}

