import React from "react";
import './MainDash.css'
import Cards from "@components/Cards/Cards.jsx";
import Table from "@components/Table/Table.jsx";

const MainDash = () => {
    return (
        <div className="MainDash">
            <h1>Main Dash</h1>
            <Cards />
            <Table />
        </div>
    )
}

export default MainDash;