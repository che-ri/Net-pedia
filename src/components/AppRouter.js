import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from "react-router-dom";
import Movies from "../pages/Movies";
import Test from "../pages/Test";

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Movies} />
                <Route exact path="/test" component={Test} />
                <Redirect from="*" to="/" />
            </Switch>
        </Router>
    );
};

export default AppRouter;
