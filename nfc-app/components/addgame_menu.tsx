//import Image from 'next/image';
import Link from 'next/link'
import BoxDetail from './box_detail';

import { MdKeyboardArrowRight } from "react-icons/md";

import werewolf from '../public/imageBoardGame/werewolf.jpg';
// import avaron from '../public/imageBoardGame/avalon.webp';
// import logo from '../public/tobecon.png';
import { useEffect, useState } from 'react';
import selectAllBoardGame from '@/api/BoardGame/selectAllBoardGame';
import { fetchImage } from './fetchImage';

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
    console.log(BoardGame , "BoardGame Home")

    return (
        <div className='grid gap-6 pb-24'>
            {
                BoardGame.map((data, index) => (
                    <div className='rounded-3xl p-2 game-menu mx-10' >
                        <Link href={`./BoardGame/${data.id_boardgame}`}><BoardGameImage data={data} key={index} imageURL={fetchImage(data.path_image_boardgame)}/></Link>
                    </div>
            ))}
        </div>
    );
}

function BoardGameImage ({ imageURL , data}: { imageURL: any , data: any}){
    return (
        <div>
            <div className='flex shrink-0'>
                <img src={ imageURL } alt={ imageURL } width={20} height={20}/>
                <div className='pl-20'>
                    <BoxDetail {...data}></BoxDetail>
                    <div>
                        <MdKeyboardArrowRight className="absolute right-[50px] transform translate-y-[30px]" size={50}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddGameCard;