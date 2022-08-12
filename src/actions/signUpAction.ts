import { createAsyncThunk } from '@reduxjs/toolkit';
import { domain } from '../utils/domain';
import axios from 'axios';

interface Result {
  userId: number;
  email: string;
  name: string;
}
interface AsyncBasic {
  sucess: boolean;
  message: string;
}

export interface SignUp extends AsyncBasic {
  result: Result;
}
export const signUp = createAsyncThunk(
  'user/signup',
  (data: any, thunkAPI): Promise<any> => {
    return axios
      .post(`${domain.jaeyoung_url}user/signup`, data)
      .then(res => res.data as any)
      .catch(res => alert(res)); // 서버 연결하고 수정 필요.
  }
);
