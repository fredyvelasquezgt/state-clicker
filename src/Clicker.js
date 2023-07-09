import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props)
        this.state = {counter: 0}
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        let rand = Math.floor(Math.random() * 10) + 1;
        this.setState({counter: rand})

       
    }

    

    render() {
        return (
            <div>
                <h1>Number is: {this.state.counter}</h1>
                {this.state.counter === 7
                 ? <h2>YOU WIN!</h2>: <button onClick={this.handleClick}>Click!</button> }
            </div>
        )
    }
}

export default Clicker;