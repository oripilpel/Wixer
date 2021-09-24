import update from 'immutability-helper';
import {
    handleMoveWithinParent,
    handleMoveToDifferentParent,
    handleMoveSidebarComponentIntoParent,
    handleMoveSidebarColumnIntoParent,
    handleMoveSidebarInnerSectionIntoParent
} from "../helpers";

const initialState = {
    selected: null,
    cmps: [],
    style: {}
}

export function layoutReducer(state = initialState, action) {
    switch (action.type) {
        case 'MOVE_SIDEBAR_COMPONENT_INTO_PARENT':
            return {
                ...state,
                cmps: handleMoveSidebarComponentIntoParent(
                    state.cmps,
                    action.splitDropZonePath,
                    action.newItem
                )
            }
        case 'MOVE_SIDEBAR_COLUMN_INTO_PARENT':
            return {
                ...state,
                cmps: handleMoveSidebarColumnIntoParent(
                    state.cmps,
                    action.splitDropZonePath
                )
            }
        case 'MOVE_SIDEBAR_INNER_SECTION_INTO_PARENT':
            return {
                ...state,
                cmps: handleMoveSidebarInnerSectionIntoParent(
                    state.cmps,
                    action.splitDropZonePath
                )
            }
        case 'MOVE_WITHIN_PARENT':
            return {
                ...state,
                cmps: handleMoveWithinParent(state.cmps, action.splitDropZonePath, action.splitItemPath)
            }
        case 'MOVE_TO_DIFFERENT_PARENT':
            return {
                ...state,
                cmps: handleMoveToDifferentParent(
                    state.cmps,
                    action.splitDropZonePath,
                    action.splitItemPath,
                    action.item
                )
            }
        case 'MOVE_SECTION':
            const { dragIndex, hoverIndex } = action;
            const dragSection = state.cmps[dragIndex];
            return update(state, {
                cmps: {
                    $splice: [
                        [dragIndex, 1],
                        [hoverIndex, 0, dragSection],
                    ],
                }
            });
        case 'MOVE_COLUMN':
            return { ...state }
        case 'UPDATE_COMPONENT':
            const { comp, field, value } = action;
            const newLayout = JSON.parse(JSON.stringify(state))
            const { path } = comp;
            switch (comp.path.length) {
                case 1:
                    newLayout.cmps[path[0]][field] = value;
                    break;
                case 2:
                    newLayout.cmps[path[0]].cmps[path[1]][field] = value;
                    break;
                case 3:
                    newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].component[field] = value;
                    break;
                default:
                    newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]][field] = value;
                    break;
            }
            return newLayout;
        case 'SET_SELECTED':
            return { ...state, selected: action.selected };
        default:
            return state;
    }
}