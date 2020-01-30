import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import {
    EventCalendarPage,
    WeatherPage,
    NewsPage
} from '../pages';
import Header from "../header";

export default class App extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/" exact >
                        <EventCalendarPage />
                    </Route>
                    <Route path="/weather">
                        <WeatherPage />
                    </Route>
                    <Route path="/news">
                        <NewsPage />
                    </Route>
                    <Route render={() => <h2>Page not found</h2>} />
                </Switch>
            </Router>
        );
    }
}