import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const booksAdapter = createEntityAdapter({
  sortComparer: (a, b) => a.title.localeCompare(b.title),
});
const booksSlice = createSlice({
  name: "books",
  initialState: booksAdapter.getInitialState({
    loading: "idle",
  }),
  reducers: {
    bookAdded: booksAdapter.addOne,
    booksLoading(state, action) {
      if (state.loading === "idle") {
        state.loading = "pending";
      }
    },
    booksReceived(state, action) {
      if (state.loading === "pending") {
        booksAdapter.setAll(state, action.payload);
        state.loading = "idle";
      }
    },
    bookUpdated: booksAdapter.updateOne,
  },
});

// 导出actionCreator函数
export const {
  bookAdded,
  booksLoading,
  booksReceived,
  bookUpdated,
} = booksSlice.actions;

// 导出查询函数
export const {
  selectById,
  selectAll,
  selectIds,
  selectEntities,
  selectTotal,
} = booksAdapter.getSelectors((state) => state.books);

// 导出分片的reducer
export default booksSlice.reducer;
