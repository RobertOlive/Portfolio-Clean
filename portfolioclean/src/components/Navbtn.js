import React, {Component} from "react";

class Navbtn extends Component {
    render () {
        return (
            <div className="navbtn">
                {this.props.btntype}
            </div>
        )
    }
}

export default Navbtn;