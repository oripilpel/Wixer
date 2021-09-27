import { wapService } from "../services/wap.service";

export function saveWap(wap) {
    return async dispatch => {
        try {
            const savedWap = await wapService.save(wap)
            return dispatch({
                type: 'SET_WAP',
                cmps: savedWap.cmps,
                style: savedWap.style
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}

export function loadWap(wapId) {
    return async dispatch => {
        try {
            const wap = await wapService.getById(wapId)
            console.log(wap);
            return dispatch({
                type: 'SET_WAP',
                cmps: wap.cmps,
                style: wap.style
            })
        }
        catch (err) {
            console.log(err);
        }
    }
}

export function removeItem(splitItemPath) {
    return dispatch => dispatch({
        type: 'REMOVE_ITEM',
        splitItemPath
    })
}

export function  duplicateItem(splitItemPath) {
    return dispatch => dispatch({
        type: 'DUPLICATE_ITEM',
        splitItemPath
    })

}

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
    });
}

export function insert(index, newItem) {
    return dispatch => dispatch({
        type: 'INSERT_ITEM',
        index,
        newItem
    });
}

