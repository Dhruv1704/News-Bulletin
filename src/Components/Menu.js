import React, {useState} from 'react';
import {scaleRotate as Menubar} from 'react-burger-menu'
import {Link} from "react-router-dom";

const Menu = (props) => {

    const [open, setOpen] = useState(false);

    function handleOpen() {
        document.getElementById("outer-container").style.height = "100vh"
        setOpen(true)
    }

    function handleClose() {
        setOpen(false)
        setTimeout(() => {
            document.getElementById("outer-container").style.height = "100%"
        }, 500)
    }

    return (
        <Menubar right isOpen={open} pageWrapId={"page-wrap"} outerContainerId={"outer-container"} onOpen={handleOpen}
                 onClose={handleClose}>
            <h3 className={"menu-heading"}>Country</h3>
            <li onClick={() => {
                props.changeCountry("in")
            }}>
                <Link to="/in/general" className="nav-item "
                >India</Link>
            </li>
            <li onClick={() => {
                props.changeCountry("us")
            }}>
                <Link to="/us/general" className="nav-item "
                >America</Link>
            </li>
            <li onClick={() => {
                props.changeCountry("ca")
            }}>
                <Link to="/ca/general" className="nav-item "
                >Canada</Link>
            </li>
            <li onClick={() => {
                props.changeCountry("au")
            }}>
                <Link to="/au/general" className="nav-item "
                >Australia</Link>
            </li>
            <h3>Category</h3>
            <nav>
                <li>
                    <Link to={`/${props.country}/general`} className="nav-item " >General</Link>
                </li>
                <li>
                    <Link to={`/${props.country}/entertainment`} className="nav-item "
                          >Entertainment</Link>
                </li>
                <li>
                    <Link to={`/${props.country}/business`} className="nav-item " >Business</Link>
                </li>
                <li>
                    <Link to={`/${props.country}/health`} className="nav-item " >Health</Link>
                </li>
                <li>
                    <Link to={`/${props.country}/science`} className="nav-item" >Science
                    </Link></li>
                <li>
                    <Link to={`/${props.country}/sports`} className="nav-item" >Sports
                    </Link></li>
                <li>
                    <Link to={`/${props.country}/technology`} className="nav-item">Technology</Link>
                </li>
            </nav>
        </Menubar>
    );
}

export default Menu;
