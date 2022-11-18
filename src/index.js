import React from 'react';
import ReactDOM from 'react-dom/client';
import Kontakt from './Pages/Kontakt';
import HokusPokus from './Components/HokusPokus';
import Omos from './Pages/Omos';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';

import './index.scss';
import App from './App';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />}>

            <Route index element={<HokusPokus />} />

            <Route path="/kontakt" element={<Kontakt data="Hokus Pokus" />}>

                <Route index element={<HokusPokus />} />

            </Route>

            <Route path="/omos" element={<Omos />} />

        </Route>
    )
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);