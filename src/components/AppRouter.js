import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import PrintMovies from "./Layout";
import Test from "./Layout";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={PrintMovies} />
                <Route exact path="/test" component={Test} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};

export default AppRouter;
