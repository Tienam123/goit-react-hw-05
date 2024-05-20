import {lazy} from "react";
import {Route, Routes} from "react-router-dom";

const HomePage = lazy(() => import('@/pages/HomePage/HomePage.jsx'))
const SearchPage = lazy(() => import('@/pages/SearchPage/SearchPage.jsx'))
const MovieDetailsPage = lazy(() => import('@/pages/MovieDetailsPage/MovieDetailsPage.jsx'))
const MovieCast = lazy(() => import('@/components/MovieCast/MovieCast.jsx'))
const MovieReview = lazy(() => import('@/components/MovieReview/MovieReview.jsx'))
const Layout = lazy(() => import('@/layouts/Layout.jsx'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage/NotFoundPage.jsx'))

const App = () => {
    return (
        <Routes>
            <Route path='/'
                   element={<Layout />}
            >
                <Route index
                       element={<HomePage />}
                />
                <Route path='/movies/'
                       element={<SearchPage />}
                />
                <Route path=':id/'
                       element={<MovieDetailsPage />}
                >
                    <Route path='casts'
                           element={<MovieCast />}
                    />
                    <Route path='reviews'
                           element={<MovieReview />}
                    />
                </Route>
                <Route path='*'
                       element={<NotFoundPage />}
                />
            </Route>
        </Routes>
    )

};
export default App;
