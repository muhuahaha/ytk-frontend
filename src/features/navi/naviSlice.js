import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMenu: false,
};

export const naviSlice = createSlice({
  name: 'navi',
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.showMenu = !state.showMenu;
    },
  },
});

export const { toggleShow } = naviSlice.actions;

export default naviSlice.reducer;
