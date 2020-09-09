import React, { Component } from 'react'

export default class eHandlerPractice extends Component {
    state = {
        phrase: 'you got it dude'
    }

    clickHandler = () => {
        this.setState({
            phrase: 'Michelle Tanner says this'
        })
    }


    render() {
        return (
            <div>
                <h1>-------------------------------------------------------</h1>
                <h3>{this.state.phrase}</h3>
                <button onClick={() => this.clickHandler()}>Click to see who says this?</button>
            </div>
        )
    }
}


