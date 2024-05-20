import Logo from "@/components/Icons/Logo.jsx";
import style from './Header.module.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className={style.header}>
            <div className='header__container'>
                <div className='flex items-center justify-between'>
                    <Logo size={45}/>
                    <nav>
                        <ul className='flex gap-5 font-semibold text-white uppercase text-xl'>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/movies'>Movies</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};
export default Header