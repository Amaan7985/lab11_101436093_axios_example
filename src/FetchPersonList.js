import React, { Component } from 'react';

class FetchPersonList extends Component {
    state = {
        persons: []
    };

    // Lifecycle method to fetch data after the component mounts
    componentDidMount() {
        fetch('https://randomuser.me/api/?results=10')
            .then(response => response.json())
            .then(data => {
                console.log(data); // Log the entire response for debugging
                this.setState({ persons: data.results }); // Update the state with fetched data
            })
            .catch(error => {
                console.error("There was an error fetching the data!", error);
            });
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center">Person List (Using Fetch API)</h1>
                <ul className="list-group">
                    {this.state.persons.map((person, index) => (
                        <li key={index} className="list-group-item">
                            {person.name.title} {person.name.first} {person.name.last}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default FetchPersonList;
