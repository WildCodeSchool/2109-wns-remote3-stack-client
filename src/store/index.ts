import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import userReducer from './user.slice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  reducer: { user: userReducer },
  devTools: true,
  middleware: customizedMiddleware,
});

// Redux dependencies types

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
