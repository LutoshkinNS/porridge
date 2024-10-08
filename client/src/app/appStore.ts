import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '@/entities/todo'
import { apiSlice } from '@/shared/api/apiSlice.ts';

export const store = configureStore({
    reducer: {
        task: todoReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware().concat(apiSlice.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
