import { createAsyncThunk } from '@reduxjs/toolkit';
import { domain } from '../utils/domain';
import axios from 'axios';

import { AsyncBasic, Result } from './signUpAction';

// Types
export interface ActionPayolad {
  email: string;
  password: string;
}

// TODO token 저장 로직 구현
export interface LogIn extends AsyncBasic {
  result: Result;
  accessToken: any; // 서버 연결 후 변경 예정
}

// Thunk
export const logIn = createAsyncThunk(
  'user/login',
  (data: ActionPayolad, thunkAPI): Promise<LogIn> => {
    return axios
      .post(`${domain.jaeyoung_url}user/login`, data)
      .then(res => res.data)
      .catch(err => err); // TODO 서버 연결하고 수정 필요.
  }
);
