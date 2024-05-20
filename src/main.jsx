import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from '@/App.jsx';
import {GlobalStyle} from '@/GlobalStyle.js';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import {BrowserRouter} from "react-router-dom";
import Loader from "@/components/Loader/Loader.jsx";

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root'))
        .render(
            <React.StrictMode>
                <BrowserRouter>
                    <QueryClientProvider client={queryClient}>
                        <Suspense fallback={<Loader />}>
                            <div className='wrapper'>
                                <App />
                            </div>
                            <GlobalStyle />
                            <ReactQueryDevtools initialIsOpen={false} />
                            <Toaster />
                        </Suspense>
                    </QueryClientProvider>
                </BrowserRouter>
            </React.StrictMode>,
        );













