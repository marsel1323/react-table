import React from 'react';
import './App.css';
import { fetchData } from './api/fillText';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fillTextData: null,
    };
  }

  async componentDidMount() {
    const data = await this.fetchFillTextData();
    this.setState({
      fillTextData: data,
    });
  }

  fetchFillTextData() {
    return fetchData(32);
  }

  render() {
    const { fillTextData } = this.state;
    return (
      <div className="App">
        <header className="header">Header</header>

        {
          fillTextData
            ? (
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>***</th>
                      <th>id</th>
                      <th>firstName</th>
                      <th>lastName</th>
                      <th>email</th>
                      <th>phone</th>
                    </tr>
                  </thead>
                  <tbody>
                    {fillTextData.map((data) => (
                      <tr key={data.id}>
                        <td>*</td>
                        <td>{data.id}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.email}</td>
                        <td>{data.phone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
            : (
              <div>Loading</div>
            )
        }

        <br />
        <div className="details">
          Details
        </div>
      </div>
    );
  }
}

export default App;
