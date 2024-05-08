import {useInfiniteQuery} from "@tanstack/react-query";
import {fetchFilms} from "@/services/apiService.js";
import React from "react";
import MovieList from "@/components/MovieList/MovieList.jsx";
import MovieItem from "@/components/MovieItem/MovieItem.jsx";
import Loader from "@/components/Loader/Loader.jsx";
import LoadMoreBtn from "@/components/LoadMoreBtn/LoadMoreBtn.jsx";

const HomePage = () => {
    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isError,
        error,
        isFetching,
    } = useInfiniteQuery({
        queryKey: ['films'],
        queryFn: fetchFilms,
        initialPageParam: 1,
        getNextPageParam: (lastPage, pages, lastPageParam) => {
            if (lastPage.page < lastPage.total_pages) {
                return lastPageParam + 1
            }
        }
    })

    if (isLoading) {
        return (<Loader/>)
    }

    if (isError) {
        return <h1> Error {error.message}</h1>
    }


    return (

        <>
            {!isLoading && (
                <div className='home__container text-center'>
                    <MovieList>
                        {data.pages.map((page, id) => (
                            <React.Fragment key={id}>
                                {
                                    page.results.map((item, itemID) => (
                                        <MovieItem key={itemID}
                                                   image={item}
                                        />
                                    ))
                                }
                            </React.Fragment>
                        ))

                        }
                    </MovieList>
                    {hasNextPage && (
                        <LoadMoreBtn fetchNextPage={fetchNextPage}
                                     isLoading={isFetching}
                                     hasNextPage={hasNextPage}
                        />
                    )}

                </div>
            )}

        </>
    );
};
export default HomePage