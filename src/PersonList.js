import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class PersonList extends Component {
    state = {
        persons: []
    };

    // Fetch data when the component mounts
    componentDidMount() {
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }

    render() {
        return (
            <div className="container">
                <h1>User List</h1>
                {this.state.persons.map((person, index) => (
                    <div key={index} className="card">
                        <img src={person.picture.large} alt={`${person.name.first} ${person.name.last}`} />
                        <div className="card-details">
                            <h4>{`${person.name.title} ${person.name.first} ${person.name.last}`}</h4>
                            <p><strong>User Name:</strong> {person.login.username}</p>
                            <p><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                            <p><strong>Time Zone Description:</strong> {person.location.timezone.description}</p>
                            <p><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.country} - ${person.location.postcode}`}</p>
                            <p><strong>Email:</strong> {person.email}</p>
                            <p><strong>Birth Date and Age:</strong> {`${person.dob.date} (${person.dob.age})`}</p>
                            <p><strong>Register Date:</strong> {person.registered.date}</p>
                            <p><strong>Phone:</strong> {person.phone}</p>
                            <p><strong>Cell:</strong> {person.cell}</p>
                            <button>Details</button>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default PersonList;
