
import Header from '@/components/landing/header'
import MainView from '@/components/landing/main-view'

export default function Home() {
  return (
    <>
      <div className='m-auto p-3 xl:w-4/5 xl:p-0'>
        <Header />
        <MainView />
      </div>
    </>
  )
}
