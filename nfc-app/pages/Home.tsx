import React from 'react';
import AddGameTopic from '@/components/addgame_topic';
import AddGameCard from '@/components/addgame_menu';

export default function HomePage() {
    return (
        <div>
            <AddGameTopic/>
            <div className='flex w-screen justify-center text-xl font-medium mb-7'>
                <h1>บอร์ดเกมอื่น ๆ</h1>
            </div>
            <AddGameCard/>
        </div>
    );
    }


