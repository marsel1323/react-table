import React, { useEffect } from 'react';
import './App.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectFillTextDatas } from './redux/fillText/fillText.selectors';
import { fetchFillTextDataStart } from './redux/fillText/fillText.actions';

function App({ fillTextData, fetchFillTextData }) {
  useEffect(() => {
    fetchFillTextData();
  }, [fetchFillTextData]);
  return (
    <div className="App">
      <header className="header">Header</header>
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
      <br />
      <div className="details">
        Details
      </div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  fillTextData: selectFillTextDatas,
});


const mapDispatchToProps = (dispatch) => ({
  fetchFillTextData: () => dispatch(fetchFillTextDataStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
