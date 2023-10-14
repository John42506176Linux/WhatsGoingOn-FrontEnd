import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../reducers/eventReducer';
import locationReducer from '../reducers/locationReducer';
import categoriesReducer from '../reducers/categoriesReducer';

const store = configureStore({
  reducer: {
    events: eventReducer,
    location: locationReducer,
    categories: categoriesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store;
