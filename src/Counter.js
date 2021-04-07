import React, { Component } from "react";

export class Counter extends Component {
    state = {
        count: 0,
    };
    // this.state를 기입하지 않고, 사용하는 방법. setState의 prop를 사용하라!
    onClickPlus = () =>
        this.setState((current) => ({ count: current.count + 1 }));

    onClickMinus = () =>
        this.setState((current) => ({ count: current.count - 1 }));

    render() {
        return (
            <div>
                <h1>The Count is : {this.state.count}</h1>
                <div>
                    <button onClick={this.onClickPlus}>plus</button>
                    <button onClick={this.onClickMinus}>minus</button>
                </div>
            </div>
        );
    }
}

export default Counter;
