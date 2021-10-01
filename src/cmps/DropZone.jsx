import React from "react";
import classNames from "classnames";
import { useDrop } from "react-dnd";
import { COMPONENT, SIDEBAR_ITEM, SECTION, COLUMN } from "../constants";

const ACCEPTS = [SIDEBAR_ITEM, COMPONENT, SECTION, COLUMN];

export function DropZone({ data, onDrop, isLast, className, accept = ACCEPTS }) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: (item, monitor) => {
      onDrop(data, item);
    },
    canDrop: (item, monitor) => {
      const dropZonePath = data.path;
      const splitDropZonePath = dropZonePath.split("-");
      const itemPath = item.path;

      // sidebar items can always be dropped anywhere
      if (!itemPath) {
        if (data.childrenCount >= 4) {
          return false;
        }
        return true;
      }

      const splitItemPath = itemPath.split("-");

      // limit columns when dragging from one row to another row
      if (data.childrenCount >= 4 && splitDropZonePath.length !== 3) {
        return false;
      }
      // Invalid (Can't drop a parent element (row) into a child (column))
      // const parentDropInChild = splitItemPath.length < splitDropZonePath.length;

      // if (parentDropInChild) return false;

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
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  });

  const isActive = isOver || canDrop;

  return (
    <div
      style={{
        // position: (isActive) ? 'relative' : 'absolute',
        // top: (isActive) ? 0 : -30,
        // left: 0
      }}
      className={classNames(
        "drop-zone",
        { active: isActive, isLast },
        className
      )}
      ref={drop}

    />
  );
};
