import React, {Component} from "react";
import Scroll from '../components/Scroll'
import CardList from '../components/CardList';
import SearchBox from "../components/SearchBox";
import './App.css'
import { connect } from 'react-redux'
import { setSearchField } from "../actions";

const mapStateToProps = (state) => {
    return {
        searchField: state.searchField
    }
}

const mapDispacthToProps = (dispath) => {
    return {
        onSearchChange: (event) => dispath(setSearchField(event.target.value))
    }
}

class App extends Component 
{   
    constructor() {
        super();
        this.state = {
            robots: []
        }
    }


    // onSearchChange = (event) => {
    //     this.setState( {searchField: event.target.value });
    // }

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
        const {robots} = this.state;
        const {searchField, onSearchChange} = this.props;

        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase()) ;
        })
        
        // Should use ternany operater here to look Clean.!
        if(!robots.length) {
            return <h1> Loading </h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='f1'> RoboFriends</h1>
                    <SearchBox searchChange={onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>
                </div>
            );
        }
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(App);