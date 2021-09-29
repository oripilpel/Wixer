import update from 'immutability-helper';
import { COLUMN } from '../constants';
import {
    handleMoveWithinParent,
    handleMoveToDifferentParent,
    handleMoveSidebarComponentIntoParent,
    handleMoveSidebarColumnIntoParent,
    handleMoveSidebarInnerSectionIntoParent,
    removeChildFromChildren,
    insert,
    duplicate
} from "../services/wap.service";

const initialState = {
    _id: null,
    selected: null,
    cmps: [],
    style: {}
}

export function layoutReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_WAP':
            return {
                ...state,
                cmps: action.cmps,
                style: action.style
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                cmps: removeChildFromChildren(
                    [...state.cmps],
                    action.item
                ),
            }
        case 'DUPLICATE_ITEM':
            return {
                ...state,
                cmps: duplicate(
                    state.cmps,
                    action.item
                )
            }
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
            if (!comp || (!field && field !== 0) || !value) return state
            const newLayout = JSON.parse(JSON.stringify(state))
            const { path } = comp;
            switch (path.length) {
                case 1:
                    newLayout.cmps[path[0]][field] = value;
                    break;
                case 2:
                    newLayout.cmps[path[0]].cmps[path[1]][field] = value;
                    break;
                case 3:
                    if (comp.type === COLUMN) newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]][field] = value;
                    else if (comp.component && comp.component.type === 'nav') newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].component.data.links[field].txt = value
                    else newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].component[field] = value;
                    break;
                default:
                    if (comp.component.type === 'nav') { newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component.data.links[field].txt = value }
                    else newLayout.cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component[field] = value;
                    break;
            }
            return newLayout;
        case 'SET_SELECTED':
            return { ...state, selected: action.selected };
        case 'INSERT_ITEM':
            const cmps = insert(state.cmps, action.index, action.newItem);
            return { ...state, cmps: cmps }

        default:
            return state;
    }


}