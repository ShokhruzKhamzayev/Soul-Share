'use client'
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import ThemeSwitcher from "./ThemeSwitcher";
import BurgerMenu from "./burgerMenu";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [action, setAction] = useState(false)
    return (
        <div className="relative">
            <div className="custom-container flex justify-between items-center py-[25px]">
                <div className="logo">
                    <Link href={'/'}>
                        <h1 className="font-semibold text-[23px] md:text-[32px]">Soul Share</h1>
                    </Link>
                </div>
                <div className="pages-theme flex items-center gap-[10px] md:gap-[40px]">
                    <nav className="hidden md:flex items-center gap-[42px]">
                        <BurgerMenu setAction={setAction} />
                    </nav>
                    <ThemeSwitcher />
                    <button className="block md:hidden" onClick={() => setAction(true)}>
                        <FaBars size={32} />
                    </button>
                </div>
            </div>
            <div className={`nav-phone block md:hidden ${action ? 'active' : 'disactive'} bg-[#F2F3FD] dark:bg-[#02030D]`}>
                <button className="closer" onClick={() => setAction(false)}>
                    <IoMdClose size={35} />
                </button>
                <BurgerMenu setAction={setAction} />
            </div>
        </div>
    )
}
