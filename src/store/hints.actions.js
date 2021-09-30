export function disableHints() {
    return dispatch => {
        dispatch({
            type: 'DISABLE_HINTS'
        })
    }
}

export function enableHints() {
    return dispatch => {
        dispatch({
            type: 'ENABLE_HINTS'
        })
    }
}