import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import RecommendedBoardGames from '@/api/BoardGame/selectRecommend';
import { fetchImage } from './fetchImage';


function AddGameTopic() {
    const [boardGame, setBoardGame] = useState<any[]>([]);

    useEffect(() => {
        const fetchBoardGame = async () => {
            try {
                const data = await RecommendedBoardGames();
                setBoardGame(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchBoardGame();
    }, []);

    console.log(boardGame, "dataToppic")
    return (
        <div className="w-full">
            <div className='flex justify-center pb-8 mt-8 text-[32px] '>
                เกมแนะนำ
            </div>
            <div className='grid grid-row-[w-1/2_w-1/2] overflow-auto px-4'>
            <div className="flex justify-center gap-4 h-60">
                {boardGame.map((game, index) => (
                    <Link key={index} href={`./BoardGame/${game.id_boardgame}`}>
                        <span><BoardGameImage imageURL={game.path_image_boardgame} /></span>
                    </Link>
                ))}
            </div>

            </div>
        </div>
    );

    function BoardGameImage ({ imageURL }: { imageURL: any}){
        return (
            <div className='flex boardgame shrink-0'>
                <img src={fetchImage(imageURL)} alt={ imageURL } width={200} height={200}/>
            </div>
        );
    }
}

export default AddGameTopic;