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
        <button onClick={goBack}><MdOutlineArrowBackIos className="text-left" size={40} /> </button>
      </div>
      <button onClick={goBack}>
        <div className='text-2xl text-left mb-4'>
          <p><label className='text-2xl font-bold pb-5 '>ชื่อการ์ด : </label> {data.title_card}</p>
        </div>
      </button>
      <img src={`${fetchImage(data.path_image_card)}`} alt={`${data.title_card}`} width={300} height={280} />
    </div>
  );
}