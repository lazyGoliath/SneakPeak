import { Button } from "@mui/material";
import { RiMenu2Line } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";

const Navbar = () => {

    const [isOpenCatPanel, setIsCategoryPanel] = useState(false)
    const openCategoryPanel = () => {
        setIsCategoryPanel(true);
    }
    return(
        <nav className="py-2">
            <div className="container flex items-center justify-start gap-5">
                <div className="col1 w-[20%]">
                    <Button className="!text-black gap-2" onClick={openCategoryPanel}>
                    <RiMenu2Line className="text-[14px] justify-start"/>
                    Shop By Categories
                    <FaAngleDown className="text-[13px] ml-auto justify-end font-bold"/>
                    </Button>
                </div>

                <div className="col2 w-[62%] flex items-center">
                    <ul className="flex items-center gap-5 nav">
                        <li className="list-none">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Home
                            </Link>
                        </li>
                        <li className="list-none relative">
                            <Link to="/" className='text-[15px] font-[500] link hover:text-orange-500 transition duration-300 ease-in-out'>
                                Fashion
                            </Link>

                            <div className="subMenu absolute top-[120%] left-0 bg-white min-w-[300px] shadow-md opacity-0 transition-all">
                                <ul className="flex-col items-centre gap-3">
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                Men
                                            </Button>
                                        </Link>

                                        <div className="subMenu absolute top-[120%] left-0 bg-white min-w-[300px] shadow-md opacity-0 transition-all">
                                            <ul className="flex-col items-centre gap-3">
                                                <li className="list-none w-full">
                                                    <Link to="/" className="w-full">
                                                        <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                            Men
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none">
                                                    <Link to="/" className="w-full">
                                                        <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                            Women
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none">
                                                    <Link to="/" className="w-full">
                                                        <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                            Kids
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none">
                                                    <Link to="/" className="w-full">
                                                        <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                            Girls
                                                        </Button>
                                                    </Link>
                                                </li>
                                                <li className="list-none">
                                                    <Link to="/" className="w-full">
                                                        <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                            Boys
                                                        </Button>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className="list-none">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                Women
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="list-none">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                Kids
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="list-none">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                Girls
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="list-none">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-black w-full !justify-start !px-4 !rounded-none">
                                                Boys
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
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

            <CategoryPanel isOpenCatPanel={isOpenCatPanel} setIsCategoryPanel={setIsCategoryPanel} />
        </nav>
    )
}

export default Navbar;