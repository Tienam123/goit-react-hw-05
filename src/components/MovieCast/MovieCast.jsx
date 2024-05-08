import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getCasts} from "@/services/apiService.js";
import Loader from "@/components/Loader/Loader.jsx";

const MovieCast = () => {
    const {id} = useParams();
    const {
        data,
        isLoading,
        isError,
        isFetching,
        error
    } = useQuery({
        queryKey: ['casts'],
        queryFn: () => getCasts(id)
    })

    if (isFetching) {
        return <Loader/>
    }

    return (
        <div className='cast__container'>
            <ul className='flex flex-wrap gap-3'>
                {!isFetching && data.cast.map((cast, id) => (
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