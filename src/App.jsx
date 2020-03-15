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
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
    const { name: key, value } = e.target;
    const { fillTextData } = this.state;
    const filteredData = fillTextData.filter(
      (data) => data[key]
        .toString()
        .toLowerCase()
        .includes(value),
    );
    this.setState({ filteredData });
  }

  render() {
    const { fillTextData, headers, filteredData } = this.state;
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
                                    color: headers[key].sortDirection==='ASC' ? 'red' : '',
                                  }}
                                >
                                  ▲
                                </span>
                                <span
                                  style={{
                                    color: headers[key].sortDirection==='DESC' ? 'red' : '',
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
                      <tr key={data.email}>
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

        <br />
        <div className="details">
          Details
        </div>
      </div>
    );
  }
}

export default App;
