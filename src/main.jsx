import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from '@/App.jsx';
import {GlobalStyle} from '@/GlobalStyle.js';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root'))
    .render(
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <div className='wrapper'>
                        <App/>
                    </div>
                    <GlobalStyle/>
                    <ReactQueryDevtools initialIsOpen={false}/>
                    <Toaster/>
                </BrowserRouter>
            </QueryClientProvider>
        </React.StrictMode>,
    );













