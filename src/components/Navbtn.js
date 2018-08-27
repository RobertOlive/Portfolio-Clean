import React, {Component} from "react";

class Navbtn extends Component {

    buttonclick = event=> {
        event.preventDefault();
        document.querySelector("." + this.props.btntype.toLowerCase()).scrollIntoView({behavior: "smooth"});
    }

    render () {
        return (
            <div className={`navbtn col-md`}>
                <button onClick={this.buttonclick}>{this.props.btntype}</button>
            </div>
        )
    }
}

export default Navbtn;