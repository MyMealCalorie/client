import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: new Date(),
};

const dateSlice = createSlice({
  name: 'date',
  initialState,
  reducers: {
    changeDate: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeDate } = dateSlice.actions;

export default dateSlice.reducer;
