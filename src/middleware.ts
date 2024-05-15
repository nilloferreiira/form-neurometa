import { NextRequest, NextResponse } from "next/server";
import { UserApproved, getUserData } from "./hooks/get-user-data";
import { jwtDecode } from "jwt-decode";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const signInURl = new URL("/", request.url);
  const uploadURL = new URL("/upload", request.url);
  const homeURL = new URL("/home", request.url);

  if (!token) {
    if (request.nextUrl.pathname === "/") {
      return NextResponse.next();
    }

    return NextResponse.redirect(signInURl);
  }

  const decoded: UserApproved = jwtDecode(token!);

  if (token) {
    if (request.nextUrl.pathname === "/") {
      if (!decoded.approved) {
        return NextResponse.redirect(uploadURL);
      }
      return NextResponse.redirect(homeURL);
    }
  }
  if (request.nextUrl.pathname === "/upload") {
    if (decoded.approved) {
      return NextResponse.redirect(homeURL);
    }
  }
}

export const config = {
  matcher: ["/", "/upload"],
};
