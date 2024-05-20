import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getCasts} from "@/services/apiService.js";
import Loader from "@/components/Loader/Loader.jsx";
import ErrorPage from "@/components/ErrorPage/ErrorPage.jsx";

const MovieCast = () => {
    const {id} = useParams();
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['casts'],
        queryFn: () => getCasts(id)
    })

    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return (<>
            <ErrorPage message={error} />
        </>)
    }

    return (
        <div className='cast__container'>
            <ul className='flex flex-wrap gap-3'>
                {!isLoading && data.cast.map((cast, id) => (
                    <li key={id}
                        className='w-1/4'
                    >
                        <img className=''
                             src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                        />
                        <div>
                            <h2>{cast.name}</h2>
                            <p>{cast.character}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default MovieCast