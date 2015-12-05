import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import moment from 'moment'

@Radium
export default class DateHeader extends Component {
    render() {
        const { day, month, year, handleMonthForward, handleMonthBackward } = this.props;
        const date = moment([year, month, day]);

        return (
            <div style={STYLES.container}>
                <div style={STYLES.row}>
                    <div style={STYLES.dayName}>{date.format('dddd')}</div>
                </div>
                <div style={STYLES.select}>
                    <i onClick={handleMonthBackward} style={STYLES.arrow} className="fa fa-arrow-left" />
                    <div style={STYLES.month}>{date.format('MMMM').toUpperCase()}</div>
                    <i onClick={handleMonthForward} style={STYLES.arrow} className="fa fa-arrow-right" />
                </div>
                <div style={STYLES.row}>
                    <div style={STYLES.day}>{date.format('Do')}</div>
                </div>
                <div style={STYLES.row}>
                    <div style={STYLES.year}>{date.year()}</div>
                </div>
            </div>
        );
    }
}

const STYLES = {
    container: {
        fontSize: '1.5rem',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#2E7D32',
        padding: '2rem 1rem',
        fontWeight: 100
    },

    arrow: {
        opacity: '0.8'
    },

    day: {
        fontSize: '1.5rem'
    },

    dayName: {
        fontSize: '1.75rem',
        fontWeight: 100,
        fontStyle: 'italic',
        opacity: 0.9
    },

    month: {
        fontSize: '2.5rem',
        fontWeight: '200'
    },

    year: {
        fontSize: '1.5rem'
    },

    row: {
        display: 'flex',
        justifyContent: 'center',
    },

    select: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 1rem'
    }
}

DateHeader.propTypes = {
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
};
DateHeader.defaultProps = {};
