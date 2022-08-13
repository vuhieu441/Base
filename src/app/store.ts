import { combineReducers, configureStore } from '@reduxjs/toolkit';
import loginReducer from 'src/feature/auth/loginSlice';
import modalSlice from 'src/feature/modal/ModalSlice';
import listSlice from 'src/feature/listData/ListSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  modal: modalSlice,
  list: listSlice,
});
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
