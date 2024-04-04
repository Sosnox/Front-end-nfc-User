
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



const nameCard = [
  'werewolf',
  'hunter',
  'seer',
  'villager',
  'bodyguard',
  'werewolf',
  'werewolf',
  'werewolf',
];

export default function Home() {
  // const router = useRouter();
  // const CardId = params.nameCard

  return (
    <main>
        <HomePage/>
    </main>
  );
}
