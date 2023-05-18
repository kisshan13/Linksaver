
import Header from '@/components/landing/header'
import MainView from '@/components/landing/main-view'

export default function Home() {
  return (
    <>
      <div className='m-auto p-3 xl:w-4/5 xl:p-0 h-[200vh] perspective-5'>
        <Header />
        <MainView />
      </div>
    </>
  )
}
