import React from "react";
import './Line.css'

export default class Lines extends React.Component{

    render() {
        const orientation = (this.props.Orientation.toLowerCase() === 'v') ? 'vertical-line' : 'horizontal-line'
        return <div className={ `${this.props.ClassName} ${orientation}` }/>
    }
}