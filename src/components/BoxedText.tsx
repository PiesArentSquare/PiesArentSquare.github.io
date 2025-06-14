import { useImageAlignment } from '../lib/useImageAlignment'

interface BoxedTextProps {
    as?: React.ElementType
    imgRef?: React.RefObject<HTMLImageElement | null>
    content: string
    className?: string
    backgroundColor?: string
    blendMode?: string
    direction?: 'left' | 'right'
}

const BoxedText = ({as: Tag = 'h2', imgRef, content, className, backgroundColor, blendMode, direction = 'right'}: BoxedTextProps) => {
    const {ref, imgSize, imgPos, recalculate} = imgRef ? useImageAlignment(imgRef) : {}

    const boxMargin = direction == 'left' ? 'ml-4' : 'mr-4'
    const textPadding = direction == 'left' ? 'pl-4' : 'pr-4'
    const boxPlacement = direction == 'left' ? 'right-12 -left-4' : 'left-12 -right-4'

    return <div className={className}>
        <div className={`relative inline-block ${boxMargin}`}>
            {/* text */}
            <Tag className={`relative z-20 ${textPadding} pb-9`}>{content}</Tag>
            {/* box */}
            <div className={`absolute top-[20%] ${boxPlacement} bottom-1 border-2 border-brand-primary`}></div>
            {/* stroke background for blending */}
            <div className={`absolute inset-0 bg-clip-text ${textPadding} pb-4 z-5 ${backgroundColor}`} style={{WebkitTextStroke: '2rem transparent'}}>{content}</div>
            {/* stroke image background */}
            {imgRef
                ? <div ref={ref} className={`absolute inset-0 bg-clip-text ${textPadding} pb-9 z-10 ${blendMode}`} style={{WebkitTextStroke: '2rem transparent', backgroundImage: `url("${imgRef.current?.src}")`, backgroundSize: imgSize, backgroundPosition: imgPos}}>{content}</div>
                : <></>
            }
        </div>
    </div>
}
export default BoxedText