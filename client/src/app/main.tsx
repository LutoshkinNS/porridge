import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Provider as ReduxProvider } from 'react-redux'
import {baseLayout} from "./layouts/baseLayout";
import {MainPage} from "@/pages/main";
import {TodoPage} from "@/pages/todo";
import '@/shared/styles/index.css'
import {store} from "@/app/appStore.ts";

const router = createBrowserRouter([
    {
        element: baseLayout,
        errorElement: <div><b>ERROR!!!!!!!</b></div>,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: "/todo",
                element: <TodoPage />,
            }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ReduxProvider store={store}>
        <RouterProvider router={router} />
      </ReduxProvider>
  </React.StrictMode>,
)
