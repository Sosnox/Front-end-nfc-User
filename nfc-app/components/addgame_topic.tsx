import React from 'react';
import Image from 'next/image';
import CardBoard from '../components/card_board';
import werewolf from '../public/boardgame/werewolf.jpg';
import logo from '../public/tobecon.png';
import Link from 'next/link'


function AddGameTopic() {

    //รอเพิ่มข้อมูลจาก API
    const images = [
        logo, logo, logo, logo , werewolf, logo, logo, logo, logo,
    ];

    return (
        <div className="w-full">
            <div className='flex justify-center pb-14 mt-14 text-[30px] font-bold underline'>
                <h1> บอร์ดเกมแนะนำ </h1>
            </div>
            <div className="flex justify-center gap-4 overflow-auto h-60 w-full">
                {
                    images.map((image, index) => (
                        <Link href={'./BoardGame/1'}>  <BoardGameImage key={index} imageURL={image} /> </Link>
                    ))}
            </div>
        </div>
    );

    function BoardGameImage ({ imageURL }: { imageURL: any}){
        return (
            <div className='flex boardgame shrink-0'>
                <Image src={ imageURL } alt={ imageURL }/>
            </div>
        );
    }

}

export default AddGameTopic;