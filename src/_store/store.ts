import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../_slices/userSlice';
import dateReducer from '../_slices/dateSlice';

// slice 만들고 reducer에 등록하면 됩니다.
const store = configureStore({
  reducer: {
    user: userReducer,
    date: dateReducer,
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
