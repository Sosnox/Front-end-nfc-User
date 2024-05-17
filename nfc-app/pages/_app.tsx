import BottomNav from '@/components/navigation_bar'
import NavBar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Kanit } from 'next/font/google'
import PopupIcon from '@/components/popup_icon'


const inter = Kanit({ 
  subsets: ['latin'],
  weight: ['400']
  })
export default function App({ Component, pageProps }: AppProps) {
  return (

    <div className={`h-[100vh] ${inter.className}`}>
      <NavBar />
      <Component {...pageProps} />
      <PopupIcon/>
      <BottomNav />
    </div>
  )
}
