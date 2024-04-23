import { instance } from '@/apis/instance';



const getUserInfo = async () => {
  try {
    const { data } = await instance.get('/list');
    console.log(data);   
    return data;
  } catch (error) {
    console.error('Failed to get user info:', error);
    throw error;
  }
};

const updateUserInfo = async (data: IUserInfo) => {
  try {
    await instance.post('/user/info', data);
  } catch {
    new Error('user add error');
  }
};

const getMatchData = async (id: string) => {
  try {
    const {data} = await instance.get(`/match/${id}`);
    return data
  } catch(error) {
    console.error('getMatchData 요청 실패', error);
    throw error
  }
}

export { getUserInfo, updateUserInfo, getMatchData };


