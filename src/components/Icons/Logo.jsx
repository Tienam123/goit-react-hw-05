import logo from '@/assets/logo.svg'
import {Link} from "react-router-dom";

const Logo = ({size}) => {
    return (
        <Link to='/'
              className='text-white'
        >
            <img src={logo}
                 width={size}
                 alt=''
            />
        </Link>
    );
};
export default Logo