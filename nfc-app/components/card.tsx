import React, { use, useState } from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { fetchImage } from './fetchImage';

export default function CardGamePage({ data }: { data: any }) {
  const goBack = () => {
    window.history.back();
  }

  return (
    <div className="flex flex-col items-center mx-14 mb-4">
      <div className='absolute left-5 back-button'>
        <button onClick={goBack}><MdOutlineArrowBackIos className="w-[50px] h-[50px]" size={40} /> </button>
      </div>
      <button onClick={goBack}>
        <div className='text-2xl text-left mb-4'>
          <div className='text-[28px] underline font-semibold pb-5 '>{data.title_card} </div>
        </div>
      </button>
      <img src={`${fetchImage(data.path_image_card)}`} alt={`${data.title_card}`} width={300} height={280} />
    </div>
  );
}