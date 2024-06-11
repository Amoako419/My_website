import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"
import "./index.css";
import App from './App';
import ErrorPage from './pages/errorpage';
import About from './pages/about';
import Projects from './pages/projects';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
    },
    {
        path:'about',
        element: <About />,
    },
    {
        path:'projects',
        element: <Projects />,
    }
   
])



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App />);
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router = {router} />
    </React.StrictMode>
)