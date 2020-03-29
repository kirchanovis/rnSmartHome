import { combineReducers } from 'redux';
import DashboardReducers from './dashboard'
import MenuReducers from './menu'

const allReducers = combineReducers({
    menu: MenuReducers,
    dashboard: DashboardReducers
});

export default allReducers;