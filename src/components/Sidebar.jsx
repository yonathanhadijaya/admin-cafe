"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo/matchawhisk.jpeg";
import { GrTransaction } from "react-icons/gr";
import { RiCupFill } from "react-icons/ri";
import { FaUser, FaHome, FaTruck } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";

let isTransactions = false;
if (window.Location.pathname == "/transactions") {
    isTransactions = true;
} else {
    isTransactions = false;
}
console.log(window.location.pathname);

const Sidebar = () => {
    // if (window.location.pathname == "/trancations") {
    // }
    // const [isPath, setIsPath] = useState(false);

    return (
        <div className="m-4 h-[calc(100vh-2rem-2px)] w-20 bg-dark rounded-xl">
            <aside>
                <div className="flex">
                    {/* <Image
                        src={logo}
                        alt="logo"
                        className="w-10 h-10 mx-auto my-2 rounded-xl"
                    /> */}
                    <BsFillCupHotFill className="w-8 h-8 mx-auto my-4 rounded-xl text-light" />
                </div>
                <div className="bg-slate-600 w-2/3 h-[1px] mx-auto" />
                {/* sidebar buttons */}
                <ul className="flex flex-col p-4 gap-2 text-sm font-semibold text-dark">
                    <li>
                        <motion.a
                            href="/"
                            initial={{ x: isTransactions ? 0 : 8 }}
                            whileHover={{ x: 2 }}
                            whileFocus={{ x: 2 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <FaHome className="mx-auto w-4 h-4 text-light" />
                        </motion.a>
                    </li>
                    <li>
                        <motion.a
                            href="/transactions"
                            whileHover={{ x: 2 }}
                            whileFocus={{ x: 2 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <GrTransaction className="mx-auto w-4 h-4 text-light" />
                        </motion.a>
                    </li>
                    <li>
                        <a
                            href="/items"
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <RiCupFill className="mx-auto w-4 h-4 text-light" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/user"
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <FaUser className="mx-auto w-4 h-4 text-light" />
                        </a>
                    </li>
                    <li>
                        <a
                            href="/supplier"
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <FaTruck className="mx-auto w-4 h-4 text-light" />
                        </a>
                    </li>
                    <div className="bg-slate-600 w-2/3 h-[1px] mx-auto" />
                    <li>
                        <a
                            href="/supplier"
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <RiLogoutCircleLine className="mx-auto w-4 h-4 text-light" />
                        </a>
                    </li>
                </ul>
                {/* sidebar buttons end*/}
            </aside>
        </div>
    );
};

export default Sidebar;
