import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import z, { ZodError } from 'zod'

const bodySchema = z.object({
    username: z.string(),
    about: z.string()
})

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json({
                success: false,
                error: 'Unauthorized'
            })
        }

        const json = await req.json()
        const body = bodySchema.parse(json)

        const { user } = session
        const profile = await prisma.profile.create({
            data: {
                userId: user.id,
                username: body.username,
                about: body.about
            }
        })

        return NextResponse.json({
            success: true,
            data: profile
        })
    }

    catch (e) {
        if (e instanceof ZodError) {
            return NextResponse.json({ success: false, error: 'Missing required fields: [username, password]' })
        }

        return NextResponse.json({success: false, error: 'Internal server error'})
    }
}