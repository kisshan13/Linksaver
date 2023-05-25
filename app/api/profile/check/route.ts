import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export interface CheckRouteReturn {
    success: boolean,
    username?: 'exist' | 'not-exist'
    error?: string
}

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
        let isUsernamExist = await prisma.profile.findFirst({
            where: {
                username: username
            }
        })

        if (!isUsernamExist) {
            return NextResponse.json({
                success: true,
                username: 'not-exist'
            })
        }

        return NextResponse.json({
            success: true,
            username: 'exist'
        })
    }

    catch (e) {
        return NextResponse.json({
            success: false,
            error: 'Internal server error'
        })
    }
}