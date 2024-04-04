// CardBoard.tsx

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Card from './card';
import { fetchImage } from './fetchImage';
// import selectCard from '@/api/selectAllCard';


const nameCard = [
  "villager",
  "werewolf",
  "seer",
  "cupid",
  "bodyguard",
  "auraseer",
  "drunk",
  "prince",
  "priest",
  "pi",
  "troublemaker",
  "witch",
  "oldhag",
  "apprenticeseer",
  "mayor",
  "hunter",
  "diseased",
  "pacifist",
  "ghost",
  "mason",
  "doppelganger",
  "lycan",
  "toughguy",
  "idiot",
  "wolfcup",
  "minion",
  "sorcerer",
  "hoodlum",
  "cursed",
  "tanner",
  "vampire",
  "cultleader",
  "revealer",
  "mentalist",
  "huntress",
  "mystic",
  "alphawolf",
  "spellcaster"
];

interface Card {
  id_card: number,
  title_card: string,
  detail_card: string,
  path_image_card: string,
  tick_card: string,
  count_scan_card: number,
}

interface CardProps {
  name: string;
}

export default function CardBoard( { data }: { data: Card} ) {
  const router = useRouter();
  console.log(data, "data Caaaaard")

  const viewCard = (name: string) => {
    router.push(`/Cards/${name}`);
  };

return (
  <div className='h-full'>
      <div onClick={() => viewCard(data.title_card)} className="cursor-pointer">
        <img
          src={fetchImage(data.path_image_card)}
          alt={data.title_card}
          width={300}
          height={280}
        />
      </div>
  </div>
);
}

