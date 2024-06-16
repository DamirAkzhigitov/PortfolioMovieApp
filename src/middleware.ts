import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { useRouter } from "next/router";
import { createSession } from "@/api/auth";

export async function middleware(req: NextRequest) {
  const requestToken = new URL(req.url).searchParams.get("request_token");
  console.log("requestToken: ", requestToken);

  if (!requestToken) {
    return NextResponse.rewrite(new URL("/login", req.url));
  } else {
    const sessionId = await createSession({
      request_token: requestToken,
    });
    //
    console.log("sessionId: ", sessionId);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
