import { useRef } from 'react'
import heroImg from '../assets/hero.jpg'
import logo from '../assets/logo.svg'
import wave from '../assets/wave.svg'
import BoxedText from '../components/BoxedText'

const Home = () => {
    const background = useRef<HTMLImageElement>(null)
    const blendMode = 'mix-blend-difference', backgroundColor = 'bg-blue-700'

    return <div className='text-brand-text bg-brand-background text-xl lowercase'>
        <a href='#hero' className='absolute left-0 top-0 bg-brand-background text-brand-text py-2 px-4 z-50 -translate-y-full focus:translate-0 focus:outline-brand-background focus:border-2 focus:border-brand-primary focus:outline-4 transition border-dashed'>Skip to main content</a>
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
                <BoxedText as='p' imgRef={background} content='I build full-stack apps with clean code for smooth dev and user experiences alike' className='text-2xl font-bold max-w-[420px] ml-20' blendMode={blendMode} backgroundColor={backgroundColor} />
            </div>
        </section>
        <section id='about-me' className='flex justify-end py-48 px-[10%]'>
            <BoxedText content='About Me' backgroundColor='bg-brand-background' className='text-5xl font-extrabold mr-12' />
            <div className='max-w-[60ch] flex flex-col gap-12 mt-3'>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et  ligula nec velit volutpat imperdiet ut at metus. Praesent gravida tortor quis augue euismod mollis. Suspendisse potenti. Pellentesque quis elit  libero. Phasellus semper risus non nunc imperdiet, vitae luctus metus  vulputate. Curabitur aliquet diam sed ligula maximus laoreet non in  nunc. Donec turpis nisi, tincidunt vitae nisl tincidunt, dapibus  placerat ligula. Etiam a malesuada diam.</p>
                <p>Sed nec lorem dolor. Nulla diam elit, commodo non fringilla vitae,  viverra vitae est. Duis hendrerit iaculis arcu vel malesuada. Praesent  euismod nulla sed velit posuere, in varius ante eleifend. Donec dui  metus, efficitur a felis sed, tincidunt tempor enim. Cras sit amet  tincidunt sapien. Morbi molestie magna vitae felis placerat, sed  sagittis lacus tempus. Fusce volutpat odio ac lorem vehicula posuere. Ut ac est in sem auctor condimentum. Cras a ultrices lacus.</p>
                <p>Aliquam sollicitudin nulla at felis vulputate dignissim. Maecenas sit  amet tempus est. Etiam porttitor ipsum id mauris scelerisque, ut  vestibulum erat blandit. Aenean et orci eu leo dictum accumsan sit amet  eu metus. Phasellus id dui eget erat condimentum molestie. Donec sit  amet mi ex. Vivamus sit amet massa a eros finibus volutpat. Donec nec  elit nec justo laoreet lacinia. Nullam bibendum ligula a neque suscipit  elementum. Mauris vel hendrerit dolor. Sed eu commodo felis. Vestibulum  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia  curae; Aenean fringilla nunc felis.</p>
            </div>
        </section>
    </div>
}
export default Home