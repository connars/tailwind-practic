import { Link } from "react-router-dom"
import { useState } from "react";
import { FaGoogle, FaInstagram, FaTelegram } from "react-icons/fa";

function Header() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen)
    }

    const close = () => {
        setIsOpen(false)
    }

    return (
        <header className="absolute w-[100%] pt-[10px] pb-[10px]">
            <div className="container grid grid-cols-3 place-items-center md:grid-cols-2">
                <div className="flex col-span-1 w-full md:order-3">
                    <ul className={`${isOpen ? 'md:block md:absolute md:bg-white md:inset-0 md:align-center md:h-[100vh] md:p-[20px] md:pt-[10px] z-10' : 'md:hidden'} flex gap-10 text-[16px] md:text-[24px] block md:text-semibold`}>
                        <li className="md:block hidden">
                            <div className="flex justify-center md:justify-start col-span-1 w-full md:order-1 text-black mb-10">
                                <h3 className="text-[24px] font-bold md:text-[26px] flex gap-2 items-center">
                                    <span className="w-[10px] h-[10px] bg-orange"></span>
                                    logo
                                </h3>
                            </div>
                        </li>
                        <li className="p-0">
                            <Link className="text-white md:text-black hover:text-orange transition duration-300 " to='/'>About us</Link>
                        </li>
                        <li>
                            <Link className="text-white md:text-black hover:text-orange transition duration-300" to='/'>Project</Link>
                        </li>
                        <li>
                            <Link className="text-white md:text-black hover:text-orange transition duration-300" to='/'>Services</Link>
                        </li>
                        <li className="hidden md:block">
                            <p onClick={close}>close</p>
                        </li>
                        <li className="hidden md:block md:mt-16">
                            <div className="flex justify-end col-span-1 gap-[14px] w-full md:justify-center md:order-3">
                                <button className="primary-button">
                                    Login
                                </button>
                                <button className="primary-button" style={{background: 'transparent', color: 'black', border: '1px solid black'}}>
                                    Sign up
                                </button>
                            </div>
                            <div className="flex justify-center mt-4 gap-2">
                                <FaGoogle className='text-orange bg-gray p-2 rounded-[50%]' size={'34px'}/>
                                <FaTelegram className='text-orange bg-gray p-2 rounded-[50%]' size={'34px'}/>
                                <FaInstagram className='text-orange bg-gray p-2 rounded-[50%]' size={'34px'}/>
                            </div>
                        </li>
                    </ul>
                </div>
                <div onClick={toggleOpen} className="hidden md:block md:order-2 md:w-full md:flex md:justify-end">
                    <p className="text-white text-[26px]">
                        &#9776;
                    </p>
                </div>
                <div className="flex justify-center md:justify-start col-span-1 w-full md:order-1 text-white">
                    <h3 className="text-[24px] font-bold md:text-[26px] flex gap-2 items-center">
                        <span className="w-[10px] h-[10px] bg-orange"></span>
                        logo
                    </h3>
                </div>
                <div className="flex justify-end md:hidden col-span-1 gap-[14px] w-full md:justify-center md:order-3">
                    <button className="text-white hover:text-orange transition duration-300">
                        Login
                    </button>
                    <button className="secondary-button">
                        Sign up
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;