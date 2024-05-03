//import Image from 'next/image';
import Link from 'next/link'
import BoxDetail from './box_detail';
import { MdKeyboardArrowRight } from "react-icons/md";
import { useEffect, useState } from 'react';
import selectAllBoardGame from '@/api/BoardGame/selectAllBoardGame';
import { fetchImage } from './fetchImage';
import { Image } from "@nextui-org/react";

interface BoardGame {
    id_boardgame: number,
    title_game: string,
    detail_game: string,
    path_image_boardgame: string,
    player_recommend_start: number,
    player_recommend_end: number,
    recommend : boolean
    age_recommend: number,
    time_playing: number,
    type_game: string,
    count_scan_boardgame: number
}

function AddGameCard (){
    const [BoardGame, setBoardGame] = useState<BoardGame[]>([]);

    useEffect(() => {
        const fetchBoardGame = async () => {
            try {
                const data = await selectAllBoardGame();
                setBoardGame(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchBoardGame();
    }, []);

    return (
        <div className='grid gap-6 mr-8 ml-8 pb-24'>
            {
                BoardGame.map((data) => (
                    <div className=' row-span-3 rounded-3xl p-2 game-menu border-t-1 border-black ' >
                        <Link href={`./BoardGame/${data.id_boardgame}`}><BoardGameImage data={data} imageURL={fetchImage(data.path_image_boardgame)}/></Link>
                    </div>
            ))}
        </div>
    );
}

function BoardGameImage ({ imageURL , data}: { imageURL: any , data: any}){
    return (
        <div>
            <div className='flex items-center '>

                <img
                    src={ imageURL }
                    alt={ imageURL }
                    width={20}
                    height={20}/>
                <div className=''>
                    <BoxDetail {...data}></BoxDetail>
        
                </div>
            </div>
        </div>
    );
}

export default AddGameCard;