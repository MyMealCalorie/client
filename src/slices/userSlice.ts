import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/store';
import { signUp } from '../actions/signUpAction';

interface SignUp {
  signUp: { isLoading: boolean; data: string | null | any };
}

// login도 넣어야해서 객체로 감싼것
const initialState: SignUp = {
  signUp: {
    isLoading: false,
    data: null,
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [signUp.pending.type]: (state: SignUp) => {
      state.signUp.isLoading = true;
    },
    [signUp.fulfilled.type]: (state: SignUp, action: PayloadAction<any>) => {
      state.signUp.isLoading = false;
      state.signUp.data = action.payload;
    },
    [signUp.rejected.type]: (state: SignUp, action: PayloadAction<any>) => {
      state.signUp.isLoading = false;
    },
  },
});

export default userSlice.reducer;
