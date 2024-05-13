import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const signInURl = new URL("/", request.url);
  const uploadURL = new URL("/upload", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInURl);
  }

  if (token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.redirect(uploadURL);
    }
  }
}

export const config = {
  matcher: ["/", "/upload"],
};

