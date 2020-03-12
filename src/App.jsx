import React, { useEffect } from 'react';
import './App.css';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectFillTextDatas } from './redux/fillText/fillText.selectors';
import { fetchFillTextDataStart } from './redux/fillText/fillText.actions';

import Table from './components/table/table.component';

function App({ fillTextData, fetchFillTextData }) {
  useEffect(() => {
    fetchFillTextData();
  }, [fetchFillTextData]);
  return (
    <div className="App">
      <header className="header">Header</header>
      <Table data={fillTextData} />
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
