import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'flux/actions/actions'
import DatePicker from 'components/DatePicker/DatePicker'

class App extends Component {
    render() {
        const { actions, ...other } = this.props;

        return (
            <div style={STYLES}>
                <DatePicker handleChangeDate={actions.changeDate} {...this.props} />
            </div>
        )
    }
}

App.propTypes = {};

function mapStateToProps(state) {
    return {
        day : state.get('day'),
        month : state.get('month'),
        year: state.get('year')
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators(actions, dispatch)
    };
};

const STYLES = {
    backgroundColor: '#1B5E20',
    padding: '3rem',
    display: 'flex',
    justifyContent: 'center'
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
