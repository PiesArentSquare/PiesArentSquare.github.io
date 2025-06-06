import { useImageAlignment } from '../lib/useImageAlignment'

interface BoxedTextProps {
    as?: React.ElementType
    imgRef?: React.RefObject<HTMLImageElement | null>
    content: string
    className?: string
    backgroundColor?: string
    blendMode?: string
}

const BoxedText = ({as: Tag = 'h2', imgRef, content, className, backgroundColor, blendMode}: BoxedTextProps) => {
    const {ref, imgSize, imgPos, recalculate} = imgRef ? useImageAlignment(imgRef) : {}

    return <div>
        <div className={`relative inline-block ${className}`}>
            {/* text */}
            <Tag className='relative z-20 pr-4 pb-5 mb-4'>{content}</Tag>
            {/* box */}
            <div className='absolute top-[20%] left-12 bottom-1 -right-4 border-2 border-brand-primary'></div>
            {/* stroke background for blending */}
            <div className={`absolute inset-0 bg-clip-text pr-4 pb-4 z-5 ${backgroundColor}`} style={{WebkitTextStroke: '2rem transparent'}}>{content}</div>
            {/* stroke image background */}
            {imgRef
                ? <div ref={ref} className={`absolute inset-0 bg-clip-text pr-4 pb-4 z-10 ${blendMode}`} style={{WebkitTextStroke: '2rem transparent', backgroundImage: `url("${imgRef.current?.src}")`, backgroundSize: imgSize, backgroundPosition: imgPos}}>{content}</div>
                : <></>
            }
        </div>
    </div>
}
export default BoxedText