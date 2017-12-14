import React from 'react';
import PropTypes from 'prop-types';

class SortTableHeader extends React.Component {
    constructor() {
        super();

        this.state = {
            sortBy: null,
            sortDirection: false,
        };

        this.sorted = {id: true, firstName: true, lastName: true, email: true, phone: true};

        this.sort = this.sort.bind(this);
    }

    sort(type) {
        // получаем порядок сортировки
        const isSorted = this.sorted[type];
        // устанавливаем направление
        let direction = isSorted ? 1 : -1;
        var sortDirection = this.state.sortBy === type && !this.state.sortDirection;

        const sorted = this.props.data.sort((a, b) => {
            // чтобы сортировка всегда была одинаковой учтём все условия
            // функция может вернуть 0, 1 или -1, в зависимости от возвращаемого
            // значения метод массивов sort сделает свой выбор
            if (a[type] === b[type]) {
                return 0;
            }
            // если сортируемый столбец не id то переводим значения в нижний регистр
            // для точной сортировки без выпадений
            // если сортируемый столбец id то числа переводить в нижний регистр нельзя
            if (type !== 'id') {
                return a[type].toLowerCase() > b[type].toLowerCase() ? direction : direction * -1;
            } else {
                return a[type] > b[type] ? direction : direction * -1;
            }
        });

        // меняем порядок сортировки
        this.sorted[type] = !isSorted;
        // обновляем состояние
        this.props.update({
            data: sorted
        });
        this.setState({
            sortBy: type,
            sortDirection: sortDirection,
        });
    }

    render() {
        return (
            <tr className="sorting-header">
                <th></th>

                {this.props.headers.map((title, index) => {
                    let newTitle = title;
                    if (this.state.sortBy === title) {
                        newTitle += this.state.sortDirection ? ' \u2191' : ' \u2193'
                    }

                    return (
                        <th key={index}>
                            <label onClick={() => this.sort(`${title}`)}>{newTitle}</label>
                        </th>
                    )
                })}
            </tr>
        )
    }

}

SortTableHeader.propTypes = {
    headers: PropTypes.array,
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
    update: PropTypes.func
}

export default SortTableHeader;