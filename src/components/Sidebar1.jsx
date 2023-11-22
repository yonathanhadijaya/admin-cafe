"use client";
import React from "react";
import Image from "next/image";
import { GrTransaction } from "react-icons/gr";
import { RiCupFill } from "react-icons/ri";
import { FaUser, FaHome, FaTruck } from "react-icons/fa";
import { BsFillCupHotFill } from "react-icons/bs";
import { RiLogoutCircleLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Sidebar = () => {
    const router = useRouter();
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
                            initial={{ x: router.asPath === href ? 2 : 0 }}
                            whileHover={{ x: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <FaHome className="mx-auto w-4 h-4 text-light" />
                        </motion.a>
                    </li>

                    <li>
                        <motion.a
                            href="/transactions"
                            whileHover={{ x: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <GrTransaction className="mx-auto w-4 h-4 text-light" />
                        </motion.a>
                    </li>
                    <li>
                        <motion.a
                            href="/items"
                            whileHover={{ x: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <RiCupFill className="mx-auto w-4 h-4 text-light" />
                        </motion.a>
                    </li>
                    <li>
                        <motion.a
                            href="/users"
                            whileHover={{ x: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <FaUser className="mx-auto w-4 h-4 text-light" />
                        </motion.a>
                    </li>
                    <li>
                        <motion.a
                            href="/suppliers"
                            whileHover={{ x: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <FaTruck className="mx-auto w-4 h-4 text-light" />
                        </motion.a>
                    </li>
                    <div className="bg-slate-600 w-2/3 h-[1px] mx-auto" />
                    <li>
                        <motion.a
                            href="/"
                            whileHover={{ x: 8 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex hover:bg-slate-700 rounded-xl py-2"
                        >
                            <RiLogoutCircleLine className="mx-auto w-4 h-4 text-light" />
                        </motion.a>
                    </li>
                </ul>
                {/* sidebar buttons end*/}
            </aside>
        </div>
    );
};

export default Sidebar;
