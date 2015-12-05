import React, { Component, PropTypes } from 'react';
import Radium from 'radium'

export default class Week extends Component {
    render() {
        return (
            <div style={STYLES.week}>
                {this.props.children}
            </div>
        );
    }
}

const STYLES = {
    week: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '1rem'
    }
}

Week.propTypes = {};
Week.defaultProps = {};
