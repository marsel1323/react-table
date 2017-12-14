import React from 'react';
import PropTypes from 'prop-types';

class FilterInput extends React.Component {
    constructor() {
        super();
        this.state = {
            inputString: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleChange(e) {
        const searchQuery = e.target.value.toLowerCase();

        this.props.filter(searchQuery, this.props.title);

        this.setState({
            inputString: searchQuery
        });
    }

    clearInput() {
        this.setState({
            inputString: ''
        });

        this.props.update({data: this.props.initialData})
    }

    handleFilter() {
        this.props.filter(this.state.inputString, this.props.title);
    }

    render() {
        return (
            <th>
                <input value={this.state.inputString}
                       type="text"
                       placeholder={`Искать по ${this.props.title}`}
                       onChange={this.handleChange}/>
                <button onClick={this.clearInput}>Clear</button>
                <button onClick={this.handleFilter}>Filter</button>
            </th>
        )
    }
}

FilterInput.propTypes = {
    title: PropTypes.string.isRequired,
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
    update: PropTypes.func,
    filter: PropTypes.func.isRequired
}

export default FilterInput;