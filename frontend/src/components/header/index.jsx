import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search';
import Navbar from './Navbar';
import './sytle.css';

import Tooltip from '@mui/material/Tooltip';

import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { IoMdCart } from "react-icons/io";

import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
    "anchorOrigin":{
        vertical: 'top',
        horizontal: 'right',
    },
}));

const Header = () => {
    return (
        <header className='bg-white sticky top-0 z-[1000] shadow-md'>
            <div className='top-strip py-2 border-t-[1px] border-gray-150 border-b-[1px]'>
                <div className='container'>
                    <div className='flex items-center justify-between'>
                        <div className='col1 w[50%]'>
                        <p className="text-[14px] font-[500] flex items-centre gap-3 mb-0 mt-0 blink-text">
                            <IoIosRocket className="text-[18px]"/>
                            Free shipping for standard order over $100
                        </p>
                        </div>

                        <div className='col2 flex items-center justify-end'>
                            <ul className='flex items-center gap-4'>
                                <li className='list-none'>
                                    <Link to="/help" className='text-[13px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                        Help Centre
                                    </Link>
                                </li>
                                <li className='list-none'>
                                    <Link to="/track" className='text-[13px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                        Order Tracking
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='header py-3'>
                <div className='container flex items-center justify-between'>
                    <div className='col1 w-[15%]'>
                        <Link to={'/'}><img src='./src/assets/SNEAKPEAK.png' className='w-full h-auto color-orange' style={{ maxWidth: '100%', maxHeight: '70px' }}/></Link>
                    </div>

                    <div className='col2 w-[55%]'>
                        <Search />
                    </div>

                    <div className='col3 w-[30%] flex items-centre pl-7'>
                        <ul className='flex items-center gap-2 w-full'>
                            <li className='list-none'>
                                <Link to={'/signIn'} className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                    Sign In
                                </Link>
                            </li> |
                            <li className='list-none'>
                                <Link to={'/register'} className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                    Register
                                </Link>
                            </li>
                            <li className='list-none'>
                                <Tooltip title="Compare" arrow>                            
                                    <IconButton aria-label="compare">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoGitCompareOutline />
                                        </StyledBadge>
                                    </IconButton>   
                                </Tooltip>
                            </li>
                            <li className='list-none'>
                                <Tooltip title="Wishlist" arrow>                            
                                    <IconButton aria-label="wishlist">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <FaRegHeart />
                                        </StyledBadge>
                                    </IconButton>   
                                </Tooltip>
                            </li>
                            <li className='list-none'>
                                <Tooltip title="Cart" arrow>                            
                                    <IconButton aria-label="cart">
                                        <StyledBadge badgeContent={4} color="secondary">
                                            <IoMdCart />
                                        </StyledBadge>
                                    </IconButton>   
                                </Tooltip>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Navbar />
        </header>
    );  
};

export default Header;