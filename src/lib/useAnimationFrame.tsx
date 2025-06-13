// adapted from https://css-tricks.com/using-requestanimationframe-with-react-hooks/

import { useEffect, useRef } from 'react'

export const useAnimationFrame = (callback: (time: number, delta: number) => void) => {
    const requestRef = useRef<number>(0)
    const previousTimeRef = useRef<number>(undefined)

    const animate = (time: number) => {
        if (previousTimeRef.current != undefined) {
            const deltaTime = time - previousTimeRef.current
            callback(time, deltaTime)
        }
        previousTimeRef.current = time
        requestRef.current = requestAnimationFrame(animate)
    }

    useEffect(() => {
        requestRef.current = requestAnimationFrame(animate)
        return () => cancelAnimationFrame(requestRef.current)
    }, [])
}