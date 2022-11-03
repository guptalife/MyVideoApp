import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/store';
import Error from './Components/Error';
import { createTheme } from '@mui/material';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    createRoutesFromElements
} from "react-router-dom";
import Room from './Components/Room';
import { getSocketConnections } from './socketConnection';
getSocketConnections();
const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"
         errorElement= {<Error/>}
        >
            <Route path='/' element={<App />} />
            <Route path='/room/:roomId' element={<Room />} >
        </Route>
        </Route>
    )
)
root.render(
    <Provider store={store} >
        <RouterProvider router={router} />
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
