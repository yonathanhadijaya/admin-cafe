"use client";
import React from "react";
import { GrTransaction } from "react-icons/gr";
import { MdDarkMode } from "react-icons/md";
import { IoNotifications } from "react-icons/io5";
import { motion } from "framer-motion";

const Header = ({ title }) => {
    return (
        <header className="flex w-full h-16 p-4 mt-4 rounded-xl justify-between z-10 bg-white">
            <div className="flex gap-4 font-semibold text-dark text-md py-auto">
                <GrTransaction className="m-auto" />
                <span className="m-auto">Title</span>
            </div>

            <div className="flex flex-wrap gap-2">
                <motion.button
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="m-auto hover:bg-slate-300 rounded-full"
                >
                    <IoNotifications className="w-4 h-4 m-2" />
                </motion.button>
                <motion.button
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.9 }}
                    className="m-auto hover:bg-slate-300 rounded-full"
                >
                    <MdDarkMode className="w-4 h-4 m-2" />
                </motion.button>
            </div>
        </header>
    );
};

export default Header;
