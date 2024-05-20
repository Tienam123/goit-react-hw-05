import React, {lazy, useEffect, useState} from "react";
import {searchMovie} from "@/services/apiService.js";
import {useInfiniteQuery} from "@tanstack/react-query";

const SearchForm = lazy(() => import('@/components/SearchForm/SearchForm.jsx'))
const MovieList = lazy(() => import('@/components/MovieList/MovieList.jsx'))
const MovieItem = lazy(() => import('@/components/MovieItem/MovieItem.jsx'))
const LoadMoreBtn = lazy(() => import('@/components/LoadMoreBtn/LoadMoreBtn.jsx'))

const SearchPage = () => {
    const [query, setQuery] = useState(JSON.parse(localStorage.getItem('query')) ?? '')

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isError,
        error
    } = useInfiniteQuery({
        queryKey: [
            'searchMovie',
            query
        ],
        queryFn: ({pageParam = 1}) => searchMovie(query, pageParam),
        initialPageParam: 1,
        enabled: !!query,
        getNextPageParam: (lastPage, pages, lastPageParam) => {
            if (lastPage.page <= lastPage.total_pages) {
                return lastPageParam + 1
            }
        }
    })
    useEffect(() => {
        localStorage.setItem('query', JSON.stringify(query))
    }, [query]);

    if (isError) {
        return <h1> Error {error.message}</h1>
    }

    return (

        <>
            <SearchForm setNewQuery={setQuery} />
            {!isLoading && (
                <div className='home__container text-center'>
                    <MovieList>
                        {data?.pages.map((page, id) => (

                            <React.Fragment key={id}>
                                {
                                    page.results.map((item, itemID) => (
                                        <MovieItem image={item}
                                                   key={itemID}
                                        />
                                    ))
                                }
                            </React.Fragment>
                        ))

                        }
                    </MovieList>
                    {hasNextPage && (
                        <LoadMoreBtn fetchNextPage={fetchNextPage}
                                     isLoading={isLoading}
                                     hasNextPage={hasNextPage}
                        />
                    )}
                </div>
            )}
        </>
    );
};
export default SearchPage;