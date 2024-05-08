import Header from "@/pages/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "@/pages/Footer/Footer.jsx";
import {Suspense} from "react";
import Loader from "@/components/Loader/Loader.jsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <main>
                    <Outlet/>
                </main>
            </Suspense>
            <Footer/>
        </>
    );
};
export default Layout