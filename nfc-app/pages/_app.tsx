import BottomNav from '@/components/navigation_bar'
import NavBar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Inter } from 'next/font/google'
import PopupIcon from '@/components/popup_icon'


const inter = Inter({ subsets: ['latin'] })
export default function App({ Component, pageProps }: AppProps) {
  return (

    <div className={inter.className}>
      <NavBar />
      <Component {...pageProps} />
      <PopupIcon/>
      <BottomNav />
    </div>
  )
}
