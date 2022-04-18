import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    currentPost: null,
  },
  reducers: {
    setCurrentPost: (state, action) => {
      state.currentPost = action.payload;
    },
  },
});

export const { setCurrentPost } = postsSlice.actions;
export default postsSlice.reducer;
