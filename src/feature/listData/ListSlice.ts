import { RootState } from '../../app/store';
import { createSlice } from '@reduxjs/toolkit';
export interface List {
  loading: Boolean;
  listData: object[];
}

const initialState: List = {
  loading: false,
  listData: [],
};

const ListSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    fetchListData(state) {
      state.loading = true;
    },

    fetchListDataSuccess(state, action) {
      state.loading = false;
      state.listData = action.payload;
    },

    fetchListDataFailed(state) {
      state.loading = false;
    },
  },
});
//action
export const listActions = ListSlice.actions;
//selector
export const selectorLoadingListData = (state: RootState) => state.list.loading;
export const selectorListData = (state: RootState) => state.list.listData;
//reducer
export default ListSlice.reducer;
