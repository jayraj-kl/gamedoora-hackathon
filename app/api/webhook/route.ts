import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const reqestBody = await req.json();
    console.log(reqestBody);

    return NextResponse.json({ message: "Webhook received" });
}