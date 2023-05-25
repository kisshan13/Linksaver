'use client'

import UsernameInput from "./UsernameInput"
import Text from "../ui/Text"
import { UsernameInputStates } from "./UsernameInput"

import { useEffect } from 'react'

import { useState } from "react"
import { useDebounce } from "@/hooks/debounced"

function mock(u: string) {
    let username = ['dodv6', 'dodv5', 'kishan']

    return new Promise((res, rej) => {
        setTimeout(() => {
            res(username.find(v => v === u))
        }, 1000)
    })
}

export function ProfileSubmission() {

    const [username, setUsername] = useState('')
    const [state, setState] = useState<UsernameInputStates>('not-typing')
    const debouncedUsername = useDebounce(username, 500)

    useEffect(() => {

        (async () => {
            if (debouncedUsername.length > 3) {
                setState('checking')
                let username = await mock(debouncedUsername)
                typeof username === 'string' && username.length ?
                    setState('exist') : setState('not-typing')
            }
        })()
    }, [debouncedUsername])

    return (
        <>
            <div className=" flex justify-center">
                <UsernameInput placeholder="username" state={state} value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
        </>
    )
}
