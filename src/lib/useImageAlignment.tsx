import { useCallback, useEffect, useRef, useState } from 'react'

export const useImageAlignment = (imgRef: React.RefObject<HTMLImageElement | null>) => {
    const elementRef = useRef<HTMLElement>(null)
    const [imgSize, setImgSize] = useState('0 0')
    const [imgPos, setImgPos] = useState('0 0')

    const calculateAlignment = useCallback(() => {
        const img = imgRef.current
        const stroke = elementRef.current
        if (!img || !stroke)
            return

        const bgRect = img.getBoundingClientRect()
        const textRect = stroke.getBoundingClientRect()

        const imgAspect = img.naturalWidth / img.naturalHeight
        const bgAspect = bgRect.width / bgRect.height

        // do object-fit: cover; calculation
        let fitWidth, fitHeight
        if (imgAspect < bgAspect) {
            fitWidth = bgRect.width
            fitHeight = fitWidth / imgAspect
        } else {
            fitHeight = bgRect.height
            fitWidth = fitHeight * imgAspect
        }

        // bgPos origin is top left of text, object-bottom means image origin is bottom middle

        const cutX = fitWidth - bgRect.width
        const cutY = fitHeight - bgRect.height

        const offsetX = bgRect.left - textRect.left - cutX / 2
        const offsetY = bgRect.top - textRect.top - cutY

        setImgPos(`${offsetX}px ${offsetY}px`) 
        setImgSize(`${fitWidth}px ${fitHeight}px`)
    }, [imgRef])

    const setElementRef = useCallback((node: HTMLDivElement | null) => {
        elementRef.current = node
        if (node)
            calculateAlignment()
    }, [calculateAlignment])

    useEffect(() => {
        window.addEventListener('resize', calculateAlignment)
        return () => window.removeEventListener('resize', calculateAlignment)
    }, [calculateAlignment])

    useEffect(() => {
        const img = imgRef.current
        if (img && img.complete) {
            calculateAlignment()
        } else if (img) {
            img.addEventListener('load', calculateAlignment)
            return () => img.removeEventListener('load', calculateAlignment)
        }
    }, [imgRef, calculateAlignment])

    useEffect(() => {
        calculateAlignment()
    }, [])

    return {
        ref: setElementRef,
        imgSize,
        imgPos,
        recalculate: calculateAlignment,
    }
}