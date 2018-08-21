import React, {Component} from "react";

class SectionHead extends Component {
    render () {
        return (
            <div className="sectionHead">
                <h2>{this.props.sectionTitle}</h2>
            </div>
        )
    }
}

export default SectionHead;