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

export const duplicate = (layout, item) => {
  const { splitItemPath, type } = item
  let idx;
  let newLayout = [...layout];
  switch (type) {
    case SECTION:
      item = { ...newLayout[splitItemPath[0]] };
      item.id = utilService.makeId();
      newLayout = insert(newLayout, splitItemPath[0] + 1, item);
      break;
    case INNERSECTION:
      item = { ...newLayout[splitItemPath[0]].cmps[splitItemPath[1]] };
      item.id = utilService.makeId();
      idx = splitItemPath[1] - 1;
      idx = idx < 0 ? 0 : idx;
      newLayout[splitItemPath[0]].cmps = insert(newLayout[splitItemPath[0]].cmps, idx, item);
      break;
    case COLUMN:
      if (splitItemPath.length === 3) {
        item = { ...newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]] };
        item.id = utilService.makeId();
        idx = splitItemPath[2] - 1;
        idx = idx < 0 ? 0 : idx;
        newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps = insert(newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps, idx, item);
      }
      else {
        item = { ...newLayout[splitItemPath[0]].cmps[splitItemPath[1]] };
        item.id = utilService.makeId();
        idx = splitItemPath[1] - 1;
        idx = idx < 0 ? 0 : idx;
        newLayout[splitItemPath[0]].cmps = insert(newLayout[splitItemPath[0]].cmps, idx, item);
      }
      break;
    default:
      switch (splitItemPath.length) {
        case 3:
          item = { ...newLayout[splitItemPath[0]].cmps[splitItemPath[1]] };
          item.id = utilService.makeId();
          idx = splitItemPath[1] - 1;
          idx = idx < 0 ? 0 : idx;
          newLayout[splitItemPath[0]].cmps = insert(newLayout[splitItemPath[0]].cmps, idx, item);
          break;
        case 4:
          item = { ...newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]] };
          if (item.cmps) {
            item = { ...item.cmps[splitItemPath[3]] }
            item.id = utilService.makeId();
            idx = splitItemPath[3] - 1;
            idx = idx < 0 ? 0 : idx;
            newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps = insert(newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps, idx, item);
          }
          else {
            item = { ...item.component.data.links[splitItemPath[3]] }
            item.id = utilService.makeId();
            idx = splitItemPath[3] - 1;
            idx = idx < 0 ? 0 : idx;
            newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].component.data.links = insert(newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].component.data.links, idx, item);
          }
          break;
        default:
          item = { ...newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps[splitItemPath[3]].component.data.links[splitItemPath[4]] };
          item.id = utilService.makeId();
          idx = splitItemPath[4] - 1;
          idx = idx < 0 ? 0 : idx;
          newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps[splitItemPath[3]].component.data.links = insert(newLayout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps[splitItemPath[3]].component.data.links, idx, item);
          break;
      }
      break;
  }

  return newLayout;
}

export const reorderChildren = (children, splitDropZonePath, splitItemPath, substract) => {
  if (splitDropZonePath.length === 1) {
    const dropZoneIndex = Number(splitDropZonePath[splitDropZonePath.length - 1]);
    const itemIndex = Number(splitItemPath[splitItemPath.length - 1]);
    return reorder(children, itemIndex, dropZoneIndex);
  }

  const updatedChildren = [...children];

  const curIndex = Number(splitDropZonePath.slice(0, 1));

  // Update the specific node's children
  let newSplitDropZoneChildrenPath = splitDropZonePath.slice(1);
  newSplitDropZoneChildrenPath[newSplitDropZoneChildrenPath.length - 1] =
    (+splitDropZonePath[splitDropZonePath.length - 1] > +splitItemPath[splitItemPath.length - 1] && newSplitDropZoneChildrenPath.length === 2) ?
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

export const removeChildFromChildren = (layout, item) => {
  const { type, splitItemPath } = item
  switch (type) {
    case SECTION:
      layout.splice(splitItemPath[0], 1)
      return layout
    case INNERSECTION:
      layout[splitItemPath[0]].cmps.splice(splitItemPath[1], 1)
      return layout
    case COLUMN:
      if (splitItemPath.length === 3) layout[splitItemPath[0]].cmps[splitItemPath[1]].cmps.splice(splitItemPath[2], 1)
      else layout[splitItemPath[0]].cmps.splice(splitItemPath[1], 1)
      return layout
    default:
      let component;
      switch (splitItemPath.length) {
        case 3:
          component = layout[splitItemPath[0]].cmps[splitItemPath[1]]
          break;
        case 4:
          component = layout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]]
          break;
        default:
          component = layout[splitItemPath[0]].cmps[splitItemPath[1]].cmps[splitItemPath[2]].cmps[splitItemPath[3]]
          break;
      }
      if (component.cmps) component.cmps.splice(splitItemPath[splitItemPath.length - 1], 1)
      else component.component.data.links.splice(splitItemPath[splitItemPath.length - 1], 1)
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
  updatedLayout = removeChildFromChildren(updatedLayout, { type: item.type, splitItemPath });
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
