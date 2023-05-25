'use client'

import UsernameInput from "./UsernameInput"
import { UsernameInputStates } from "./UsernameInput"

import { useState, useEffect } from "react"
import { useDebounce } from "@/hooks/debounced"
import { CheckRouteReturn } from "@/app/api/profile/check/route"

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
            setState('not-typing')
            if (debouncedUsername.length > 3) {
                setState('checking')
                let response = await fetch(`/api/profile/check?username=${debouncedUsername}`)
                let username: CheckRouteReturn = await response.json()
                console.log(username)
                username.username === 'exist' ?
                    setState('exist') :
                    setState('not-typing')
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
