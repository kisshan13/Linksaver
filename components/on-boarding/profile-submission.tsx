'use client'

import { AnimatePresence, motion } from "framer-motion"
import Heading from "../ui/heading"
import UsernameInput from "./username-input"

export function ProfileSubmission() {
    return (
        <>
            <div className=" flex justify-center">
                <UsernameInput placeholder="username" conclusion=" " />
            </div>
        </>
    )
}