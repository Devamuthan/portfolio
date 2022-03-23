import React from "react";
import './Logo.css';

export default class Logo extends React.Component {
    render() {
        return (
            <div className={'logo'}>
                <div className={'border-depth'} />
                <div className={'text-container'}>
                    <div className={'text'}>
                        ds
                    </div>
                </div>
            </div>
        )
    }
}