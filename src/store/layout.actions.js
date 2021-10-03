import { socketService } from "../services/socket.service";
import { wapService } from "../services/waps.service";

export function saveWap(wap) {
    return async dispatch => {
        try {
            const savedWap = await wapService.save(wap)
            return dispatch({
                type: 'SET_WAP',
                _id: savedWap._id,
                cmps: savedWap.cmps,
                style: savedWap.style
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}

export function loadWap(wapId) {
    return async dispatch => {
        try {
            const wap = await wapService.getById(wapId);
            return dispatch({
                type: 'SET_WAP',
                _id: wap._id,
                cmps: wap.cmps,
                style: wap.style,
                chat: wap.chat || {
                    isEnabled: false,
                    openingText: "Hey ☺ \n I'm the digital representative, how can I help you?",
                    answerText: "Thank you for contacting us, we will reach back to you in a short time."
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    }
}

export function setWap(_id, cmps, style = {}) {
    return dispatch => dispatch({
        type: 'SET_WAP',
        _id,
        cmps,
        style
    });
}

export function removeItem(splitItemPath, type, isEmit = true) {
    const action = {
        type: 'REMOVE_ITEM',
        item: { splitItemPath, type }
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function duplicateItem(splitItemPath, type, isEmit = true) {
    const action = {
        type: 'DUPLICATE_ITEM',
        item: { splitItemPath, type }
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);

}

export function moveSidebarComponentIntoParent(splitDropZonePath, newItem, isEmit = true) {
    const action = {
        type: 'MOVE_SIDEBAR_COMPONENT_INTO_PARENT',
        splitDropZonePath,
        newItem
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function moveSidebarColumnIntoParent(splitDropZonePath, isEmit = true) {
    const action = {
        type: 'MOVE_SIDEBAR_COLUMN_INTO_PARENT',
        splitDropZonePath
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function moveSidebarInnerSectionIntoParent(splitDropZonePath, isEmit = true) {
    const action = {
        type: 'MOVE_SIDEBAR_INNER_SECTION_INTO_PARENT',
        splitDropZonePath
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function moveWithinParent(splitDropZonePath, splitItemPath, isEmit = true) {
    const action = {
        type: 'MOVE_WITHIN_PARENT',
        splitDropZonePath,
        splitItemPath
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function moveToDifferentParent(splitDropZonePath, splitItemPath, item, isEmit = true) {
    const action = {
        type: 'MOVE_TO_DIFFERENT_PARENT',
        splitDropZonePath,
        splitItemPath,
        item
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function updateComponent(comp, field, value, isEmit = true) {
    const action = {
        type: 'UPDATE_COMPONENT',
        comp,
        field,
        value
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function setSelected(selected) {
    return dispatch => dispatch({
        type: 'SET_SELECTED',
        selected
    });
}

export function insert(index, newItem, isEmit = true) {
    const action = {
        type: 'INSERT_ITEM',
        index,
        newItem
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function reorderColumns(cmps, itemIdx, hoverIdx, path) {
    return dispatch => dispatch({
        type: 'REORDER_COLUMNS',
        props: { cmps, path, itemIdx, hoverIdx }
    })
}

export function setChatIsEnabled(isChatEnabled, isEmit = true) {
    const action = {
        type: 'SET_CHAT_ENABLED',
        isChatEnabled
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function chatOpeningTextChange(openingText, isEmit = true) {
    const action = {
        type: 'CHAT_OPENING_TEXT_CHANGE',
        openingText
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}

export function chatAnswerTextChange(answerText, isEmit = true) {
    const action = {
        type: 'CHAT_ANSWER_TEXT_CHANGE',
        answerText
    }
    if (isEmit) socketService.emit('wap change', action);
    return dispatch => dispatch(action);
}