import { getDashboardApi } from './../api'

export const loading = () => ({
    type: 'LOADING_DASHBOARD'
});

export const success = () => ({
    type: 'SUCCESS_DASHBOARD'
});

export const get = (payload) => ({
    type: 'GET_DASHBOARD',
    payload
});


export const getDashboard = (dispatch) => {
        dispatch(loading())
        
        getDashboardApi()
            .then((req) => {
                dispatch(success())
                dispatch(get(req.data))
            })
}