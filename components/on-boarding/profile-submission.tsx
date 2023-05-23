'use client'

import { AnimatePresence, motion } from "framer-motion"
import Heading from "../ui/heading"
import UsernameInput from "./username-input"

import { ChangeEvent, useEffect } from 'react'

import { useState } from "react"


export function ProfileSubmission() {

    const [username, setUsername] = useState('')

    return (
        <>
            <div className=" flex justify-center">
                <UsernameInput placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
        </>
    )
}
