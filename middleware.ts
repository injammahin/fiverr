import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {

    const token = request.cookies.get("token")?.value;

    // Routes that do NOT require login
    const publicRoutes = ["/", "/login", "/registration"];

    const pathname = request.nextUrl.pathname;
    const isPublic = publicRoutes.some((route) => pathname.startsWith(route));

    // Block access if protected route and no token
    if (!isPublic && !token) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/dashboard/:path*",
        "/contacts/:path*",
        "/sales/:path*",
        "/projects/:path*",
        "/products/:path*",
        "/purchases/:path*",
        "/banking/:path*",
        "/Accounting/:path*",
        "/more/:path*",
        "/tenant/:path*",
        "/admin/:path*",
        "/employee/:path*",
    ],
};
