import React from "react";

import HeaderContent from "./HeaderContent";
import NavBar from "./NavBar";
import NavItem from "./NavItem";

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