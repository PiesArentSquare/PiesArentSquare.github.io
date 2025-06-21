import { useMemo } from 'react'
import Anchor from './Anchor'

interface ProjectProps extends React.PropsWithChildren {
    title: string
    subtitle: string
    href: string
}

const Project = ({title, subtitle, href, children}: ProjectProps) => {
    const [last, rest] = useMemo(() => {
        let words = title.split(' ')
        return [words.pop(), words.join(' ') + '\ ']
    }, [title])
    return <Anchor group href={href}>
        <h3 className='text-2xl md:text-4xl font-bold'>{rest}
            <span className='inline-block text-nowrap'>
                {last}
                <svg width={12} height={24} className='inline group-hover/project:translate-x-2 group-hover/project:-translate-y-2 group-focus-within/project:translate-x-2 group-focus-within/project:-translate-y-2 transition-all ml-2 md:ml-4 align-middle'>
                    <line x1={0} y1={1} x2={12} y2={1} style={{stroke: 'currentColor', strokeWidth: 2}} />
                    <line x1={11} y1={0} x2={11} y2={12} style={{stroke: 'currentColor', strokeWidth: 2}} />
                    <line x1={0} y1={12} x2={12} y2={0} style={{stroke: 'currentColor', strokeWidth: 2}} />
                </svg>
            </span>
        </h3>
        <h4 className='text-base text-brand-primary mb-4'>{subtitle}</h4>
        <p className='normal-case'>{children}</p>
    </Anchor>
}
export default Project