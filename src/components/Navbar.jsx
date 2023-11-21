"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo/matchawhisk.jpeg";
import { motion } from "framer-motion";
import { GoHomeFill } from "react-icons/go";
import { GrTransaction } from "react-icons/gr";

const Navbar = () => {
    return (
        <div className="h-screen bg-white rounded-xl">
            <aside>
                <div className="flex">
                    <Image
                        src={logo}
                        alt="logo"
                        className="w-20 h-20 p-4 rounded-xl"
                    />
                    <span className="inline-block my-auto">matcha.tea</span>
                </div>
                <ul className="flex flex-col p-4 gap-2 text-sm font-semibold text-dark">
                    <li>
                        <Link
                            href="/"
                            className="flex hover:bg-slate-200 rounded-xl py-2"
                        >
                            <GoHomeFill className="mx-4"/>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/transactions"
                            className="flex hover:bg-slate-200 rounded-xl py-2"
                        >
                            <GrTransaction className="mx-4"/>
                            Transactions
                        </Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                </ul>
            </aside>
        </div>
    );
};

export default Navbar;
