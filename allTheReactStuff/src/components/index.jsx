import React from "react";
import ReactDOM from "react-dom/client";
import App from "../App";
import Home from "../pages/Home";
import Notebook from "../pages/Notebook";
import ToDos from "../pages/ToDos";
import NotFound from "../pages/NotFound";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<App />}>
            <Route index element={<Home />} />
            <Route path="notebook" element={<Notebook />} />
            <Route path="todos" element={<ToDos />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById("root")).render(
    <>
        <RouterProvider router={router} />
    </>
)
