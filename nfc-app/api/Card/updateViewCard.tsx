import axios from 'axios';

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT + '/update_count_view_card/';

interface Data {
  id_card: number;
  count_scan_card: number;
}

const updateViewCard = async (name_card: string): Promise<Data> => {
  try {
    const response = await axios.patch<Data>(`${endpoint}${name_card}`);
    return response.data;
  }
  catch (error) {
    console.error('Error updating view count:', error);
    if (axios.isAxiosError(error)) {
      throw new Error(`Failed to update view count: ${error.message}`);
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
};

export default updateViewCard;
