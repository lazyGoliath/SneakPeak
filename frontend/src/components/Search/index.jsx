import react from 'react';
import './index.css';
import Button from '@mui/material/Button';
import { FaSearch } from "react-icons/fa";

const Search = () => {
return(
    <div className='searchBox w-[100%] h-[45px] bg-[#e5e5e5] rounded-[5px] flex items-center p-2 relative'>
        <input type='text' placeholder='Search for products...' className='w-full h-[35px] focus:outline-none px-4 text-[15px]'></input>
        <Button className='!absolute !text-black top-[5px] right-[5px] z-50 !w-[37px] !min-w-[37px] h-[37px] !rounded-full'>
            <FaSearch className='text-black text-[15px]'/>
        </Button>
    </div>
)
}

export default Search;