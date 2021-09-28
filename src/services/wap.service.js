import { SECTION, COLUMN, COMPONENT, INNERSECTION } from "../constants";
import { utilService } from "./util.service";

// a little function to help us with reordering the result
export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed); // inserting task in new index

  return result;
};

export const remove = (arr, index) => [
  ...arr.slice(0, index),
  ...arr.slice(index + 1)
];

export const insert = (arr, index, newItem) => {
  return [
    ...arr.slice(0, index),
    newItem,
    ...arr.slice(index)
  ]
};

export const duplicate = (layout, path) => {
  debugger
  let item;
  let idx;
  let newLayout = [...layout];
  switch (path.length) {
    case 1:
      item = { ...newLayout[path[0]] };
      item.id = utilService.makeId();
      newLayout = insert(newLayout, path[0] + 1, item);
      break;
    case 2:
      item = { ...newLayout[path[0]].cmps[path[1]] };
      item.id = utilService.makeId();
      idx = path[1] - 1;
      idx = idx < 0 ? 0 : idx;
      newLayout[path[0]].cmps = insert(newLayout[path[0]].cmps, idx, item);
      break;
    case 3:
      item = { ...newLayout[path[0]].cmps[path[1]].cmps[path[2]] };
      item.id = utilService.makeId();
      idx = path[2] - 1;
      idx = idx < 0 ? 0 : idx;
      newLayout[path[0]].cmps[path[1]].cmps = insert(newLayout[path[0]].cmps[path[1]].cmps, idx, item);
      break;
    case 4:
      item = { ...newLayout[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]] };
      item.id = utilService.makeId();
      idx = path[3] - 1;
      idx = idx < 0 ? 0 : idx;
      newLayout[path[0]].cmps[path[1]].cmps[path[2]].cmps = insert(newLayout[path[0]].cmps[path[1]].cmps[path[2]].cmps, idx, item);
      break;
    default:
      item = { ...newLayout[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component.data.links[path[4]] };
      item.id = utilService.makeId();
      idx = path[4] - 1;
      idx = idx < 0 ? 0 : idx;
      newLayout[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component.data.links = insert(newLayout[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component.data.links, idx, item);
      break;
  }

  return newLayout;
}

export const reorderChildren = (children, splitDropZonePath, splitItemPath) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    const itemIndex = Number(splitItemPath[0]);
    return reorder(children, itemIndex, dropZoneIndex);
  }

  const updatedChildren = [...children];

  const curIndex = Number(splitDropZonePath.slice(0, 1));

  // Update the specific node's children
  let newSplitDropZoneChildrenPath = splitDropZonePath.slice(1);
  newSplitDropZoneChildrenPath[newSplitDropZoneChildrenPath.length - 1] =
    +splitDropZonePath[splitDropZonePath.length - 1] > +splitItemPath[splitItemPath.length - 1] ?
      newSplitDropZoneChildrenPath[newSplitDropZoneChildrenPath.length - 1] - 1 : newSplitDropZoneChildrenPath[newSplitDropZoneChildrenPath.length - 1]
  const splitDropZoneChildrenPath = newSplitDropZoneChildrenPath
  const splitItemChildrenPath = splitItemPath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    cmps: reorderChildren(
      nodeChildren.cmps,
      splitDropZoneChildrenPath,
      splitItemChildrenPath
    )
  };

  return updatedChildren;
};

export const removeChildFromChildren = (layout, splitItemPath) => {
  switch (splitItemPath.length) {
    case 1:
      layout.splice(splitItemPath[0], 1)
      return layout

    case 2:
      layout[splitItemPath[0]].cmps.splice(splitItemPath[1], 1)
      return layout

    case 3:
      layout[splitItemPath[0]].cmps[splitItemPath[1]].cmps.splice(splitItemPath[2], 1)
      return layout

    default:
      layout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps.splice(splitItemPath[3], 1)
      return layout
  }
};

export const addChildToChildren = (children, splitDropZonePath, item) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[0]);
    return insert(children, dropZoneIndex, item);
  }

  const updatedChildren = [...children];

  let curIndex = Number(splitDropZonePath[0]);
  curIndex = (curIndex >= children.length) ? --curIndex : curIndex

  // Update the specific node's children
  const splitItemChildrenPath = splitDropZonePath.slice(1);
  const nodeChildren = updatedChildren[curIndex];
  updatedChildren[curIndex] = {
    ...nodeChildren,
    cmps: addChildToChildren(
      nodeChildren.cmps,
      splitItemChildrenPath,
      item
    )
  };

  return updatedChildren;
};

