import {useFormik} from "formik";
import {IoSearchOutline} from "react-icons/io5";

const SearchForm = ({setNewQuery}) => {
    const formik = useFormik({
        initialValues: {
            query: ''
        },
        onSubmit: (values, {resetForm}) => {
            setNewQuery(values.query)
            resetForm()
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}
              className='flex items-center mt-5 justify-center'
        >
            <label className='relative w-1/3'>
                <input type='text'
                       value={formik.values.query}
                       onChange={formik.handleChange}
                       name='query'
                       className='border-b w-full border-solid px-2 py-2 border-black focus:outline-none'
                />
                <button type='submit'
                        className='absolute top-1/2 right-0 -translate-x-1/2 -translate-y-1/2'
                >
                    <IoSearchOutline size={25}/>
                </button>
            </label>
        </form>
    );
};
export default SearchForm