import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { signUp, SignUp } from '../actions/signUpAction';
import { logIn, LogIn } from '../actions/logInAction';

interface User {
  signUp: { isLoading: boolean; status: boolean };
  logIn: { isLoading: boolean; data: LogIn | null };
}

const initialState: User = {
  signUp: {
    isLoading: false,
    status: false,
  },
  logIn: {
    isLoading: false,
    data: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    // 회원가입
    [signUp.pending.type]: (state: User) => {
      state.signUp.isLoading = true;
    },
    [signUp.fulfilled.type]: (state: User) => {
      state.signUp.isLoading = false;
      state.signUp.status = true;
    },
    [signUp.rejected.type]: (state: User) => {
      state.signUp.isLoading = false;
    },
    // 로그인
    [logIn.pending.type]: (state: User) => {
      state.logIn.isLoading = true;
    },
    [logIn.fulfilled.type]: (state: User, action: PayloadAction<LogIn>) => {
      state.logIn.isLoading = false;
      state.logIn.data = action.payload;
    },
    [logIn.rejected.type]: (state: User) => {
      state.logIn.isLoading = false;
    },
  },
});

export default userSlice.reducer;
