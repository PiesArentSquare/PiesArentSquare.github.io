import { useImageAlignment } from '../lib/useImageAlignment'
import './BoxedText.css'

interface BoxedTextProps {
    as?: React.ElementType
    imgRef?: React.RefObject<HTMLImageElement | null>
    content: string
    className?: string
    backgroundColor?: string
    blendMode?: string
    direction?: 'left' | 'right' | 'small'
}

const BoxedText = ({as: Tag = 'h2', imgRef, content, className, backgroundColor, blendMode, direction = 'right'}: BoxedTextProps) => {
    const {ref, imgSize, imgPos, recalculate} = imgRef ? useImageAlignment(imgRef) : {}

    // small means left when < md, right when >= md
    const boxMargin = {left: 'ml-2 md:ml-4', right: 'mr-2 md:mr-4', small: 'ml-2 md:mr-4'}[direction]
    const textPadding = {left: 'pl-2 md:pl-4', right: 'pr-2 md:pr-4', small: 'pl-2 md:pr-4'}[direction]
    const boxPlacement = {
        left: 'right-8 -left-3 md:right-12 md:-left-4',
        right: 'left-8 -right-3 md:left-12 md:-right-4',
        small: 'right-8 -left-3 md:left-12 md:-right-4'
    }[direction]

    return <div className={className}>
        <div className={`relative inline-block ${boxMargin}`}>
            {/* text */}
            <Tag className={`relative z-20 ${textPadding} pb-9`}>{content}</Tag>
            {/* box */}
            <div className={`absolute top-[20%] ${boxPlacement} bottom-3 md:bottom-1 border-2 border-brand-primary`}></div>
            {/* stroke background for blending */}
            <div className={`absolute inset-0 bg-clip-text ${textPadding} pb-4 z-5 ${backgroundColor} boxed-text-stroke`}>{content}</div>
            {/* stroke image background */}
            {imgRef
                ? <div ref={ref} className={`absolute inset-0 bg-clip-text ${textPadding} pb-9 z-10 ${blendMode} boxed-text-stroke`} style={{backgroundImage: `url("${imgRef.current?.src}")`, backgroundSize: imgSize, backgroundPosition: imgPos}}>{content}</div>
                : <></>
            }
        </div>
    </div>
}
export default BoxedText