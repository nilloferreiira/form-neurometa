import { NextRequest, NextResponse } from "next/server";
import { getUserApproved } from "./hooks/get-user-approved";

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

  // const isUserApproved: UserApproved = jwtDecode(token!);
  const isUserApproved = getUserApproved();

  if (token) {
    if (request.nextUrl.pathname === "/") {
      if (!isUserApproved.approved) {
        return NextResponse.redirect(uploadURL);
      }
      return NextResponse.redirect(homeURL);
    }
  }
  if (request.nextUrl.pathname === "/upload") {
    if (isUserApproved.approved) {
      return NextResponse.redirect(homeURL);
    }
  }
}

export const config = {
  matcher: ["/", "/upload", "/home", "/psicologos"],
};
