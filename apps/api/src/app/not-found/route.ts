import { NextResponse } from "next/server";

export const GET = () => {
	return NextResponse.json({ error: "Not Found" }, { status: 404 });
};

export const POST = () => {
	return NextResponse.json({ error: "Not Found" }, { status: 404 });
};

export const PUT = () => {
	return NextResponse.json({ error: "Not Found" }, { status: 404 });
};

export const DELETE = () => {
	return NextResponse.json({ error: "Not Found" }, { status: 404 });
};
