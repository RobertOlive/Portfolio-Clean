import React, {Component} from "react";
import Navbtn from "./Navbtn";

class Header extends Component {
    render () {
        return (
            <div className="header">
                <Navbtn btntype="Home" />
                <Navbtn btntype="About" />
                <Navbtn btntype="Portfolio" />
                <Navbtn btntype="Contact" />
            </div>
        )
    }
}

export default Header;