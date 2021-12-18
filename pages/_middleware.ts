import { NextResponse, NextRequest } from "next/server";

export async function middleware(req, ev) {
    const { pathname } = req.nextUrl
    if (pathname == "/produits") {
        return NextResponse.redirect("/produits/tout");
    }
    return NextResponse.next()
}