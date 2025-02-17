import { Button } from "@mui/material";
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

const Navbar = () => {

    const [setIsCategoryPanel, isOpenCatPanel] = useState(false)
    const openCategoryPanel = () => {
        setIsCategoryPanel(!isOpenCatPanel);
    }
    return(
        <nav className="py-2">
            <div className="container flex items-center justify-start gap-5">
                <div className="col1 w-[20%]">
                    <div className="!text-black gap-2 cursor-pointer" onClick={openCategoryPanel}>
                    <RiMenu2Line className="text-[14px] justify-start"/>
                    <CategoryPanel />
                    <FaAngleDown className="text-[13px] ml-auto justify-end font-bold"/>
                    </div>
                </div>

                <div className="col2 w-[62%] flex items-center">
                    <ul className="flex items-center gap-5">
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Home
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Fashion
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Electronics
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Bags
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Footwear
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Groceries
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Beauty
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Wellness
                            </Link>
                        </li>
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Jewellery
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col3 w-[18%] flex items-center justify-end">
                    <p className="text-[14px] font-[500] flex items-centre gap-3 mb-0 mt-0">
                        <IoIosRocket className="text-[18px]"/>
                        Free international delivery!
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;