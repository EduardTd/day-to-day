import React, {Component} from "react";
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

export default class App extends Component {
    render() {
        return (
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
        );
    }
}