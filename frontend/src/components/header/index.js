import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Event Calendar</Link>
                    </li>
                    <li>
                        <Link to="/weather">Weather</Link>
                    </li>
                    <li>
                        <Link to="/news">News</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}