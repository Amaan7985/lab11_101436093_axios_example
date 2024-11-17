import React from 'react';
import PersonList from './PersonList';
import FetchPersonList from './FetchPersonList';
import './App.css';


function App() {
    return (
        <div>
            <PersonList />
            <FetchPersonList />
        </div>
    );
}

export default App;
