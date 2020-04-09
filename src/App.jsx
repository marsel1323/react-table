import React from 'react';
import './App.css';
import { fetchData } from './api/fillText';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fillTextData: null,
      filteredData: null,

      sortDirections: Object.freeze({
        DESC: 'DESC',
        ASC: 'ASC',
        DEFAULT: 'DEFAULT',
      }),

      headers: {
        id: {
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
    this.sortAndFilter = this.sortAndFilter.bind(this);
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

    this.setState({ headers: newHeaders });
  }

  handleClick(key) {
    this.updateHeaders(key);

    const { fillTextData, headers, sortDirections } = this.state;
    let sortDirection;
    if (!headers[key].sortDirection || headers[key].sortDirection === sortDirections.DEFAULT) {
      sortDirection = sortDirections.DESC;
    } else if (headers[key].sortDirection === sortDirections.DESC) {
      sortDirection = sortDirections.ASC;
    } else {
      sortDirection = sortDirections.DEFAULT;
    }

    let sortedData = [...fillTextData];
    if (sortDirection === sortDirections.DESC) {
      sortedData = sortedData.sort((a, b) => {
        if (a[key] > b[key]) return 1;
        if (a[key] < b[key]) return -1;
        return 0;
      });
    }

    if (sortDirection === sortDirections.ASC) {
      sortedData = sortedData.sort((a, b) => {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      });
    }
    this.setState({ filteredData: sortedData });
    this.setState({
      headers: {
        ...headers,
        [key]: {
          ...headers[key],
          sortDirection,
        },
      },
    });
  }

  sortAndFilter(key, value) {
    const { headers, fillTextData } = this.state;
    console.log({ headers });
    console.log({ key, value });
    const sortingValue = value.toString().toLowerCase();
    const filteredData = fillTextData.filter(
      (data) => data[key]
        .toString()
        .toLowerCase()
        .includes(sortingValue),
    );
    return filteredData;
  }

  handleChange(e) {
    const { name, value } = e.target;
    const { headers } = this.state;

    this.setState({
      headers: {
        ...headers,
        [name]: {
          ...headers[name],
          filterQuery: value,
        },
      },
    });

    const data = this.sortAndFilter(name, value);
    console.log({ data });
    this.setState({
      filteredData: data,
    });
  }

  selectRow(user) {
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
