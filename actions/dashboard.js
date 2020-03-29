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


export const getDashboard = (dispatch, id) => {
        dispatch(loading())
        
        getDashboardApi(id)
            .then((req) => {
                dispatch(success())
                dispatch(get(req.data))
            })
}