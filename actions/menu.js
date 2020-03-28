import { getMenuApi } from './../api'

export const loadingMenu = () => ({
    type: 'LOADING_MENU'
});

export const successMenu = () => ({
    type: 'SUCCESS_MENU'
});

export const get = (payload) => ({
    type: 'GET_MENU',
    payload
});


export const getMenu = (dispatch) => {
        dispatch(loadingMenu())
        
        getMenuApi()
            .then((req) => {
                dispatch(successMenu())
                dispatch(get(req.data))
            })
}