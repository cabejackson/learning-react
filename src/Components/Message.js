import React, { Component } from 'react'

export default class Message extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            message: 'HOWDY!'      
        }
    }  

    handleSubmit() {
        this.setState({
            message: `How y'all doin?`
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.handleSubmit()}>Change the Message</button>
                
            </div>
        )
    }
}

