import React, {useEffect, useState} from "react";
import {searchMovie} from "@/services/apiService.js";
import {useInfiniteQuery} from "@tanstack/react-query";
import SearchForm from "@/components/SearchForm/SearchForm.jsx";
import MovieList from "@/components/MovieList/MovieList.jsx";
import MovieItem from "@/components/MovieItem/MovieItem.jsx";
import LoadMoreBtn from "@/components/LoadMoreBtn/LoadMoreBtn.jsx";


const SearchPage = () => {
    const [query, setQuery] = useState(JSON.parse(localStorage.getItem('query')) ?? '')

    const {
        data,
        fetchNextPage,
        hasNextPage,
        isLoading,
        isFetching,
    } = useInfiniteQuery({
        queryKey: [
            'searchMovie',
            query
        ],
        queryFn: ({pageParam = 1}) => searchMovie(query, pageParam),
        initialPageParam: 1,
        enabled: !!query,
        getNextPageParam: (lastPage, pages, lastPageParam) => {
            return lastPageParam + 1
        }
    })
    useEffect(() => {
        localStorage.setItem('query', JSON.stringify(query))
    }, [query]);

    return (

        <>
            <SearchForm setNewQuery={setQuery}/>
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
                    <LoadMoreBtn fetchNextPage={fetchNextPage}
                                 isLoading={isFetching}
                                 hasNextPage={hasNextPage}
                    />
                </div>
            )}
        </>
    );
};
export default SearchPage;