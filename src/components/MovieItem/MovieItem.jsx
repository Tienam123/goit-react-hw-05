import style from './MovieItem.module.css'
import {Link, useLocation} from "react-router-dom";

const MovieItem = ({
                       image
                   }) => {
    const location = useLocation();
    return (
        <li className={style.card}>
            <Link to={`/${image.id}`}
                  state={{from: location.pathname}}
            >
                <img src={`https://image.tmdb.org/t/p/w500${image.backdrop_path}`}
                     className={style.card}
                     alt={image.title}
                />
                <h2 className=''>{image.title}</h2>
            </Link>
        </li>
    );
};
export default MovieItem