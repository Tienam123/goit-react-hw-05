import style from './LoadMoreBtn.module.css'


const LoadMoreBtn = ({
                         isLoading,
                         fetchNextPage,
                         hasNextPage
                     }) => {
    return (
        <>
            <button onClick={fetchNextPage}
                    disabled={!hasNextPage}
                    className='inline-flex items-center disabled:bg-gray-600 px-5 py-2 gap-3 rounded mb-5 bg-black text-white'
            >
                <span>Load More</span>
                {isLoading && <span className={style.loader}
                ></span>}
            </button>
        </>
    );
};
export default LoadMoreBtn