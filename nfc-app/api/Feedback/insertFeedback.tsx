

const endpoint = process.env.NEXT_PUBLIC_ENDPOINT + '/post_feedback/';

const sendDataToFastAPI = async (data: any): Promise<unknown> => {
  const formData = new FormData();
  formData.append('id_boardgame', data.id_boardgame);
  formData.append('name_report', data.name_report);
  formData.append('detail_report', data.detail_report);
  formData.append('rating', data.rating);
  try {
    const response = await fetch(`${endpoint}`, {
      method: "POST",
      body: formData,
    });
    return response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default sendDataToFastAPI;
