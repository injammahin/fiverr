import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {

    const token =
        request.cookies.get("token")?.value ||
        request.headers.get("Authorization")?.replace("Bearer ", "");

    const publicRoutes = ["/login", "/", "/registration"];

    const isPublic = publicRoutes.some((path) =>
        request.nextUrl.pathname.startsWith(path)
    );

    // If trying to access protected page without token → redirect
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
    ],
};
