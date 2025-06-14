import { useMemo } from 'react'

interface AnchorProps extends React.PropsWithChildren {
    href: string | React.RefObject<HTMLElement | null>
    group?: boolean
    className?: string
    darkBorder?: boolean
}

const Anchor = ({href, children, group = true, className, darkBorder = false}: AnchorProps) => {
    const [url, onclick, target] = useMemo(() => {
        if (typeof href == 'string')
            return [href, () => {}, '_blank']
        else
            return ['', (e: React.MouseEvent) => {
                e.preventDefault()
                href.current?.scrollIntoView()
                console.log('hii', href)
            }, '']
    }, [href])
    return <a href={url} onClick={onclick} target={target} className={`group/project relative hover:opacity-100 ${group ? 'group-hover:opacity-50' : ''} transition-all duration-300 ${className}`}>
        {children}
        <div className={`absolute inset-0 border-[transparent] border-2 group-hover/project:-inset-4 ${darkBorder ? 'group-hover/project:border-brand-text' : 'group-hover/project:border-brand-primary'} transition-all pointer-events-none`}></div>
    </a>
}
export default Anchor