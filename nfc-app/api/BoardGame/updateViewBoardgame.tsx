import axios from 'axios';

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT + '/update_count_view/';

interface Data {
  id_board: number;
  count_scan_boardgame: number;
}

const updateViewBoardGame = async (id_boardgame: number): Promise<Data> => {
  try {
    const response = await axios.patch<Data>(`${endpoint}${id_boardgame}`);
    return response.data;
  } catch (error) {
    console.error('Error updating view count:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to update view count: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export default updateViewBoardGame;
