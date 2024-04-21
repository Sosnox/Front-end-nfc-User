
// const endpoint = 'https://api.dlst.online/get_boardgame_by_id_boardgame/?id_boardgame=';
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT + '/get_boardgame_by_id_boardgame/?id_boardgame=';

interface Data {
    id_boardgame: number,
    title_game: string,
    detail_game: string,
    path_image_boardgame: string,
    path_youtube: string,
    player_recommend_start: number,
    player_recommend_end: number,
    recommend : boolean
    age_recommend: number,
    time_playing: number,
    type_game: string,
    count_scan_boardgame: number
}

const selectByIdBoardGame = async (id_boardgame : string): Promise<Data[]> => {
    try {
        const response = await fetch(`${endpoint}${id_boardgame}`);
        console.log(response,"response")
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

export default selectByIdBoardGame;
