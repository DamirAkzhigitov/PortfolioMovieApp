import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createSession } from "@/api/auth";

export async function middleware(req: NextRequest) {
  let sessionId = req.cookies.get("sessionId");
  const requestToken = new URL(req.url).searchParams.get("request_token");
  const nextPageLogin = req.nextUrl.pathname === "/login";

  if (!sessionId?.value && !requestToken && !nextPageLogin) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (!sessionId?.value && requestToken) {
    const newSessionId = await createSession(requestToken);
    if (newSessionId) {
      const response = NextResponse.redirect("http://localhost:3000");
      response.cookies.set("sessionId", newSessionId);
      return response;
    } else {
      const nextUrl = req.nextUrl;
      nextUrl.searchParams.delete("request_token");
      if (!nextPageLogin) return NextResponse.redirect(nextUrl);
      else NextResponse.next();
    }
  }

  if (sessionId && (requestToken || nextPageLogin)) {
    return NextResponse.redirect("http://localhost:3000/");
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
