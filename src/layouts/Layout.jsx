import Header from "@/pages/Header/Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "@/pages/Footer/Footer.jsx";

const Layout = () => {
    return (
        <>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
};
export default Layout