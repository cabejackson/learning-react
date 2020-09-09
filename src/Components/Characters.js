import React, { Component } from 'react';

// export default class Characters extends Component {
   
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.name} the {this.props.job}</h1>
//             </div>
//         )

    
        
//     }
// }


export default class Characters extends Component {

    render() {
        const { name, job } = this.props
        return (
            <div>
                <h1>{name} the {job}</h1>
                {this.props.children}
                <button onClick={this.handleClick}>YOOOO!!! I'm a button-kinda!</button>
            </div>
        )

    
        
    }
}


