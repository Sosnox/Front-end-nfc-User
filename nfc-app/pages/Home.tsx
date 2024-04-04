import React from 'react';
import Image from 'next/image';
import CardBoard from '../components/card_board';
import wherewolf from '../public/imageBoardGame/werewolf.jpg';
import logo from '../public/imageBoardGame/avalon.webp';
import AddGameTopic from '@/components/addgame_topic';
import AddGameCard from '@/components/addgame_menu';

export default function HomePage() {
    return (
        <div>
            <AddGameTopic></AddGameTopic>
            <AddGameCard></AddGameCard>
        </div>
    );
    }


