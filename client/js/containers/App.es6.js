import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'flux/actions/actions'
import DatePicker from 'components/DatePicker/DatePicker'

class App extends Component {
    render() {
        const { dispatch, ...other } = this.props;

        const boundActions = bindActionCreators(actions, dispatch);

        return (
            <div style={STYLES}>
                <DatePicker />
            </div>
        )
    }
}

App.propTypes = {};

function mapStateToProps(state) {
    return {
        blah : state.get('blah')
    };
}

const STYLES = {};

export default connect(mapStateToProps)(App);
