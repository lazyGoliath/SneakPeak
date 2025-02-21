import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { FaRegPlusSquare } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./style.css";
import { Link } from 'react-router-dom';
import { FaRegMinusSquare } from "react-icons/fa";


    const CategoryPanel = (props) => {
        const [subMenuIndex, setSubMenu] = React.useState(null);
        const [innerSubMenuIndex, setInnerSubMenu] = React.useState(null);

        const toggleDrawer = (newOpen) => () => {
            props.setIsCategoryPanel(newOpen);
        };

        const openSubmenu = (index) => {
            if(subMenuIndex === index){
                setSubMenu(null);
                setInnerSubMenu(null);
            } else{
                setSubMenu(index);
            }
        };

        const openInnerSubmenu = (index) => {
            if(innerSubMenuIndex === index){
                setInnerSubMenu(null);
            } else{
                setInnerSubMenu(index);
            }
        };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" className='categoryPanel'>
            <h3 className='text-[18px] font-[500] p-3 flex items-center justify-between'>
                Shop By Categories 
                <IoClose className='text-[25px] cursor-pointer' onClick={toggleDrawer(false)} />
            </h3>

            <div className='scroll'>
                <ul className='w-full'>
                    {/* Fashion */}
                    <li className='list-none relative flex-col'>
                        <Button className='w-full !text-black !text-[18px] !px-5 !text-left !justify-between'>
                            Fashion
                            { subMenuIndex == 0 ? 
                                <FaRegMinusSquare className='text-[16px] top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                                :
                                <FaRegPlusSquare className='text-[16px] top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(0)}/>
                            }
                        </Button>
                        {subMenuIndex === 0 && (
                        <ul className='innerSubmenuIndex w-full pl-3'>
                            <li className='list-none relative'>
                                <Link to="/" className='w-full'>
                                    <Button className='w-full !text-black !text-[16px] !px-5 !text-left !justify-between'>
                                        Apparel 
                                        { innerSubMenuIndex == 0 ? 
                                            <FaRegMinusSquare className='text-[16px] top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                                            :
                                            <FaRegPlusSquare className='text-[16px] top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(0)}/>
                                        }
                                    </Button>
                                </Link>

                                {innerSubMenuIndex === 0 && (
                                <ul className='submenuIndex w-full pl-3'>
                                    <li className='list-none relative mb-1'>
                                        <Link to="/" className='w-full link hover:text-orange-500 transition duration-300 ease-in-out'>
                                            <Button className='w-full !font-[500] !text-black !text-[13px] !px-5 !text-left !justify-between'>
                                                Smart Tablet 
                                                {/* <FaRegPlusSquare className='text-[14px] cursor-pointer' /> */}
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none relative mb-1'>
                                        <Link to="/" className='w-full link hover:text-orange-500 transition duration-300 ease-in-out'>
                                            <Button className='w-full !font-[500] !text-black !text-[13px] !px-5 !text-left !justify-between'>
                                                Crepe T-Shirt 
                                                {/* <FaRegPlusSquare className='text-[14px] cursor-pointer' /> */}
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none relative mb-1'>
                                        <Link to="/" className='w-full link hover:text-orange-500 transition duration-300 ease-in-out'>
                                            <Button className='w-full !font-[500] !text-black !text-[13px] !px-5 !text-left !justify-between'>
                                                Leather Watch 
                                                {/* <FaRegPlusSquare className='text-[14px] cursor-pointer' /> */}
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none relative mb-1'>
                                        <Link to="/" className='w-full link hover:text-orange-500 transition duration-300 ease-in-out'>
                                            <Button className='w-full !font-[500] !text-black !text-[13px] !px-5 !text-left !justify-between'>
                                                Rolling Diamond 
                                                {/* <FaRegPlusSquare className='text-[14px] cursor-pointer' /> */}
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                                )}
                            </li>
                        </ul>
                        )}
                    </li>

                    {/* Outerwear */}
                    <li className='list-none flex items-centre relative flex-col'>
                        <Button className='w-full !text-black !text-[18px] !px-5 !text-left !justify-between'>
                            Fashion
                            { subMenuIndex == 1 ? 
                                <FaRegMinusSquare className='text-[16px] top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                                :
                                <FaRegPlusSquare className='text-[16px] top-[10px] right-[15px] cursor-pointer' onClick={()=>openSubmenu(1)}/>
                            }
                        </Button>
                        {subMenuIndex === 1 && (
                        <ul className='innerSubmenuIndex w-full pl-3'>
                            <li className='list-none relative'>
                                <Link to="/" className='w-full'>
                                    <Button className='w-full !text-black !text-[16px] !px-5 !text-left !justify-between'>
                                        Apparel 
                                        { innerSubMenuIndex == 1 ? 
                                            <FaRegMinusSquare className='text-[16px] top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>
                                            :
                                            <FaRegPlusSquare className='text-[16px] top-[10px] right-[15px] cursor-pointer' onClick={()=>openInnerSubmenu(1)}/>
                                        }
                                    </Button>
                                </Link>

                                {innerSubMenuIndex === 1 && (
                                <ul className='submenuIndex w-full pl-3'>
                                    <li className='list-none relative mb-1'>
                                        <Link to="/" className='w-full link hover:text-orange-500 transition duration-300 ease-in-out'>
                                            <Button className='w-full !font-[500] !text-black !text-[13px] !px-5 !text-left !justify-between'>
                                                Smart Tablet 
                                                {/* <FaRegPlusSquare className='text-[14px] cursor-pointer' /> */}
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none relative mb-1'>
                                        <Link to="/" className='w-full link hover:text-orange-500 transition duration-300 ease-in-out'>
                                            <Button className='w-full !font-[500] !text-black !text-[13px] !px-5 !text-left !justify-between'>
                                                Crepe T-Shirt 
                                                {/* <FaRegPlusSquare className='text-[14px] cursor-pointer' /> */}
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none relative mb-1'>
                                        <Link to="/" className='w-full link hover:text-orange-500 transition duration-300 ease-in-out'>
                                            <Button className='w-full !font-[500] !text-black !text-[13px] !px-5 !text-left !justify-between'>
                                                Leather Watch 
                                                {/* <FaRegPlusSquare className='text-[14px] cursor-pointer' /> */}
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className='list-none relative mb-1'>
                                        <Link to="/" className='w-full link hover:text-orange-500 transition duration-300 ease-in-out'>
                                            <Button className='w-full !font-[500] !text-black !text-[13px] !px-5 !text-left !justify-between'>
                                                Rolling Diamond 
                                                {/* <FaRegPlusSquare className='text-[14px] cursor-pointer' /> */}
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                                )}
                            </li>
                        </ul>
                        )}
                    </li>
                    {/* Jewellery */}
                    {/* Watches */}
                    {/* Cosmetics */}
                    {/* Accessories */}
                    {/* Electronics */}
                    {/* Furniture */}
                    {/* Sunglasses */}
                    {/* Rolling Diamond */}
                    {/* Watches */}
                    {/* Watches */}
                    {/* Watches */}
                    {/* Watches */}
                    {/* Watches */}
                </ul>
            </div>
        </Box>
    );

    return (
        <div>
        <Drawer open={props.isOpenCatPanel} onClose={toggleDrawer(false)}>
            {DrawerList}
        </Drawer>
        </div>
    );
}

export default CategoryPanel;