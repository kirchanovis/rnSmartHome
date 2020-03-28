import { combineReducers } from 'redux';
import DashboardReducers from './dashboard'
import MenuReducers from './menu'

const allReducers = combineReducers({
    menu: MenuReducers,
    dashborad: DashboardReducers
});

export default allReducers;