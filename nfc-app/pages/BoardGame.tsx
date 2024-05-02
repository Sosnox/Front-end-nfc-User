import React from 'react';
import AddGameCard from '@/components/addgame_menu';
import Search from '@/components/input_search';


export default function BoardGamePage() {
  return (
    <div className="pt-10">
      <div className='flex justify-center pb-7 text-[30px] font-bold'>
          <div className='flex flex-col justify-center items-center'>
            <Search/>
            <h1>All GameBoard</h1>
        </div>
      </div>
      <AddGameCard></AddGameCard>
    </div>
  );
}
