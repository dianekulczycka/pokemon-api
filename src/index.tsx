import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./store/store";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";
import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
