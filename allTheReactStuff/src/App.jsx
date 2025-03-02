import React from "react";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
 } from 'react-router-dom'
/*
{TODO: import needed things}
{TODO: basic layout}
*/

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<NotFound />} element={<App />} >
            <Route path="/" element={<Home />} />
            <Route path="/notebook" element={<Notebook />} />
            <Route path="/todos" element={<ToDos />} />
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)