import React, { useState } from "react";
import './Sidebar.css'
import Logo from '@assets/logo.svg'
import { SidebarData } from "@data/data";
import {UilSignOutAlt} from '@iconscout/react-unicons'

const Sidebar = () => {
    const [selected,useSelected] = useState(0)

    return (
        <div className="Sidebar">
            {/* Logo */}
            <div className="logo">
                <img src={Logo} alt=""/>
                <span>
                    WorkSh<span>o</span>p
                </span>
            </div>
            <div className="menu">
                {SidebarData.map((item, index) => {
                    return (
                        <div className={selected === index ? "menuItem active" : "menuItem"} 
                        key={index}
                        onClick={() => useSelected(index)}
                        >
                            <item.icon/>
                            <span>{item.heading}</span>
                        </div>
                    )
                })}
                <div className="menuItem">
                    <UilSignOutAlt />
                </div>
            </div>
        </div>
    )
}
export default Sidebar;