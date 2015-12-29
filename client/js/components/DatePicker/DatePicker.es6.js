import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import moment from 'moment'

import Calendar from './Calendar.es6'
import DateHeader from './DateHeader.es6'

@Radium
export default class DatePicker extends Component {
    render() {
        const { day, month, year, actions } = this.props;
        return (
            <div style={STYLES}>
                <DateHeader
                    handleMonthBackward={() => actions.changeDate(month - 1, day)}
                    handleMonthForward={() => actions.changeDate(month + 1, day)}
                    {...this.props}
                />
                <Calendar
                    handleDayClick={(newMonth, newDay) => actions.changeDate(newMonth, newDay)}
                    {...this.props}
                />
            </div>
        );
    }
}

const STYLES = {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Roboto', 'sans-serif'",
    fontSize: '16px',
    width: '22rem'
}

const now = moment();

DatePicker.propTypes = {
    day: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number
};

DatePicker.defaultProps = {
    day: now.date(),
    month: now.month(),
    year: now.year()
};
