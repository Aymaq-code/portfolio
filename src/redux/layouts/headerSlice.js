import { createSlice } from "@reduxjs/toolkit";

const initialState = { openMenu: false };

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    handleToggleBtn(state) {
      state.openMenu = !state.openMenu;
    },
    handleLinkClick(state) {
      state.openMenu = false;
    },

    handleResize(state) {
      if (window.innerWidth > 768) {
        state.openMenu = false;
      }
    },
  },
});

export const { handleToggleBtn, handleLinkClick, handleResize } =
  headerSlice.actions;
export default headerSlice.reducer;
