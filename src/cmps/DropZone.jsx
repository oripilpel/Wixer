import React from "react";
import { useDrop } from "react-dnd";
import { COMPONENT, SIDEBAR_ITEM, SECTION, COLUMN } from "../constants";

const ACCEPTS = [SIDEBAR_ITEM, COMPONENT, SECTION, COLUMN];

export function DropZone({ data, onDrop, horizontalDrag, maximumSize, accept = ACCEPTS }) {
  const [{ canDrop }, drop] = useDrop({
    accept,
    drop: (item) => {
      onDrop(data, item);
    },
    canDrop: (item) => {
      const dropZonePath = data.path;
      const splitDropZonePath = dropZonePath.split("-");
      const itemPath = item.path;

      // sidebar items can always be dropped anywhere
      if (!itemPath) {
        return true;
      }

      const splitItemPath = itemPath.split("-");
      // limit columns when dragging from one row to another row
      if (data.childrenCount >= 4 && (splitItemPath[splitItemPath.length - 2] !== splitDropZonePath[splitDropZonePath.length - 2])) {
        return false;
      }

      // Current item can't possible move to it's own location
      if (itemPath === dropZonePath) return false;

      // Current area
      if (splitItemPath.length === splitDropZonePath.length) {
        const pathToItem = splitItemPath.slice(0, -1).join("-");
        const currentItemIndex = Number(splitItemPath.slice(-1)[0]);

        const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");
        const currentDropZoneIndex = Number(splitDropZonePath.slice(-1)[0]);

        if (pathToItem === pathToDropZone) {
          const nextDropZoneIndex = currentItemIndex + 1;
          if (nextDropZoneIndex === currentDropZoneIndex) return false;
        }
      }

      return true;
    },
    collect: (monitor) => ({
      canDrop: monitor.canDrop(),
      isOver: monitor.isOver(),
    })
  });


  return (
    <div
      className={`drop-zone ${(canDrop) ? 'active' : ''} ${(maximumSize) ? 'maximum-size' : ''} ${(horizontalDrag) ? 'horizontal-drag' : ''}`}
      ref={drop}
    />
  );
};
