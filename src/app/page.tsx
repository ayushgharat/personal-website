import Aspirations from '@/components/aspirations'
import Contact from '@/components/contact'
import Header from '@/components/header'
import Homepage from '@/components/homepage'
import Projects from '@/components/projects'
import WhoAmI from '@/components/who_section'
import Image from 'next/image'


export default function Home() {
  return (
    <main className='h-full font-mono'>
      <div>
        <Header/>
        <Homepage/>
        <WhoAmI/>
        <Projects/>
        <Aspirations/>
        <Contact/>
      </div>
    </main>
  )
}
