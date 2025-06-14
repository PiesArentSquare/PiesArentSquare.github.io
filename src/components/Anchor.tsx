import { useMemo } from 'react'

interface AnchorProps extends React.PropsWithChildren {
    href: string | React.RefObject<HTMLElement | null>
    group?: boolean
    className?: string
    darkBorder?: boolean
    enableHover?: boolean
}

const Anchor = ({href, children, group = true, className, darkBorder = false, enableHover = true}: AnchorProps) => {
    const [url, onclick, target] = useMemo(() => {
        if (typeof href == 'string')
            return [href, (e:React.MouseEvent<HTMLElement>) => {e.currentTarget.blur()}, '_blank']
        else
            return ['', (e: React.MouseEvent<HTMLElement>) => {
                e.preventDefault()
                e.currentTarget.blur()
                href.current?.scrollIntoView()
            }, '']
    }, [href])

    const lightClasses = useMemo(() => {
        const styles = 'group-focus-within/project:border-brand-primary'
        if (enableHover)
            return 'group-hover/project:-inset-4 group-hover/project:border-brand-primary ' + styles
        else
            return styles
    }, [enableHover])

    const darkClasses = useMemo(() => {
        const styles = 'group-focus-within/project:border-brand-text'
        if (enableHover)
            return 'group-hover/project:-inset-4 group-hover/project:border-brand-text ' + styles
        else
            return styles
    }, [enableHover])

    return <a href={url} onClick={onclick} target={target} className={`group/project relative ${enableHover ? 'hover:opacity-100' : ''}  outline-none ${group && enableHover ? 'group-hover:opacity-50' : ''} transition-all duration-300 ${className}`}>
        {children}
        <div className={`absolute inset-0 border-[transparent] border-2 group-focus-within/project:-inset-4 ${darkBorder ? darkClasses : lightClasses} transition-all pointer-events-none`}></div>
    </a>
}
export default Anchor