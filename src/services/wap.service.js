import { COLUMN, COMPONENT, INNERSECTION, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION, SIDEBAR_ITEM, SIDEBAR_SECTION } from '../constants';
import { storageService } from './async-storage.service';
import { utilService } from './util.service';

const STORAGE_KEY = 'wapDb';

export const wapService = {
    save,
    getById,
    selectComponent,
    // handleDrop
}

async function save(wap) {
    delete wap.selected;
    if (wap._id) return storageService.put(STORAGE_KEY, wap)
    else return await storageService.post(STORAGE_KEY, wap);
}

async function getById(wapId) {
    return await storageService.get(STORAGE_KEY, wapId)
}

function selectComponent(cmps, type, path) {
    switch (type) {
        case COMPONENT:
            if (path.length === 3) {
                return { ...cmps[path[0]].cmps[path[1]].cmps[path[2]], path: path }
            } else {
                return { ...cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]], path: path }
            }
        case COLUMN:
            if (path.length === 2) {
                return { ...cmps[path[0]].cmps[path[1]], path: path }
            } else {
                return { ...cmps[path[0]].cmps[path[1]].cmps[path[2]], path: path }
            }
        case INNERSECTION:
            return { ...cmps[path[0]].cmps[path[1]], path: path }
        default:
            return { ...cmps[path[0]], path: path }
    }

}


// function handleDrop(dropZone, item) {
//     const splitDropZonePath = dropZone.path.split("-");
//     const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");

//     const newItem = { id: item.id, type: item.type, component: item.component };
//     if (item.type === COLUMN || item.type === SECTION || item.type === INNERSECTION) {
//         newItem.cmps = item.cmps;
//     }

//     if (item.type === SIDEBAR_COLUMN) {
//         moveSidebarColumnIntoParent(splitDropZonePath);
//         return;
//     }

//     if (item.type === SIDEBAR_INNERSECTION) {
//         moveSidebarInnerSectionIntoParent(splitDropZonePath);
//         return;
//     }
//     if (item.type === SIDEBAR_SECTION) {
//         insert(splitDropZonePath[0], item.component)
//         return
//     }


//     // sidebar into
//     if (item.type === SIDEBAR_ITEM) {
//         // 1. Move sidebar item into page
//         const newComponent = {
//             id: utilService.makeId(),
//             ...item.component
//         };

//         const newItem = {
//             id: newComponent.id,
//             type: COMPONENT,
//             component: item.component
//         };
//         moveSidebarComponentIntoParent(splitDropZonePath, newItem);
//         return;
//     }

//     // move down here since sidebar items dont have path
//     const splitItemPath = item.path.split("-");
//     const pathToItem = splitItemPath.slice(0, -1).join("-");

//     // 2. Pure move (no create)
//     if (splitItemPath.length === splitDropZonePath.length) {
//         // 2.a. move within parent
//         if (pathToItem === pathToDropZone) {
//             moveWithinParent(splitDropZonePath, splitItemPath);
//             return;
//         }

//         // 2.b. OR move different parent
//         // TODO FIX columns. item includes children
//         moveToDifferentParent(splitDropZonePath, splitItemPath, newItem);
//         return;
//     }

//     // 3. Move + Create
//     moveToDifferentParent(splitDropZonePath, splitItemPath, newItem);
// }