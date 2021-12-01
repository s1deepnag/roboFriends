import React, {Component} from "react";
import Scroll from '../components/Scroll'
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import './App.css'


class App extends Component 
{   
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField:''
        }
    }


    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => response.json())
        .then( users => {this.setState({robots: users}) });

        // /* longer version */
        // fetch('https://jsonplaceholder.typicode.com/users').
        // then( response => {
        //     return response.json();
        // }).
        // then( users => {
        //     this.setState({robots: users});
        // })
    }

    render()
    {
        // destructuring to be done. 
        //const {robots, searchField} = this.state ;

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase()) ;
        })
        
        // Should use ternany operater here to look Clean.!
        if(!this.state.robots.length) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'> RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;