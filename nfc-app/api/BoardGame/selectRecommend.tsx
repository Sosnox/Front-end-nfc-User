import { useEffect, useState } from 'react';
import axios from 'axios';

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT + '/getRecommended';

interface Data {
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

const RecommendedBoardGames = async (): Promise<any[]> => {
    try {
        const response = await fetch(`${endpoint}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data: Data[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export default RecommendedBoardGames;