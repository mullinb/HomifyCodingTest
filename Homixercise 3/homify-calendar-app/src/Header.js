import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
              <h1 className="App-title">Homify Calendar App</h1>
              <h2>{months[new Date().getMonth()] + " " + new Date().getFullYear()}</h2>
            </header>
        )
    }
}

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

export default Header;
