import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../_slices/userSlice';

// slice 만들고 reducer에 등록하면 됩니다.
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
