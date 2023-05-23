
import Card from '@/components/landing/Card'
import Features from '@/components/landing/Features'
import Header from '@/components/landing/Header'
import MainView from '@/components/landing/MainView'
import Slogan from '@/components/landing/Slogan'


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

        <Features />
      </div>
    </>
  )
}
