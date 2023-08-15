import React from 'react';
import DarkModeToggle from "react-dark-mode-toggle";

const Navbar = (props) => {

    return (
        <div className={"navbar"} id={"navbar"}>
            <nav className={"nav"}>
                <div className="site-title">
                    NEWS BULLETIN
                </div>
                    <DarkModeToggle
                        className={"dark-toggle"}
                        onChange={props.toggleMode}
                        checked={props.mode==="Dark"?true:false}
                        size={80}
                    />
            </nav>
        </div>
    );
}

export default Navbar;
