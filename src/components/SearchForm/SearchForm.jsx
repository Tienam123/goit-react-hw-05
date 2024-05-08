import {useFormik} from "formik";
import {IoSearchOutline} from "react-icons/io5";

const SearchForm = ({setNewQuery}) => {
    const formik = useFormik({
        initialValues: {
            query: ''
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values)
            setNewQuery(values.query)
            resetForm()
        },
    })
    return (
        <form onSubmit={formik.handleSubmit}
              className='flex items-center justify-center'
        >
            <label className='relative w-1/3'>
                <input type='text'
                       value={formik.values.query}
                       onChange={formik.handleChange}
                       name='query'
                       className='border w-full border-solid px-2 py-2 border-black'
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