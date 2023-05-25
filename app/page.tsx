
import { Metadata } from 'next'

import Features from '@/components/landing/Features'
import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import MainView from '@/components/landing/MainView'
import Slogan from '@/components/landing/Slogan'

export const metadata: Metadata = {
  title: 'LinkSaver - Your own link organizer',
  description: 'Linksaver provides best way to organize your links, sharing and collection of links you love.',
}

export default function Home() {
  return (
    <>
      <div className='m-auto p-3 xl:w-4/5 xl:p-0 perspective-5'>
        <div className="content z-10">
          <Header />
          <MainView className=' my-40' />
          <Slogan className='my-40' />
        </div>

        <div className=' my-40 h-28 bg-pink blur-[364px]'>
        </div>

        <Features className=' -translate-y-36' />
      </div>
      <div className=' bg-pink py-6 xl:px-0 px-4'>
        <Footer className=' bg-pink xl:w-4/5 xl:p-0 m-auto'/>
      </div>
    </>
  )
}
