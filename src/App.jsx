import {Route, Routes} from "react-router-dom";
import Layout from "@/layouts/Layout.jsx";
import HomePage from "@/pages/HomePage/HomePage.jsx";
import Favorites from "@/pages/SearchPage/SearchPage.jsx";
import MovieDetailsPage from "@/pages/MovieDetailsPage/MovieDetailsPage.jsx";
import MovieCast from "@/components/MovieCast/MovieCast.jsx";
import MovieReview from "@/components/MovieReview/MovieReview.jsx";

const App = () => {
    return (
        <Routes>
            <Route path='/'
                   element={<Layout/>}
            >
                <Route index
                       element={<HomePage/>}
                />
                <Route path='search/'
                       element={<Favorites/>}
                />
                <Route path=':id/'
                       element={<MovieDetailsPage/>}
                >
                    <Route path='casts'
                           element={<MovieCast/>}
                    />
                    <Route path='reviews'
                           element={<MovieReview/>}
                    />
                </Route>
            </Route>
        </Routes>
    )

};
export default App;
