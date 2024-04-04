
const endpoint = 'http://210.246.215.173:8000/get_card_by_name_boardgame/?name_boardgame=';
// const endpoint = `${process.env.endpoint}/get_boardgame_by_id_boardgame/?id_boardgame=`;
//  const endpoint = 'http://localhost:8000/get_boardgame_by_id_boardgame/?id_boardgame=';
interface Data {
    id_card: number,
    title_card : string,
    detail_card: string,
    path_image_card: string,
    tick_card: string,
    count_scan_card: number
}

const selectByNameCard = async (name_card : string): Promise<Data[]> => {
    try {
        const response = await fetch(`${endpoint}${name_card}`);
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

export default selectByNameCard;
