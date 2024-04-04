


// const endpoint = `${process.env.endpoint}/get_all_card_by_id_boardgame/?id_boardgame=`;
const endpoint = 'https://api.dlst.online/get_all_card_by_id_boardgame/?id_boardgame=';

interface Data {
    id_card: number,
    title_card : string,
    detail_card: string,
    path_image_card: string,
    tick_card: string,
    count_scan_card: number
}

const selectAllCard = async (id: number): Promise<Data[]> => {
    try {
        const response = await fetch(`${endpoint}${id}`);
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

export default selectAllCard;
