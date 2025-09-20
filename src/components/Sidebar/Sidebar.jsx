import React from "react";
import './Sidebar.css'
import Logo from '@assets/logo.svg'

const Sidebar = () => {
    return (
        <div className="Sidebar">
            {/* Logo */}
            <div className="logo">
                <img src={Logo} alt=""/>
                <span>
                    WorkSh<span>o</span>p
                </span>
            </div>
        </div>
    )
}
export default Sidebar;