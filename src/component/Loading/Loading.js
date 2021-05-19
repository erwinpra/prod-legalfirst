import React, { Component } from 'react'
import './Loading.scss'
export default class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div className="content">
                    <div className="loading">
                        <p>loading</p>
                        <span></span>
                    </div>
                </div>
            </div>
        )
    }
}
