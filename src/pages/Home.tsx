import { useEffect, useRef, useState } from 'react'
import heroImg from '../assets/hero.jpg'
import logo from '../assets/logo.svg'
import logoNoText from '../assets/logo-notext.svg'
import wave from '../assets/wave.svg'
import BoxedText from '../components/BoxedText'
import Project from '../components/Project'
import Anchor from '../components/Anchor'

const Home = () => {
    const background = useRef<HTMLImageElement>(null)
    const blendMode = 'mix-blend-difference', backgroundColor = 'bg-blue-700'

    const scrollThreshold = useRef<HTMLDivElement>(null)
    const [darkenNav, setDarkenNav] = useState(false)
    
    const hero = useRef<HTMLDivElement>(null)
    const aboutMe = useRef<HTMLDivElement>(null)
    const projects = useRef<HTMLDivElement>(null)
    const contact = useRef<HTMLDivElement>(null)
    

    const scrollObserver = new IntersectionObserver(entries => setDarkenNav(entries[0].boundingClientRect.y < 0))
    useEffect(() => {
        if (scrollThreshold.current)
            scrollObserver.observe(scrollThreshold.current)
    }, [scrollThreshold])

    return <div className={`text-brand-text bg-brand-background md:text-xl lowercase overflow-hidden`}>
        <a href='#hero' id='skipnav' className='absolute left-4 top-0 bg-brand-background text-brand-text py-2 px-4 z-50 -translate-y-full focus:translate-y-4 focus:outline-brand-background focus:border-2 focus:border-brand-text focus:outline-4 transition border-dashed'>Skip to main content</a>
        <nav className={`fixed inset-x-0 text-brand-background z-40 ${darkenNav ? 'bg-brand-text/50 backdrop-blur-sm ' : 'bg-transparent'} transition-all duration-300`}>
            <div className='flex justify-between mx-4 md:mx-16 py-6 items-center'>
                <div className='grow'>
                    <Anchor href={hero} className='w-fit' enableHover={false}>
                        <img src={logo} alt='PiesArentSquare' className='hidden sm:inline'/>
                        <img src={logoNoText} alt='PiesArentSquare' className='sm:hidden inline' />
                    </Anchor>
                </div>
                <ul className={`transition-all flex gap-4 md:gap-16`}>
                    <li><Anchor group={false} href={aboutMe}>Info</Anchor></li>
                    <li><Anchor group={false} href={projects}>Projects</Anchor></li>
                    <li><Anchor group={false} href={contact}>Contact</Anchor></li>
                </ul>
            </div>
        </nav>

        <section ref={hero} id='hero' className={`flex flex-col justify-center text-brand-background ${backgroundColor} h-[100dvh] sm:h-[calc(100dvh-9rem)] lg:h-[calc(100dvh-12rem)] min-h-[500px] relative`}>
            <img ref={background} src={heroImg} alt='' className={`object-bottom object-cover w-full h-full absolute overflow-clip ${blendMode}`} />
            
            <div ref={scrollThreshold} className='relative top-0'></div>
            <div className='relative px-4 sm:px-[10%] py-20'>
                <div className='relative z-10'>
                    <img src={wave} alt='👋' className='inline-block align-text-bottom h-[37px] md:h-[46px] lg:h-[58px]' />
                    <h2 className='inline-block text-2xl md:text-4xl lg:text-5xl font-extrabold align-text-bottom'>Hey,</h2>
                </div>
                <BoxedText as='h1' imgRef={background} content="I'm Jeremiah" className='text-5xl/[.8em] md:text-8xl/[.8em] lg:text-[144px]/[.8em] font-extrabold mb-12 whitespace-nowrap' blendMode={blendMode} backgroundColor={backgroundColor} />
                <BoxedText as='p' imgRef={background} content='I build full-stack apps with clean code for smooth dev and user experiences alike' className='text-lg md:text-2xl font-bold max-w-[290px] ml-auto md:max-w-[420px] md:ml-20 text-right md:text-left' blendMode={blendMode} backgroundColor={backgroundColor} direction='small'/>
            </div>
        </section>

        <section ref={aboutMe} id='about-me' className='flex flex-col lg:flex-row justify-end py-24 sm:py-36 lg:py-48 px-[10%]'>
            <BoxedText content='About Me' backgroundColor='bg-brand-background' className='text-3xl md:text-7xl font-extrabold mr-12 mb-4 md:mb-8 whitespace-nowrap' />
            <div className='max-w-[60ch] flex flex-col gap-12 mt-3'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et  ligula nec velit volutpat imperdiet ut at metus. Praesent gravida tortor quis augue euismod mollis. Suspendisse potenti. Pellentesque quis elit  libero. Phasellus semper risus non nunc imperdiet, vitae luctus metus  vulputate. Curabitur aliquet diam sed ligula maximus laoreet non in  nunc. Donec turpis nisi, tincidunt vitae nisl tincidunt, dapibus  placerat ligula. Etiam a malesuada diam.</p>
                <p>Sed nec lorem dolor. Nulla diam elit, commodo non fringilla vitae,  viverra vitae est. Duis hendrerit iaculis arcu vel malesuada. Praesent  euismod nulla sed velit posuere, in varius ante eleifend. Donec dui  metus, efficitur a felis sed, tincidunt tempor enim. Cras sit amet  tincidunt sapien. Morbi molestie magna vitae felis placerat, sed  sagittis lacus tempus. Fusce volutpat odio ac lorem vehicula posuere. Ut ac est in sem auctor condimentum. Cras a ultrices lacus.</p>
                <p>Aliquam sollicitudin nulla at felis vulputate dignissim. Maecenas sit  amet tempus est. Etiam porttitor ipsum id mauris scelerisque, ut  vestibulum erat blandit. Aenean et orci eu leo dictum accumsan sit amet  eu metus. Phasellus id dui eget erat condimentum molestie. Donec sit  amet mi ex. Vivamus sit amet massa a eros finibus volutpat. Donec nec  elit nec justo laoreet lacinia. Nullam bibendum ligula a neque suscipit  elementum. Mauris vel hendrerit dolor. Sed eu commodo felis. Vestibulum  ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia  curae; Aenean fringilla nunc felis.</p>
            </div>
        </section>
        
        <section ref={projects} id='projects' className='flex flex-col lg:flex-row-reverse items-end lg:items-start justify-end py-24 md:py-36 lg:py-48 px-[10%] bg-brand-text text-brand-background'>
            <BoxedText content='Projects' backgroundColor='bg-brand-text' className='text-3xl md:text-7xl font-extrabold ml-12 mb-4 md:mb-8 whitespace-nowrap' direction='left'/>
            <div className='group max-w-[60ch] flex flex-col gap-16 mt-3'>
                <Project title='NTRU Encrypted Messaging' href='https://github.com/piesarentsquare/ntru-messaging' subtitle='Full-stack development' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et  ligula nec velit volutpat imperdiet ut at metus. Praesent gravida tortor quis augue euismod mollis. Suspendisse potenti. Pellentesque quis elit  libero.' />
                <Project title='Checkmate' href='https://github.com/Paul-Austin-Oswego-CSC480-HCI521/OZ-CSC-480-HCI-521-Fall-2024' subtitle='Backend lead' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et  ligula nec velit volutpat imperdiet ut at metus. Praesent gravida tortor quis augue euismod mollis. Suspendisse potenti. Pellentesque quis elit  libero.' />
                <Project title='Gravity Wave Analysis Tool' href='https://github.com/gravitywaveanalysistool/gwat' subtitle='Design, development, testing' content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et  ligula nec velit volutpat imperdiet ut at metus. Praesent gravida tortor quis augue euismod mollis. Suspendisse potenti. Pellentesque quis elit  libero.' />
            </div>
        </section>
        
        <section ref={contact} id='contact' className='flex flex-col md:flex-row justify-center py-24 md:py-48 px-[10%] bg-brand-primary text-brand-background gap-16'>
            <Anchor group={false} href='mailto:jjhh12@outlook.com' className='text-brand-text underline decoration-2' darkBorder={true}>Email: jjhh12@outlook.com</Anchor>
            <Anchor group={false} href='https://github.com/piesarentsquare' className='text-brand-text underline decoration-2' darkBorder={true}>GitHub: @PiesArentSquare</Anchor>
        </section>
    </div>
}
export default Home