const initialState = {
    loading: false,
    data: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'LOADING_DASHBOARD': {
            const updateState = {
                ...state,
                loading: true
            }

            return updateState;
        }
        case 'SUCCESS_DASHBOARD': {
            const updateState = {
                ...state,
                loading: false
            }

            return updateState;
        }
        case 'GET_DASHBOARD': {
            const updateState = {
                ...state,
                data: action.payload
            }

            return updateState;
        }
        default:
            return state
    }
}