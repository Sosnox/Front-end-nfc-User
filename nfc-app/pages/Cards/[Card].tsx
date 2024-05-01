import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import CardGamePage from '../../components/card';
import DetailCard from '../../components/detailcard';
import { useRouter } from 'next/router';
import selectByNameCard from '@/api/Card/selectByNameCard'; // Assuming selectByNameCard is the correct function
import updateViewCard from '@/api/Card/updateViewCard';

interface init_Card {
  id_card: number,
  title_card: string,
  detail_card: string,
  path_image_card: string,
  tick_card: string,
  count_scan_card: number,
}
type data = any;

export default function CardPage() {
  const router = useRouter();
  const [card, setCard] = useState<init_Card>(); // card can be undefined initially
  const name = router.query.Card as string;

  useEffect(() => {
    const fetchData = async () => {
      if (name) {
        try {
          await updateViewCard(name);
          const data_card = await selectByNameCard(name);
          console.log(data_card, "data_card")
          setCard(data_card[0]);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();
  }, [name]);

  if (!name || !card) {
    return <div>Loading...</div>; // Show loading until name and card are available
  }

  console.log(card, "cardnaja")
  return (
    <div className="flex flex-col p-12 ">
      <CardGamePage data={card} />
      <div className=''><DetailCard data={card} /></div>
    </div>
  );
}
