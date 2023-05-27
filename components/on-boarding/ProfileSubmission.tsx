'use client'

import UsernameInput from "./UsernameInput"
import { UsernameInputStates } from "./UsernameInput"
import { motion } from 'framer-motion'
import loaderSvg from '@/public/svg/loader-pink.svg'
import { useState, useEffect } from "react"
import { useDebounce } from "@/hooks/debounced"
import { CheckRouteReturn } from "@/app/api/profile/check/route"
import StatusInput from "./StatusInput"
import Button from "../ui/Button"
import Text from "../ui/Text"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation"

export function ProfileSubmission() {

    const [username, setUsername] = useState('')
    const [state, setState] = useState<UsernameInputStates>('not-typing')
    const [status, setStatus] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const debouncedUsername = useDebounce(username, 500)
    const router = useRouter()

    const isFilled = (username.length >= 4 && status) || !submitting ? 'opacity-100' : 'opacity-50'

    async function handleSubmission() {
        try {
            setSubmitting(true)
            let res = await fetch('/api/profile/create', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    about: status
                })
            })

            let {success, data} = await res.json()

            if(success) {
                router.push(`/profile/${data?.username}`)
            }

            else{
                setSubmitting(false)
            }
        }

        catch (e) {
            console.log(e)
        }
    }

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
            <div className=" flex-col flex justify-center items-center">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}>
                    <UsernameInput placeholder="username" state={state} value={username} onChange={(e) => setUsername(e.target.value)} disabled={submitting}/>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}>
                    <StatusInput placeholder="status here..." value={status} onChange={(e) => setStatus(e.target.value)} disabled={submitting}/>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}>
                    <Button variants="outlin" onClick={handleSubmission} className={cn(["group hover:bg-pink disabled:hover:bg-none", isFilled])} disabled={!(username.length >= 4 && status) || submitting}>
                        <Text className="font-medium group-hover:text-black">
                            Create Profile !!
                        </Text>
                    </Button>
                </motion.div>

                <Image src={loaderSvg} alt={'loader'} width={25} height={25} className={cn(["my-4 animate-spin", submitting ? 'opacity-100' : 'opacity-0'])}>
                </Image>
            </div>
        </>
    )
}
