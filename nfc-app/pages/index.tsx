
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import HomePage from './Home';
import CardPage from './Cards/[Card]';
import BoardGamePage from './BoardGame';
import NavBar from '../components/navbar'
import BottomNav from '../components/navigation_bar'
import { Navbar } from '@nextui-org/react';




export default function Home() {


  return (
    <main>
        <HomePage/>
    </main>
  );
}
