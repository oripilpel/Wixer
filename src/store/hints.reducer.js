const initialState = {
    hints: true
}

export function hintsReducer(state = initialState, action) {
    switch (action.type) {
        case 'DISABLE_HINTS': {
            return { ...state, hints: false }
        }
        case 'ENABLE_HINTS': {
            return { ...state, hints: true }
        }
        default:
            return state
    }
}