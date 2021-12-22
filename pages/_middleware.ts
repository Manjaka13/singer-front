import { NextResponse } from "next/server";

export async function middleware(req) {
	const { pathname } = req.nextUrl;
	if (pathname == "/produits") {
		return NextResponse.redirect("/produits/tout");
	}
	return NextResponse.next();
}
