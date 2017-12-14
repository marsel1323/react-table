import React from 'react';
import PropTypes from 'prop-types';

import TableRows from './Rows/TableRows.js';
import SortTableHeader from './Sorting/SortTableHeader.js';
import FilterBar from './Filter/FilterBar.js';
import TablePagination from './Paggination/TablePagination.js';

//Заголовки для столбцов таблицы
const HEADERS = ['id', 'firstName', 'lastName', 'email', 'phone'];

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            usersPerPage: 20,
        };

        this.changePage = this.changePage.bind(this);
    }

    changePage(page) {
        this.setState({
            currentPage: page
        });
    }

    render() {
        if (!this.props.data) {
            return (<div>
                <table>Loading...</table>
            </div>);
        }

        const indexOfLastUser = this.state.currentPage * this.state.usersPerPage;
        const indexOfFirstUser = indexOfLastUser - this.state.usersPerPage;
        const currentUsers = this.props.data.slice(indexOfFirstUser, indexOfLastUser);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.data.length / this.state.usersPerPage); i++) {
            pageNumbers.push(i);
        }

        return (
            <div>
                <table>
                    <thead>

                    <FilterBar
                        headers={HEADERS}
                        initialData={this.props.initialData}
                        update={this.props.update}/>

                    <SortTableHeader
                        headers={HEADERS}
                        data={this.props.data}
                        update={this.props.update}/>

                    </thead>

                    <tbody>

                    <TableRows
                        currentUsers={currentUsers}
                        update={this.props.update}/>

                    </tbody>
                </table>

                <TablePagination
                    pageNumbers={pageNumbers}
                    changePage={this.changePage}/>
            </div>
        )
    }
}

Table.propTypes = {
    initialData: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            adress: PropTypes.objectOf(PropTypes.string),
            description: PropTypes.string
        })
    ),
    data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            email: PropTypes.string,
            phone: PropTypes.string,
            adress: PropTypes.objectOf(PropTypes.string),
            description: PropTypes.string
        })
    ),
    update:PropTypes.func
};

export default Table;