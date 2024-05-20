import {useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {getAllReviews} from "@/services/apiService.js";
import Loader from "@/components/Loader/Loader.jsx";
import ErrorPage from "@/components/ErrorPage/ErrorPage.jsx";

const MovieReview = () => {
    const {id} = useParams();
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ['reviews'],
        queryFn: () => getAllReviews(id)
    })
    if (isLoading) {
        return <Loader />
    }
    if (isError) {
        return (<>
            <ErrorPage error={error} />
        </>)
    }

    return (

        <div className='review__container'>
            <ul className=''>
                <h2 className='mb-5'>Rewiew</h2>
                {!isLoading && data.results.map((review, id) => (<li key={id}>
                    <h3 className='font-semibold text-2xl mb-2'>{review.author}</h3>
                    <p className='mb-5'>{review.content}</p>
                </li>))}
            </ul>
        </div>
    );
};
export default MovieReview