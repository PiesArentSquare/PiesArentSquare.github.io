import Anchor from './Anchor'

interface ProjectProps {
    title: string
    subtitle: string
    content: string
    href: string
}

const Project = ({title, subtitle, content, href}: ProjectProps) => <Anchor href={href}>
    <h3 className='text-4xl font-bold'>{title}</h3>
    <h4 className='text-base text-brand-primary mb-4'>{subtitle}</h4>
    <p>{content}</p>
</Anchor>
export default Project