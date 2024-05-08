import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {currentFilm} from "@/services/apiService.js";
import Loader from "@/components/Loader/Loader.jsx";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const {
        data,
        isFetching,
    } = useQuery({
        queryFn: () => currentFilm(id),
        queryKey: ['filmById']
    })
    const location = useLocation();
    if (isFetching) {
        return (<Loader/>)
    }

    return (
        <>
            <div className='card__container'>
                <Link className='py-2 px-5 mt-5 rounded text-white bg-blue-700 inline-block'
                      to={location.state.from}
                >Вернуться</Link>
                {!isFetching && (

                    <div className='mt-10 flex gap-3'>

                        <img className='w-1/4 h-96'
                             src={`https://image.tmdb.org/t/p/w500${data?.backdrop_path}`}
                        />
                        <div className='w-1/2'>
                            <h2 className='text-3xl font-semibold mb-10'>{data.title}</h2>
                            <div className='flex gap-24'>
                                <ul>
                                    <li className='font-semibold text-gray-500'>Vote/Votes:</li>
                                    <li className='font-semibold text-gray-500'>Popularity:</li>
                                    <li className='font-semibold text-gray-500'>Original Title:</li>
                                    <li className='font-semibold text-gray-500'>Genre:</li>
                                </ul>
                                <ul>
                                    <li className='font-semibold'>{data.vote_average}/{data.vote_count}</li>
                                    <li className='font-semibold'>{data.popularity.toFixed(1)}</li>
                                    <li className='font-semibold'>{data.original_title}</li>
                                    <li className='font-semibold'>{data.genres.map(genre =>
                                        <span key={genre.id}>{genre.name.trim()} </span>)}</li>
                                </ul>
                            </div>
                            <h3 className='mt-4'>
                                <p className='font-semibold text-xl'>
                                    About:
                                </p>
                                <p>{data.overview}</p>
                            </h3>

                        </div>
                    </div>
                )}
            </div>
            <div className='border-b-2 mt-3 border-solid border-gray-500'></div>
            <div className='information__container'>
                <h2 className='mt-2'>Aditional information:</h2>
                <ul>
                    <li>
                        <Link state={location.state}
                              to='casts'
                        >Casts</Link>
                    </li>
                    <li>
                        <Link state={location.state}
                              to='reviews'
                        >Reviews</Link>
                    </li>
                </ul>
            </div>
            <div className='border-b-2 mt-3 border-solid border-gray-500'></div>
            <Outlet/>
        </>
    );
};
export default MovieDetailsPage