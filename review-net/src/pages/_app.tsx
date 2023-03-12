import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import SideNav from 'components/SideNav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SideNav/>
    <div className='flex h-full mt-16 flex-1 flex-col md:pl-[260px]'>
      <Component {...pageProps} />
    </div>
    {/* <Component {...pageProps} /> */}
    </>
  )
}
