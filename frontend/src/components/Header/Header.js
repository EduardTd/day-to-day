import React from "react";

import HeaderContent from "./styledComponent/HeaderContent";
import NavBar from "./styledComponent/NavBar";
import NavItem from "./styledComponent/NavItem";

function Header() {
    return (
        <HeaderContent>
            <NavBar>
                <NavItem to="/">Event Calendar</NavItem>
                <NavItem to="/weather">Weather</NavItem>
                <NavItem to="/news">News</NavItem>
            </NavBar>
        </HeaderContent>
    );
}

export default Header;