
const PAGE_THREE_UPDATE_SUCCESS = 'PAGE_THREE_UPDATE_SUCCESS'
const PAGE_THREE_UPDATE_REQUEST = 'PAGE_THREE_UPDATE_REQUEST'

export function updateRequest() {
    return {
        type: PAGE_THREE_UPDATE_REQUEST
    }
    
}

export function updateDataSuccess(field, value) {
    return {
        type: PAGE_THREE_UPDATE_SUCCESS,
        field: field,
        value: value
    }

}

export function updateData(field, value) {
    return (dispatch) => {
        dispatch(updateRequest())
        dispatch(updateDataSuccess(field, value))
    }    
}