export const handleMoveWithinParent = (
  layout,
  splitDropZonePath,
  splitItemPath
) => {
  return reorderChildren(layout, splitDropZonePath, splitItemPath);
};

export const handleMoveSidebarColumnIntoParent = (
  layout,
  splitDropZonePath,
) => {
  switch (splitDropZonePath.length) {
    case 1:
      const newLayoutStructure = {
        type: SECTION,
        id: utilService.makeId(),
        cmps: [_generateColumn()],
        style: {}
      };
      return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
    default:
      return addChildToChildren(layout, splitDropZonePath, _generateColumn());
  }
}

export const handleAddColumDataToRow = (layout) => {
  const layoutCopy = [...layout];
  return layoutCopy.filter(section => {
    return section.cmps.length
  })

};

export const handleMoveToDifferentParent = (
  layout,
  splitDropZonePath,
  splitItemPath,
  item
) => {
  let newLayoutStructure;
  const COLUMN_STRUCTURE = {
    type: COLUMN,
    id: utilService.makeId(),
    cmps: [item]
  };

  const SECTION_STRUCTURE = {
    id: utilService.makeId(),
    type: SECTION,
    style: {}
  };

  switch (splitDropZonePath.length) {
    case 1:
      // moving column outside into new row made on the fly
      if (item.type === COLUMN || item.type === INNERSECTION) {
        newLayoutStructure = {
          ...SECTION_STRUCTURE,
          cmps: [item]
        };
      }
      else {
        // moving component outside into new row made on the fly
        newLayoutStructure = {
          ...SECTION_STRUCTURE,
          cmps: [COLUMN_STRUCTURE]
        };
      }
      break;
    case 2:
      // moving component outside into a row which creates column
      if (item.type === COMPONENT) {
        newLayoutStructure = COLUMN_STRUCTURE;
      } else {
        // moving column into existing row
        newLayoutStructure = item;
      }

      break;


    case 3:
      const dropCmp = layout[splitDropZonePath[0]].cmps[splitDropZonePath[1]].cmps
      if (item.type === COLUMN) {
        newLayoutStructure = item;
      }
      //moving component to inner section

      else if (dropCmp.length && dropCmp[dropCmp.length - 1].type === COLUMN) {
        newLayoutStructure = COLUMN_STRUCTURE;
      }
      else {
        newLayoutStructure = item;
      }
      break;
    default:
      newLayoutStructure = item;

  }

  let updatedLayout = layout;
  updatedLayout = removeChildFromChildren(updatedLayout, splitItemPath);
  updatedLayout = handleAddColumDataToRow(updatedLayout);
  updatedLayout = addChildToChildren(
    updatedLayout,
    splitDropZonePath,
    newLayoutStructure
  );

  return updatedLayout;
};

export const handleMoveSidebarInnerSectionIntoParent = (
  layout,
  splitDropZonePath,
) => {
  switch (splitDropZonePath.length) {

    case 1:
      const newLayoutStructure = {
        id: utilService.makeId(),
        type: SECTION,
        cmps: [_generateInnerSection()],
        style: {}
      };
      return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
    default:
      return addChildToChildren(layout, splitDropZonePath, _generateInnerSection());
  }
}

export const handleMoveSidebarComponentIntoParent = (
  layout,
  splitDropZonePath,
  item
) => {
  let newLayoutStructure;
  switch (splitDropZonePath.length) {
    case 1: {
      newLayoutStructure = {
        type: SECTION,
        id: utilService.makeId(),
        cmps: [_generateColumn(item)],
        style: {}
      };
      break;
    }
    case 2: {
      newLayoutStructure = _generateColumn(item);
      break;
    }
    default: {
      newLayoutStructure = item;
    }
  }

  return addChildToChildren(layout, splitDropZonePath, newLayoutStructure);
};

export const handleRemoveItemFromLayout = (layout, splitItemPath) => {
  return removeChildFromChildren(layout, splitItemPath);
};

const _generateColumn = (item = null) => {
  return {
    type: COLUMN,
    id: utilService.makeId(),
    cmps: item ? [item] : [],
    style: {
      padding: 10,
      flexGrow: 1,
      flexDirection: 'column',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
}

const _generateInnerSection = (item = null) => {
  return {
    type: INNERSECTION,
    id: utilService.makeId(),
    cmps: [_generateColumn(), _generateColumn(), _generateColumn()],
    style: {
      padding: 10,
      flexGrow: 1,
      display: 'flex'
    }
  }
}
