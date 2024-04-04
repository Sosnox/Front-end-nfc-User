import React, { useEffect, useState } from 'react';
import selectAllCards from "@/api/Card/selectAllCard";
import CardBoard from "@/components/card_board";
import Image from 'next/image';
import Link from 'next/link';
import Search from '@/components/input_search';
import { useRouter } from 'next/router';
import selectAllBoardGame from '@/api/BoardGame/selectAllBoardGame';
import selectByIdBoardGame from '@/api/BoardGame/selectByIdBoardGame';
import BoxBoardGamePage from '../BoxBoardGame/[BoxBoardGame]';
import { fetchImage } from '@/components/fetchImage';

interface Card {
    id_card: number,
    title_card: string,
    detail_card: string,
    path_image_card: string,
    tick_card: string,
    count_scan_card: number,
}
interface BoardGame {
    id_boardgame: number,
    title_game: string,
    detail_game: string,
    path_image_boardgame: string,
    player_recommend_start: number,
    player_recommend_end: number,
    recommend: boolean
    age_recommend: number,
    time_playing: number,
    count_scan_boardgame: number
}

const nameCard = [
    "villager",
    "werewolf",
    "seer",
    "cupid",
    "bodyguard",
    "auraseer",
    "drunk",
    "prince",
    "priest",
    "pi",
    "troublemaker",
    "witch",
    "oldhag",
    "apprenticeseer",
    "mayor",
    "hunter",
    "diseased",
    "pacifist",
    "ghost",
    "mason",
    "doppelganger",
    "lycan",
    "toughguy",
    "idiot",
    "wolfcup",
    "minion",
    "sorcerer",
    "hoodlum",
    "cursed",
    "tanner",
    "vampire",
    "cultleader",
    "revealer",
    "mentalist",
    "huntress",
    "mystic",
    "alphawolf",
    "spellcaster"
]

type ID = string;

export default function ShowCardPage() {

    const router = useRouter();
    const [cards, setCards] = useState<Card[]>([]);
    const [boardGame, setBoardGame] = useState<BoardGame[]>([]);
    const id_boardgame_from_path = router.query.ShowCardPage as ID;
    console.log(id_boardgame_from_path, "id_boardgame")

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const dataCard = await selectAllCards(Number(id_boardgame_from_path));
                const dataBoardGame = await selectByIdBoardGame(Number(id_boardgame_from_path));
                if (dataBoardGame) {
                    setBoardGame(dataBoardGame);
                }
                setCards(dataCard);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (id_boardgame_from_path) {
            fetchCards();
        }
    }, [id_boardgame_from_path]);

    console.log(boardGame, "boardgame");
    console.log(cards , 'cards')

return (
    <div className="flex flex-col items-center justify-center mx-10 mt-10">
        <Search />
        <label className='text-2xl font-bold mb-10 underline'>BoardGame : {boardGame[0]?.title_game}</label>
        <Link href={`/BoxBoardGame/${id_boardgame_from_path}`}>
            <img src={fetchImage(boardGame[0]?.path_image_boardgame)} alt="Werewolf" width={300} height={400} />
        </Link>

        <h1 className="mt-10 font-bold text-[20px]">การ์ดเกม {boardGame[0]?.title_game}</h1>
        <div className="mb-24 mt-4 grid grid-cols-3 gap-4">
            {Array.isArray(cards) ? cards.map((card) => (
                <div key={card.id_card}>
                    <CardBoard data={card} />
                </div>
            ))
            :
            <div className="flex flex-col col-span-3 items-center justify-center text-2xl">Not have Card</div>}
        </div>
    </div>
);
}
