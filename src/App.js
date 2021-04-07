import React from "react";
import Counter from "./Counter";

class App extends React.Component {
    state = {
        isLoading: true,
    };
    componentDidMount() {
        setTimeout(() => {
            this.setState({ isLoading: false });
        }, 6000);
    }
    render() {
        const { isLoading } = this.state;
        return (
            <div>
                {isLoading ? "Loading" : "We are ready"}
                <Counter />
            </div>
        );
    }
}

export default App;
