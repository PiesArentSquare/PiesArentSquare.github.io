import { useRef } from 'react'
import heroImg from '../assets/hero.jpg'
import logo from '../assets/logo.svg'
import wave from '../assets/wave.svg'
import BoxedText from '../components/BoxedText'

const Home = () => {
    const background = useRef<HTMLImageElement>(null)
    const blendMode = 'mix-blend-difference', backgroundColor = 'bg-amber-700'

    return <div className='text-brand-text bg-brand-background text-xl lowercase'>
        <nav className='fixed backdrop-blur-sm inset-x-0 text-brand-background z-40'>
            <ul className='flex gap-16 mx-16 py-6 items-center'>
                <li className='grow'><img src={logo} alt='PiesArentSquare'/></li>
                <li>Info</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>

        <section id='hero' className={`flex flex-col justify-center text-brand-background ${backgroundColor} h-[80dvh] min-h-[500px] relative`}>
            <img ref={background} src={heroImg} alt='' className={`object-bottom object-cover w-full h-full absolute overflow-clip ${blendMode}`} />
            
            <div className='relative px-[10%]'>
                <div className='relative z-10'>
                    <img src={wave} alt='👋' className='inline-block align-bottom' />
                    <h2 className='inline-block text-5xl font-extrabold align-bottom'>Hey,</h2>
                </div>
                <BoxedText as='h1' imgRef={background} content="I'm Jeremiah" className='text-[144px]/[.8em] font-extrabold mb-12' blendMode={blendMode} backgroundColor={backgroundColor} />
                <BoxedText as='p' imgRef={background} content='I build full-stack apps with clean code for smooth dev and user experiences alike' className='text-2xl font-bold max-w-[400px] ml-20' blendMode={blendMode} backgroundColor={backgroundColor} />
            </div>
        </section>
        <section id='about-me'>
        </section>
    </div>
}
export default Home