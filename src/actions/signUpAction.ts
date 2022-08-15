import { createAsyncThunk } from '@reduxjs/toolkit';
import { domain } from '../utils/domain';
import axios from 'axios';

// Types
export interface ActionPayolad {
  email: string;
  name: string;
  password: string;
}
// TODO 공통 interface 위치 변경
export interface Result {
  result: {
    userId: number;
    email: string;
    name: string;
  };
}
export interface AsyncBasic {
  success: boolean;
  message: string;
}
export interface SignUp extends AsyncBasic {
  result: Result;
}

// Thunk
export const signUp = createAsyncThunk(
  'user/signup',
  (data: ActionPayolad, thunkAPI): Promise<SignUp> => {
    return axios
      .post(`${domain.jaeyoung_url}user/signup`, data)
      .then(res => res.data)
      .catch(err => err); // TODO 서버 연결하고 수정 필요.
  }
);
