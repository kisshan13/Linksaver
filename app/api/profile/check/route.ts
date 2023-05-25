import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')

    if (typeof username !== 'string') {
        return NextResponse.json({
            success: false,
            error: 'Username not given.'
        })
    }

    try {

    }

    catch(e) {
        
    }

    return NextResponse.json({ username })
}