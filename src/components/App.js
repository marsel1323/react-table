import React from 'react';

import Table from './Table/Table.js';
import ActiveRow from './ActiveRow.js';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            activeUser: null,
        };

        this.updateData = this.updateData.bind(this);
    }

    //после рендера компонента происходит загрузка данных
    componentDidMount() {
        this.loadData();
    }

    //загрузка данных
    loadData() {
        fetch(this.props.route.api).then(response => {
            if (response.ok) {
                response.json().then(data => {
                    this.initialData = data;
                    this.setState({
                        data: this.initialData,
                    });
                });
            } else {
                response.json().then(error => {
                    alert("Failed to fetch users:" + error.message)
                });
            }
        }).catch(err => {
            alert("Error in fetching data from server:", err);
        });
    }

    //для обновления состояний
    updateData(config) {
        this.setState(config);
    }

    //рендер компонента который содержит два компонента: Поле с выбранным пользователем и Таблицу с пользователями
    render() {
        return (
            <main>
                <ActiveRow
                    activeUser={this.state.activeUser}/>

                <Table
                    initialData={this.initialData}
                    data={this.state.data}
                    update={this.updateData}/>
            </main>
        )
    }
}

export default {
    component: App
}