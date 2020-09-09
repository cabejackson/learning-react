import React, {
    Component
} from 'react'

export default class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    handleCount() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(
                `Here's the current count`,
                this.state.count)
        })
        console.log(`This is the wrong count:`, this.state.count)

    }


    render() {
        return ( <
            div >
            <
            h2 > Count = {
                this.state.count
            } < /h2> <
            button onClick = {
                () => this.handleCount()
            } > Increment < /button> < /
            div >
        )
    }
}