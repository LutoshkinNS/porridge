// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {TodosType} from "@/app/todos.ts";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with 'http://localhost:3000'
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getTasks` endpoint is a "query" operation that returns data
    getTasks: builder.query<TodosType[], void>({
      // The URL for the request is 'http://localhost:3000/tasks'
      query: () => '/todos'
    }),
    addNewTask: builder.mutation<TodosType[], Omit<TodosType, 'id'>>({
      query: initialPost => ({
        url: '/todos',
        method: 'POST',
        // Include the entire post object as the body of the request
        body: initialPost
      })
    })
  })
})

// Export the auto-generated hook for the `getTasks` query endpoint
export const { useGetTasksQuery, useAddNewTaskMutation } = apiSlice