const MovieList = ({children}) => {
    return (
        <ul
            className='flex flex-wrap gap-3 mt-10'
        >
            {children}
        </ul>
    );
}

export default MovieList