import React from 'react';
import './App.css';
import { fetchData } from './api/fillText';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fillTextData: null,
      filteredData: null,

      sortDirections: ['DESC', 'ASC'],

      headers: {
        id: {
          sorted: false,
          sortDirection: null,
          filterQuery: '',
        },
        firstName: {
          sortDirection: null,
          filterQuery: '',
        },
        lastName: {
          sortDirection: null,
          filterQuery: '',
        },
        email: {
          sortDirection: null,
          filterQuery: '',
        },
        phone: {
          sortDirection: null,
          filterQuery: '',
        },
      },

      selectedUser: null,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectRow = this.selectRow.bind(this);
  }

  async componentDidMount() {
    await this.fetchFillTextData();
  }

  async fetchFillTextData() {
    const data = await fetchData(32);
    this.setState({
      fillTextData: data,
      filteredData: data,
    });
  }

  updateHeaders(key) {
    const { headers } = this.state;

    const newHeaders = {
      ...headers,
      [key]: {
        ...headers[key],
        sortDirection: null,
      },
    };

    console.log(newHeaders);
    this.setState({ headers: newHeaders });
  }

  handleClick(key) {
    this.updateHeaders(key);

    const { fillTextData, headers } = this.state;

    const sortedData = fillTextData.sort((a, b) => {
      if (a[key] > b[key]) return headers[key].sortDirection ? -1 : 1;
      if (a[key] < b[key]) return headers[key].sortDirection ? 1 : -1;
      return 0;
    });
    this.setState({ fillTextData: sortedData });
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { fillTextData } = this.state;
    const filteredData = fillTextData.filter(
      (data) => data[name]
        .toString()
        .toLowerCase()
        .includes(value.toString().toLowerCase()),
    );
    this.setState({ filteredData });
  }

  selectRow(user) {
    console.log(user);
    this.setState({
      selectedUser: user,
    });
  }

  render() {
    const { selectedUser, headers, filteredData } = this.state;
    return (
      <div className="App">
        <header className="header">Header</header>

        {
          filteredData
            ? (
              <div className="table">
                <table>
                  <thead>
                    <tr>
                      <th>*</th>
                      {
                      Object
                        .keys(headers)
                        .map((key) => (
                          <th key={key}>
                            <input name={key} type="text" onChange={this.handleChange} />
                          </th>
                        ))
                    }
                    </tr>
                    <tr>
                      <th>***</th>
                      {
                      Object
                        .keys(headers)
                        .map((key) => (
                          <th
                            key={key}
                            onClick={() => this.handleClick(key)}
                            style={{ cursor: 'pointer' }}
                          >
                            <div
                              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}
                            >
                              {key}
                              <div>
                                <span
                                  style={{
                                    color: headers[key].sortDirection === 'ASC' ? 'red' : '',
                                  }}
                                >
                                  ▲
                                </span>
                                <span
                                  style={{
                                    color: headers[key].sortDirection === 'DESC' ? 'red' : '',
                                  }}
                                >
                                  ▼
                                </span>
                              </div>
                            </div>
                          </th>
                        ))
                    }
                    </tr>
                  </thead>
                  <tbody>
                    {filteredData.map((data) => (
                      <tr key={data.email} onClick={() => this.selectRow(data)}>
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
              <div>Loading...</div>
            )
        }
        {
          selectedUser ? (
            <div className="details">
              <p>
                Selected user:
                <b>
                  {selectedUser.firstName}
                  {' '}
                  {selectedUser.lastName}
                </b>
              </p>
              <p>Description:</p>
              <textarea cols="30" rows="10" defaultValue={selectedUser.description} />
              <p>
                Address:
                <b>{selectedUser.address.streetAddress}</b>
              </p>
              <p>
                City:
                <b>{selectedUser.address.city}</b>
              </p>
              <p>
                Province/State:
                <b>{selectedUser.address.state}</b>
              </p>
              <p>
                ZIP:
                <b>{selectedUser.address.zip}</b>
              </p>
            </div>
          ) : 'Please, select user'
        }
      </div>
    );
  }
}

export default App;
