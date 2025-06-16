interface HighlightProps extends React.PropsWithChildren {}

const TechnologyHighlight = ({children}: HighlightProps) => {
    return <span className='text-brand-primary' aria-label='Technology used'>{children}</span>
}
export default TechnologyHighlight