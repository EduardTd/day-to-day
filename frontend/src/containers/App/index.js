import React from "react";
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from "./reducer"

import 'sanitize.css/sanitize.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "../../components/Header";
import EventCalendarPage from "../EventCalendarPage";
import WeatherPage from "../WeatherPage";
import NewsPage from "../NewsPage";
import NotFoundPage from "../NotFoundPage";

const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <EventCalendarPage />
                    </Route>
                    <Route path="/weather">
                        <WeatherPage />
                    </Route>
                    <Route path="/news">
                        <NewsPage />
                    </Route>
                    <Route path="">
                        <NotFoundPage />
                    </Route>
                </Switch>
            </Router>
        </Provider>
    );
}

export default App;