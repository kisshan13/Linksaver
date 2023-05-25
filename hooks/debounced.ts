import { useState, useEffect } from "react"

export function useDebounce(value: string, timeout: number) {
    let [v, setV] = useState('')

    useEffect(() => {
        const timer = setTimeout(() => {
            setV('')
            if (value.length >= 3) {
                setV(value)
            }
            value.length === 0 ? setV('') : ''
        }, timeout)

        return () => {
            clearTimeout(timer)
        }

    }, [value, timeout])

    return v
}