import { CHANGE_DAY, CHANGE_MONTH, CHANGE_YEAR } from '../constants/constants'
import Immutable from 'immutable'
import moment from 'moment'

//beginning state of app
let now = moment();
let initialState = Immutable.Map({
    day: now.date(),
    month: now.month(),
    year: now.year()
});

export default function app(state = initialState, action) {
    switch(action.type) {
        case CHANGE_DAY:
            return state.set('day', action.day);

        case CHANGE_MONTH:
            return state.set('month', action.month);

        case CHANGE_YEAR:
            return state.set('year', action.year);

        default:
            return state;
    }
}