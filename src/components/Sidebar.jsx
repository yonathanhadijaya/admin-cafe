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
import { usePathname } from "next/navigation";

const Button = ({ href, icon }) => {
    const pathname = usePathname();
    return (
        <li>
            <motion.a
                href={href}
                // initial={{ x: isPath 8 : 0 }}
                whileHover={{ x: 8 }}
                whileFocus={{ x: 8 }}
                whileTap={{ scale: 0.9 }}
                // className="flex hover:bg-slate-700 rounded-xl py-2"
                className={`flex hover:bg-slate-700 rounded-xl py-2
                ${pathname === href ? "bg-sushi" : "bg-dark"}`}
            >
                {icon}
            </motion.a>
        </li>
    );
};

const Sidebar = () => {
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
                    <Button
                        href="/"
                        icon={<FaHome className="mx-auto w-4 h-4 text-light" />}
                    />
                    <Button
                        href="/transactions"
                        icon={
                            <GrTransaction className="mx-auto w-4 h-4 text-light" />
                        }
                    />
                    <Button
                        href="/items"
                        icon={
                            <RiCupFill className="mx-auto w-4 h-4 text-light" />
                        }
                    />
                    <Button
                        href="/users"
                        icon={<FaUser className="mx-auto w-4 h-4 text-light" />}
                    />
                    <Button
                        href="/suppliers"
                        icon={
                            <FaTruck className="mx-auto w-4 h-4 text-light" />
                        }
                    />
                    <div className="bg-slate-600 w-2/3 h-[1px] mx-auto" />
                    <Button
                        href="#"
                        icon={
                            <RiLogoutCircleLine className="mx-auto w-4 h-4 text-light" />
                        }
                    />
                </ul>
                {/* sidebar buttons end*/}
            </aside>
        </div>
    );
};

export default Sidebar;
