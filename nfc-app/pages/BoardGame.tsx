import React from 'react';
import AddGameCard from '@/components/addgame_menu';
import SearchBoardGame from '@/components/searchBoardgame';


export default function BoardGamePage() {
  return (
    <div className="pt-10">
      <div className='flex flex-col justify-center pb-7  '>
          <div className='flex flex-col justify-center items-center relative  '>
            <SearchBoardGame/>
        </div>
        <div className='flex justify-center mt-12 text-[28px]  font-semibold '>
        </div>
      </div>
      <AddGameCard/>
    </div>
  );
}
