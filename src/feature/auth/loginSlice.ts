import { RootState } from '../../app/store';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../apis/auth';

export const login = createAsyncThunk('login', async (data: any) => {
  const res = await authApi.login(data);
  const token = res.data.data.token;
  localStorage.setItem('token', token);
  return res;
});

export interface LoginSlice {
  loading: Boolean;
}

const initialState: LoginSlice = {
  loading: false,
};

const LoginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(login.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.loading = false;
    });
  },
});
//action
export const loginAction = LoginSlice.actions;
//selector
export const selectLoadingLogin = (state: RootState) => state.login.loading;
//reducer
export default LoginSlice.reducer;
