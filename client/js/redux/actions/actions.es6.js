import { CHANGE_DAY, CHANGE_MONTH, CHANGE_YEAR } from '../constants/constants.es6'
import { batchActions } from 'redux-batched-actions';
import moment from 'moment'

export function changeDay(day) {
    return {
        type: CHANGE_DAY,
        day
    }
}

export function changeMonth(month) {
    return {
        type: CHANGE_MONTH,
        month
    }
}

export function changeYear(year) {
    return {
        type: CHANGE_YEAR,
        year
    }
}

export function changeDate(year, month, day) {
    return (dispatch, getState) => {
        let dateActions = [];

        dateActions.push(changeYear(year));
        dateActions.push(changeMonth(month));
        dateActions.push(changeDay(day));
        //let dateActions = [];
        //const date = moment([year, month]);
        //const lastDay = date.endOf('month').date();
        //
        //if (month > 11) {
        //    dateActions.push(changeYear(getState().get('year') + 1))
        //    dateActions.push(changeMonth(0));
        //} else if (month < 0) {
        //    dateActions.push(changeYear(getState().get('year') - 1))
        //    dateActions.push(changeMonth(11));
        //} else {
        //    dateActions.push(changeMonth(month));
        //    dateActions.push(changeDay(day));
        //}
        //
        //if(getState().get('day') > lastDay) {
        //    dateActions.push(changeDay(lastDay));
        //}

        dispatch(batchActions(dateActions));
    }
}