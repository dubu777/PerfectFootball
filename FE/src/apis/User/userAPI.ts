import { instance } from '@/apis/instance';


const addUser = async (data: IUserInfo) => {
  try {
    await instance.post('/user/signup', data)
  } catch(error) {
    console.error('Failed to add user info:', error);
    throw error;
  }
}

const addSignIn = async (data: IUserSignInInfo) => {
  try{
    const respones = await instance.post('/user/signin', data)
    console.log(respones, 'response');
    return respones.data;
  } catch (error) {
    console.error('Failed to add signin info:', error);
    throw error
  }
}

const checkUsername = async (username: string) => {
  try{
    const respones = await instance.post('/check-username', {username})
    console.log(respones);
    return respones.data;
  } catch (error) {
    console.error('Failed to check username:', error);
    throw error
  }
}

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

const getSurveyData = async () => {
  try {
    const { data } = await instance.get('/survey/question');
    console.log(data);   
    return data;
  } catch (error) {
    console.error('Failed to get user info:', error);
    throw error;
  }
};

export { getSurveyData, getUserInfo, updateUserInfo, getMatchData, addUser, addSignIn, checkUsername };


