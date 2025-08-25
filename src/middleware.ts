import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const allowedIds = ["00431", "00432"];
const protectedRoutes = ["/student-dashboard", "/course-one"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    const studentId = request.cookies.get("studentId")?.value;
    if (!allowedIds.includes(studentId || "")) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
  return NextResponse.next();
}
