export function moveSidebarComponentIntoParent(splitDropZonePath, newItem) {
    return dispatch => dispatch({
        type: 'MOVE_SIDEBAR_COMPONENT_INTO_PARENT',
        splitDropZonePath,
        newItem
    });
}

export function moveSidebarColumnIntoParent(splitDropZonePath) {
    return dispatch => dispatch({
        type: 'MOVE_SIDEBAR_COLUMN_INTO_PARENT',
        splitDropZonePath
    });
}

export function moveSidebarInnerSectionIntoParent(splitDropZonePath) {
    return dispatch => dispatch({
        type: 'MOVE_SIDEBAR_INNER_SECTION_INTO_PARENT',
        splitDropZonePath
    });
}

export function moveWithinParent(splitDropZonePath, splitItemPath) {
    return dispatch => dispatch({
        type: 'MOVE_WITHIN_PARENT',
        splitDropZonePath,
        splitItemPath
    });
}

export function moveToDifferentParent(splitDropZonePath, splitItemPath, item) {
    return dispatch => dispatch({
        type: 'MOVE_TO_DIFFERENT_PARENT',
        splitDropZonePath,
        splitItemPath,
        item
    })
}

export function updateComponent(comp, field, value) {
    return dispatch => dispatch({
        type: 'UPDATE_COMPONENT',
        comp,
        field,
        value
    });
}

export function setSelected(selected) {
    return dispatch => dispatch({
        type: 'SET_SELECTED',
        selected
    })
}