import React, { useCallback, useEffect } from "react";
import { connect } from 'react-redux';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { SIDEBAR_ITEMS, SIDEBAR_ITEM, COMPONENT, COLUMN, SECTION, SIDEBAR_ITEM_COLUMN, SIDEBAR_ITEM_INNERSECTION, INNERSECTION } from "../constants";
import { DropZone } from "../cmps/DropZone";
import shortid from "shortid";
import { Section } from "../cmps/Section";
import { SideBar } from "../cmps/SideBar";
import {
    loadWap,
    moveSidebarComponentIntoParent,
    moveSidebarColumnIntoParent,
    moveSidebarInnerSectionIntoParent,
    moveWithinParent,
    moveToDifferentParent,
    updateComponent,
    setSelected
} from '../store/layout.actions'

function _Editor({ match, cmps, selected, moveSidebarComponentIntoParent, moveSidebarColumnIntoParent, moveSidebarInnerSectionIntoParent, moveWithinParent, moveToDifferentParent, updateComponent, setSelected }) {
    useEffect(() => {
        // const id = match.params.wapId;
        // if (id) loadWap(id);
    },[]);
    const onUpdateComponent = (comp, field, value) => {
        updateComponent(comp, field, value);
    }
    const onSelect = (type, path) => {
        switch (type) {
            case COMPONENT:
                if (path.length === 3) {
                    setSelected({ ...cmps[+path[0]].cmps[+path[1]].cmps[+path[2]], path: path });
                } else {
                    setSelected({ ...cmps[+path[0]].cmps[+path[1]].cmps[+path[2]].cmps[+path[3]], path: path });
                }
                break;
            case COLUMN:
                if (path.length === 2) {
                    setSelected({ ...cmps[+path[0]].cmps[+path[1]], path: path });
                } else {
                    setSelected({ ...cmps[+path[0]].cmps[+path[1]].cmps[+path[2]], path: path });
                }
                break;
            case INNERSECTION:
                setSelected({ ...cmps[+path[0]].cmps[+path[1]], path: path });
                break;
            default:
                setSelected({ ...cmps[+path[0]], path: path })
        }
    }
    const handleDrop = useCallback(
        (dropZone, item) => {
            const splitDropZonePath = dropZone.path.split("-");
            const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");

            const newItem = { id: item.id, type: item.type, component: item.component };
            if (item.type === COLUMN || item.type === SECTION) {
                newItem.cmps = item.cmps;
            }

            if (item.type === SIDEBAR_ITEM_COLUMN) {
                moveSidebarColumnIntoParent(splitDropZonePath);
                return;
            }

            if (item.type === SIDEBAR_ITEM_INNERSECTION) {
                moveSidebarInnerSectionIntoParent(splitDropZonePath);
                return;
            }


            // sidebar into
            if (item.type === SIDEBAR_ITEM) {
                // 1. Move sidebar item into page
                const newComponent = {
                    id: shortid.generate(),
                    ...item.component
                };


                if (item.component.type === "innersection") {

                }

                const newItem = {
                    id: newComponent.id,
                    type: COMPONENT,
                    component: item.component
                };
                moveSidebarComponentIntoParent(splitDropZonePath, newItem);
                return;
            }

            // move down here since sidebar items dont have path
            const splitItemPath = item.path.split("-");
            const pathToItem = splitItemPath.slice(0, -1).join("-");

            // 2. Pure move (no create)
            if (splitItemPath.length === splitDropZonePath.length) {
                // 2.a. move within parent
                if (pathToItem === pathToDropZone) {
                    moveWithinParent(splitDropZonePath, splitItemPath);
                    return;
                }

                // 2.b. OR move different parent
                // TODO FIX columns. item includes children
                moveToDifferentParent(splitDropZonePath, splitItemPath, newItem);
                return;
            }

            // 3. Move + Create
            moveToDifferentParent(splitDropZonePath, splitItemPath, newItem);
        }
    );
    const renderSection = (section, currentPath) => {
        return (
            <Section
                key={section.id}
                data={section}
                handleDrop={handleDrop}
                cmps={cmps[currentPath]}
                path={currentPath}
                // moveSection={moveSection}
                // moveColumn={moveColumn}
                updateComponent={onUpdateComponent}
                onSelect={onSelect}
                selected={selected}
            />
        );
    };
    const getSelected = (s) => {
        if (!s) return;
        const path = s.path

        switch (path.length) {
            case 1:
                return { ...cmps[path[0]], path }
            case 2:
                return { ...cmps[path[0]].cmps[path[1]], path }
            case 3:
                return { ...cmps[path[0]].cmps[path[1]].cmps[path[2]], path }
            default:
                return { ...cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]], path }
        }

    }
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="editor">
                <SideBar sideBarItems={SIDEBAR_ITEMS} selected={getSelected(selected)} update={onUpdateComponent} />
                <div className="page-container">
                    <div className="page">
                        {/* {JSON.stringify(layout.cmps)} */}
                        {cmps.map((section, index) => {
                            const currentPath = `${index}`;

                            return (
                                <React.Fragment key={section.id}>
                                    <DropZone
                                        data={{
                                            path: currentPath,
                                            childrenCount: cmps.length
                                        }}
                                        onDrop={handleDrop}
                                        path={currentPath}
                                        accept={[SIDEBAR_ITEM, COMPONENT, SECTION, COLUMN, SIDEBAR_ITEM_COLUMN, SIDEBAR_ITEM_INNERSECTION]}
                                    />
                                    {renderSection(section, currentPath)}
                                </React.Fragment>
                            );
                        })}
                        <DropZone
                            data={{
                                path: `${cmps.length}`,
                                childrenCount: cmps.length

                            }}
                            accept={[SIDEBAR_ITEM, COMPONENT, SECTION, COLUMN, SIDEBAR_ITEM_COLUMN, SIDEBAR_ITEM_INNERSECTION]}
                            onDrop={handleDrop}
                            isLast
                        />
                    </div>
                </div>
            </div>
        </DndProvider>
    )
}

function mapStateToProps(state) {
    return {
        cmps: state.layoutModule.cmps,
        selected: state.layoutModule.selected,
        style: state.layoutModule.style
    }
}
const mapDispatchToProps = {
    // loadWap,
    moveSidebarComponentIntoParent,
    moveSidebarColumnIntoParent,
    moveSidebarInnerSectionIntoParent,
    moveWithinParent,
    moveToDifferentParent,
    updateComponent,
    setSelected
}

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor);