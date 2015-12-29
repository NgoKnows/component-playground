import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

import moment from 'moment'

@Radium
export default class DateHeader extends Component {
    render() {
        const { day, month, year, handleMonthForward, handleMonthBackward } = this.props;
        const date = moment([year, month, day]);

        const dayName = date.format('dddd');
        const monthName = date.format('MMMM');
        const dayNumber = date.format('Do');
        const yearNumber = date.year();

        return (
            <div style={STYLES.container}>
                <div style={STYLES.row}>
                    <div style={STYLES.dayName} key={dayName}>
                        {dayName}
                    </div>
                </div>
                <div style={STYLES.select}>
                    <div style={STYLES.arrowWrapper} onClick={handleMonthBackward}>
                        <object style={[STYLES.leftArrow, STYLES.arrow]} data="imgs/arrow.svg" type="image/svg+xml"/>
                        <div style={STYLES.cover}></div>
                    </div>
                    <div style={STYLES.month} key={monthName}>
                        {monthName.toUpperCase()}
                    </div>
                    <div style={STYLES.arrowWrapper} onClick={handleMonthForward}>
                        <object style={STYLES.arrow} data="imgs/arrow.svg" type="image/svg+xml" />
                        <div style={STYLES.cover}></div>
                    </div>
                </div>
                <div style={STYLES.row}>
                    <div style={STYLES.day} key={dayNumber}>
                        {dayNumber}
                    </div>
                </div>
                <div style={STYLES.row}>
                    <div style={STYLES.year} key={yearNumber}>
                        {yearNumber}
                    </div>
                </div>
            </div>
        );
    }
}

const STYLES = {
    arrowWrapper: {
        position: 'relative'
    },

    cover: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        top: 0,
        left: 0
    },
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

    leftArrow: {
        transform: 'scaleX(-1)'
    },

    arrow: {
        opacity: '0.7',
        height: '1.75rem',
        width: '1.75rem'
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
        padding: '0 0.75rem'
    }
}

DateHeader.propTypes = {
    day: PropTypes.number.isRequired,
    month: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired
};

DateHeader.defaultProps = {};
