import React, { useEffect, useState } from 'react';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useRouter } from 'next/router';
import selectByIdBoardGame from '@/api/BoardGame/selectByIdBoardGame';
import updateViewBoardGame from '@/api/BoardGame/updateViewBoardgame';

interface Boardgame {
    id_boardgame: number,
    title_game: string,
    detail_game: string,
    path_image_boardgame: string,
    path_youtube: string,
    player_recommend_start: number,
    player_recommend_end: number,
    recommend: boolean,
    age_recommend: number,
    time_playing: number,
    type_game: string,
    count_scan_boardgame: number
}

export default function BoxBoardGamePage() {
    const [boardGame, setBoardGame] = useState<Boardgame>();
    const router = useRouter();
    const { BoxBoardGame } = router.query as { BoxBoardGame: string };
    const goBack = () => {
        window.history.back();
    }

    useEffect(() => {
        const fetchData = async () => {
            if (BoxBoardGame) {
                try {
                    await updateViewBoardGame(Number(BoxBoardGame));
                    const dataBoardGame = await selectByIdBoardGame(BoxBoardGame);
                    setBoardGame(dataBoardGame[0]);

                } catch (error) {
                    console.error('Error fetching or updating data:', error);
                }
            }
        };

        fetchData();
    }, [BoxBoardGame]);

    if (!boardGame) {
        return <div className="flex justify-center items-center h-screen">Loading...</div>;
    }


    return (
        <div className="p-10 h-full ">
            <div className='absolute left-5 back-button'>
                <button onClick={goBack}> <MdOutlineArrowBackIos className="text-left" size={40} /> </button>
            </div>

            <div className="flex justify-center pb-10">
                <h1 className="font font-bold text-[24px]">{boardGame.title_game}</h1>
            </div>

            <div className='flex flex-col items-center'>
                {/* <YouTubeVideo videoId={"9MojLmVYCn4"} /> */}

                <iframe className="mb-5 rounded-lg"
                    width="300"
                    height="200"
                    title="Vdo"
                    src={boardGame.path_youtube}
                    allowFullScreen>
                </iframe>
                <label className='text-gray-500 text-sm'>
                    จำนวนการเข้าชม {boardGame.count_scan_boardgame}
                </label>

                <label className='text-2xl font-bold pb-5 mt-6'>คำอธิบาย</label>

                <div className='grid gap-1'>

                    <div className='flex space-x-2'>
                        <div className='font-semibold'>ประเภทบอร์ดเกมส์ :</div>
                        <div>{boardGame.type_game}</div>
                    </div>

                    <div className='flex space-x-2'>
                        <div className='font-semibold'> เหมาะสำหรับผู้เล่นอายุตั้งแต่ : </div>
                        <div>{boardGame.age_recommend}+ ปี</div>
                    </div>

                    <div className='flex space-x-2'>
                        <div className='font-semibold'>จำนวนผู้เล่น :</div>
                        <div>{boardGame.player_recommend_start} - {boardGame.player_recommend_end} คน</div>
                    </div>

                    <div className='flex space-x-2'>
                        <div className='font-semibold'>เวลาเล่นต่อเกมส์ : </div>
                        <div>{boardGame.time_playing} นาที</div>
                    </div>

                    <div className='text-[24px] flex justify-center mt-[30px] font-semibold'>เนื้อหา </div>
                    <div className=' break-words indent-[10px]'>
                        {boardGame.detail_game}
                    </div>


                </div>
            </div>
        </div>
    );
}
