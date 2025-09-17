import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    return(
        <>
            <section className="section py-10">
                <div className="container flex justify-center items-center">
                    <div className="card shadow-md w-[500px] m-auto rounded-md bg-white p-4 px-5">
                        <h3 className="text-2xl font-bold text-center">
                            Login into your Account
                        </h3>


                        <form className="w-full !mt-5">
                            <div className="form-group w-full px-10 mb-5 py-2">
                                <TextField id="email"
                                    type="email"
                                label="Email Id *"
                                variant="outlined"
                                className="w-full" />
                            </div>

                            <div className="form-group w-full px-10 !mb-3 py-2">
                                <TextField id="password"
                                    type={showPassword ? "text" : "password"}
                                    label="Password *"
                                    variant="outlined"
                                    className="w-full"
                                    InputProps={{
                                        endAdornment: (
                                            <Button className="!h-[35px] !w-[35px] !min-w-[35px] !p-0 !rounded-full 
                                                !text-black" onClick={() => setShowPassword(!showPassword)}>
                                                {showPassword ? <IoMdEye className="text-[20px] opacity-50"/> : 
                                                    <IoMdEyeOff className="text-[20px] opacity-50"/>}
                                            </Button>
                                        )
                                    }}
                                />
                            </div>


                            <a href="link" className="text-[14px] cursor-pointer mb-3 font-[600] hover:text-orange-500 transition duration-300 ease-in-out
                                opacity-65">
                                Forgot Password?
                            </a>
                            <br></br>

                            <Link to="/">
                            <Button className="w-full !mb-3 !mt-5 !btn-org !text-white !bg-orange-500 !rounded-[10px]">
                                Login
                            </Button>
                            </Link>

                            <p className="text-[14px] !text-center !mb-3 !opacity-65">
                                Not Registered? <a href="/register" className="font-[600] hover:text-orange-500 transition duration-300 ease-in-out">Sign Up</a>
                            </p>

                            <p className="text-[14px] font-[600] text-center mt-3 opacity-65">
                                Or Sign Up with Social Account
                            </p>
                            <br></br>

                            <div className="flex justify-center mt-3">
                                <Button 
                                    className="!flex !items-center !gap-2 !px-4 !py-2 !border !border-gray-300 !rounded-[10px] !text-gray-700 !bg-white hover:!bg-gray-50"
                                    onClick={() => {/* Add Google sign-in logic here */}}
                                >
                                    <img 
                                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
                                        alt="Google" 
                                        className="w-5 h-5" 
                                    />
                                    Sign in with Google
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login;
