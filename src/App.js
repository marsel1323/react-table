import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="header">Header</header>
            <div className="table">
                <table>
                    <thead>
                    <tr>
                        <th>Header 1</th>
                        <th>Header 2</th>
                        <th>Header 3</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>body 1</td>
                        <td>body 2</td>
                        <td>body 3</td>
                    </tr>
                    <tr>
                        <td>body 1</td>
                        <td>body 2</td>
                        <td>body 3</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <div className="details">
                Details
            </div>
        </div>
    );
}

export default App;
