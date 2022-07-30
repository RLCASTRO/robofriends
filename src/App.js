import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll'
import Sticky from './Sticky'
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''

        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
        // this.setState({ robots: robots })
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLocaleLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1 className='tc'>Loading</h1>
        } else {
            return (
                // <>
                <div className='tc'>
                    <Sticky>
                        <h1 className='f1'>RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange} />

                    </Sticky>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
                // </>
            );
        }
    }
}

export default App;