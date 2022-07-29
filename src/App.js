import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

// In order to comunicate two diferent elements, we need to introduce the state concept,
// to do this, we will use classes instead of consts
// const App = () => {
class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchfield: ''

        }
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        return (
            // <>
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>

            // </>

        );

    }
}

export default App;