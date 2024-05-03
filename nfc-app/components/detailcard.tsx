import React from 'react';

interface DetailCardProps {
  name: string;
}

interface DetailCardData {
  [key: string]: string;
}

export default function DetailCard({ data }: any) {
  return (
    <div>
        <div className='mb-2 flex w-full justify-center'>
          <label className=' text-gray-500  italic text-sm'>จำนวนการเข้าชม : {data.count_scan_card}</label>
        </div>
      <div className='flex flex-col items-center m-'>
        <h1 className='text-[20px] font-bold my-5 underline'>ข้อมูลการ์ด</h1>
      </div>
      <div className='flex flex-col items-center mb-8'>
        <label className='text-lg font-bold  italic'>วิธีการเล่น </label>
        <div className='break-words indent-[10px]'>
          {data.detail_card}
        </div>
      </div>

      <div className='flex flex-col items-center mb-8'>
        <label className='text-lg font-bold  italic'>เทคนิคการเล่น </label>
        <div className=' break-words indent-[10px]'>
          {data.tick_card}
        </div>

        <div className='flex flex-col items-center mb-8 my-8'>
          <label className='flex flex-col text-lg font-bold italic items-center'> รายละเอียด  </label>
          <div className=' break-words indent-[10px]'>
            {data.detail_card}
          </div>
        </div>
      </div>
    </div>
  );
}