"use client"

import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


export default function Header() {
    const [hamActive, setHamActive] = useState(false);

    const hamburgerClick = function () {
        setHamActive(!hamActive);
    };

    return <header className="flex justify-between">
        <div className="">logo</div>
        <div className="" onClick={hamburgerClick}>
            <div className="hamburger_btn bg-gray-400 text-3xl">

                <div className={"flex justify-center items-center " + (hamActive ? 'active' : '')}>
                    <FaBars />
                </div>
                <div className={"flex justify-center items-center " + (hamActive ? 'active' : '')}>
                    <FaTimes />
                </div>

            </div>

        </div>

        <div id="hamburger_menu" className={'hamburger_container ' + (hamActive ? 'active' : '')}>
            <ul className="text-center bg-blue-100">
                <li>btn1</li>
                <li>btn2</li>
                <li>btn3</li>
            </ul>
        </div>
    </header>
};