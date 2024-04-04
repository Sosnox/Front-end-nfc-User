import React, { use, useState } from 'react';
import Image from 'next/image';
import { MdOutlineArrowBackIos } from "react-icons/md";





const NEXT_PUBLIC_URL_image = 'http://210.246.215.173:8000/static/'

export default function CardGamePage({ data }: { data: any }) {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="flex flex-col items-center mx-14">
      <div className='absolute left-5 back-button'>
                <button onClick={goBack}> <MdOutlineArrowBackIos className="text-left" size={40}/> </button>
            </div>
      <button onClick={goBack}>
        <label className='flex justify-between gap-5 text-2xl font-bold pb-5 text-black-10 w-f'> Card : {data.title_card}  </label>
      </button>
      <Image src={`${NEXT_PUBLIC_URL_image}${data.path_image_card}`} alt={`${data.title_card}`} width={300} height={280} />
    </div>
  );
}