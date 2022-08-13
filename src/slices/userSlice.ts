import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { signUp, SignUp } from '../actions/signUpAction';

interface User {
  signUp: { isLoading: boolean; status: boolean };
}

// login도 넣어야해서 객체로 감싼것
const initialState: User = {
  signUp: {
    isLoading: false,
    status: false,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
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
  },
});

export default userSlice.reducer;
