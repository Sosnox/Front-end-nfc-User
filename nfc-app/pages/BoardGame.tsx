import React from 'react';
import AddGameCard from '@/components/addgame_menu';
import SearchBoardGame from '@/components/searchBoardgame';


export default function BoardGamePage() {
  return (
    <div className="pt-10">
      <div className='flex justify-center pb-7  '>
          <div className='flex flex-col justify-center items-center'>
            <SearchBoardGame/>
            <h1>All GameBoard</h1>
        </div>
      </div>
      <AddGameCard></AddGameCard>
    </div>
  );
}
