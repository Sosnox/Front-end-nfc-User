import React from 'react';
import AddGameCard from '@/components/addgame_menu';
import SearchBoardGame from '@/components/searchBoardgame';


export default function BoardGamePage() {
  return (
    <div className="pt-10">
      <div className='flex flex-col justify-center pb-7  '>
          <div className='flex flex-col justify-center items-center relative z-30 '>
            <SearchBoardGame/>
        </div>
        <div className='flex justify-center mt-12 text-[28px] underline font-semibold '>
          <h1>All GameBoard</h1>
        </div>
      </div>
      <AddGameCard></AddGameCard>
    </div>
  );
}
