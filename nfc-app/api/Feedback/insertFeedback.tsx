import axios, { AxiosResponse } from 'axios';

interface FeedbackData {
  name_report: string;
  detail_report: string;
  rating: number;
  checktypes: string;
}


// const endpoint = 'https://api.dlst.online/post_feedback';
const endpoint = process.env.NEXT_PUBLIC_ENDPOINT + '/post_feedback';

const sendDataToFastAPI = async (data: FeedbackData): Promise<unknown> => {
  try {
    const response: AxiosResponse<unknown> = await axios.post(`${endpoint}`, data, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default sendDataToFastAPI;
