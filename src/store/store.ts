import { configureStore } from "@reduxjs/toolkit";

// slice 만들고 reducer에 등록하면 됩니다. 
const store = configureStore({
  reducer: {
    
  },
  devTools: true,
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;