import React from "react";
import axios from "axios";
import Counter from "./Counter";

class App extends React.Component {
    state = {
        isLoading: true,
    };

    fetchEvent = async () => {
        const res = await axios.get(
            "https://api.themoviedb.org/3/movie/550?api_key=d7d1e7b43a6581ecf72c793c35505402"
        );
        console.log(res.data.production_companies.map((items) => items.name));
    };

    componentDidMount() {
        this.fetchEvent();
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
