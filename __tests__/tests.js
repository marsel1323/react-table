import 'raf/polyfill';
import React from 'react';
import {shallow, mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ActiveRow from '../src/components/ActiveRow.js';
import TableRow from '../src/components/Table/Rows/TableRow.js';
import Label from '../src/components/Table/Rows/Label.js';

configure({adapter: new Adapter()});

const ACTIVE_USER = {
    "id": 699,
    "firstName": "Lawrence",
    "lastName": "Basol",
    "email": "TBolton@sit.ly",
    "phone": "(453)029-0978",
    "adress": {
        "streetAddress": "9903 Odio Rd",
        "city": "Pickerington",
        "state": "AR",
        "zip": "21316"
    },
    "description": "dui velit pharetra ante consequat tempor nec massa id aenean risus aliquam lectus etiam sollicitudin facilisis risus at vestibulum non suspendisse tortor adipiscing ac turpis et porttitor pharetra egestas aenean sed lorem"
};

describe(<ActiveRow/>, () => {
    it('ActiveRow render the active user', () => {
        const activeRow = shallow(<ActiveRow activeUser={ACTIVE_USER}/>)

        expect(activeRow.text()).toEqual(
            'Выбран пользователь: Lawrence Basol' +
            'Описание:' +
            'Адрес проживания: 9903 Odio Rd' +
            'Город: Pickerington' +
            'Провинция/штат: AR' +
            'Индекс: 21316'
        );
    });
})


const USERS = [{
    "id": 699,
    "firstName": "Lawrence",
    "lastName": "Basol",
    "email": "TBolton@sit.ly",
    "phone": "(453)029-0978",
    "adress": {
        "streetAddress": "9903 Odio Rd",
        "city": "Pickerington",
        "state": "AR",
        "zip": "21316"
    },
    "description": "dui velit pharetra ante consequat tempor nec massa id aenean risus aliquam lectus etiam sollicitudin facilisis risus at vestibulum non suspendisse tortor adipiscing ac turpis et porttitor pharetra egestas aenean sed lorem"
},
    {
        "id": 548,
        "firstName": "Adrienne",
        "lastName": "Jalowiecki",
        "email": "jCooper@aenean.com",
        "phone": "(581)364-9401",
        "adress": {
            "streetAddress": "5946 Elit Ln",
            "city": "Winter Garden",
            "state": "OH",
            "zip": "93622"
        },
        "description": "ante magna orci lacus lacus facilisis mattis malesuada facilisis hendrerit sit libero vitae non molestie elementum pharetra sed ante ipsum pulvinar suspendisse aliquam neque tincidunt risus malesuada neque magna vestibulum mi placerat"
    },
];

const FAVOURITE_USER = {
    "id": 699,
    "firstName": "Lawrence",
    "lastName": "Basol",
    "email": "TBolton@sit.ly",
    "phone": "(453)029-0978",
    "favourite": true,
    "adress": {
        "streetAddress": "9903 Odio Rd",
        "city": "Pickerington",
        "state": "AR",
        "zip": "21316"
    },
    "description": "dui velit pharetra ante consequat tempor nec massa id aenean risus aliquam lectus etiam sollicitudin facilisis risus at vestibulum non suspendisse tortor adipiscing ac turpis et porttitor pharetra egestas aenean sed lorem"
};

describe(<Label/>, () => {
    it('Label is-selected', () => {
        const onClickSpy = jest.fn();
        const label = shallow(<Label onFavourite={onClickSpy} favourite={true}/>)
        expect(label.find('label').hasClass('button-star is-selected')).toBe(true);
        label.find('label').simulate('click')
        console.log(label.debug());
    })
})



