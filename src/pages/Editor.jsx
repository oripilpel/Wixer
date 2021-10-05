import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { DndProvider } from "react-dnd";
import { TouchBackend } from 'react-dnd-touch-backend'
import { HTML5Backend } from "react-dnd-html5-backend";
import { isMobile } from 'react-device-detect'
import { SIDEBAR_ITEM, COMPONENT, COLUMN, SECTION, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION, INNERSECTION, SIDEBAR_SECTION } from "../constants";
import { DropZone } from "../cmps/DropZone";
import { Section } from "../cmps/Section";
import { SideBar } from "../cmps/SideBar";

import {
    insert,
    saveWap,
    loadWap,
    setWap,
    moveSidebarComponentIntoParent,
    moveSidebarColumnIntoParent,
    moveSidebarInnerSectionIntoParent,
    moveWithinParent,
    moveToDifferentParent,
    updateComponent,
    setSelected,
    setChatIsEnabled,
    chatOpeningTextChange,
    chatAnswerTextChange,
    dispatchAction
} from '../store/layout.actions'
import { utilService } from "../services/util.service";
import { eventBusService } from "../services/event-bus-service";
import { socketService } from "../services/socket.service";
import { wapService } from "../services/waps.service";
import { ChatApp } from "../cmps/ChatApp";
import { templateService } from "../services/template.service";

function _Editor(
    { match,
        history,
        _id,
        cmps,
        style,
        selected,
        moveSidebarComponentIntoParent,
        moveSidebarColumnIntoParent,
        moveSidebarInnerSectionIntoParent,
        moveWithinParent,
        moveToDifferentParent,
        updateComponent,
        setSelected,
        insert,
        saveWap,
        loadWap,
        setWap,
        chat,
        setChatIsEnabled,
        chatOpeningTextChange,
        chatAnswerTextChange,
        dispatchAction
    }) {

    const [historyUndo, setHitoryUndo] = useState([]);

    const debugMode = false;

    useEffect(() => {
        //componentDidMount
        socketService.on('wap change', wapChangeFromSocket);
        const id = match.params.wapId;
        if (id) loadWap(id);
        else { saveWap({ cmps, style }) };
        return () => {
            // componentWillUnmount
            socketService.off('wap change');
        }
    }, []);

    useEffect(() => {
        if (_id) {
            console.log(templateService.gTemplatesIds());
            if (templateService.gTemplatesIds().includes(_id)) {
                saveWap({ cmps, style, chat });
                return;
            }
            history.push(`/editor/${_id}`);
            socketService.emit('wap topic', _id);
        }
    }, [_id])

    useEffect(() => {
        wapService.save({ _id, cmps, style, chat });
    }, [chat])

    useEffect(() => {
        setHitoryUndo([...historyUndo, JSON.parse(JSON.stringify(cmps))]);
        wapService.save({ _id, cmps, style });
    }, [cmps])

    const wapChangeFromSocket = (action) => {
        switch (action.type) {
            case 'UNDO':
                onUndo(false, action.lastStep);
                break;
            default:
                dispatchAction(action);
        }
    }

    const onUpdateComponent = (comp, field, value) => {
        updateComponent(comp, field, value)
    }

    const onUndo = (isEmit = true, socketLastStep = null) => {
        if (historyUndo.length === 1) return;
        const lastStep = socketLastStep || historyUndo[historyUndo.length - 2];
        setWap(_id, [...lastStep], style, chat);
        if (isEmit) {
            socketService.emit('wap change', { type: 'UNDO', lastStep });
            setHitoryUndo(historyUndo.slice(0, -2));
        }
    }

    const handleDrop =
        (dropZone, item) => {
            const splitDropZonePath = dropZone.path.split("-");
            const pathToDropZone = splitDropZonePath.slice(0, -1).join("-");

            const newItem = { id: item.id, type: item.type, component: item.component, style: item.style };
            if (item.type === COLUMN || item.type === SECTION || item.type === INNERSECTION) {
                newItem.cmps = item.cmps;
            }

            if (item.type === SIDEBAR_COLUMN) {
                moveSidebarColumnIntoParent(splitDropZonePath);
                return;
            }

            if (item.type === SIDEBAR_INNERSECTION) {
                moveSidebarInnerSectionIntoParent(splitDropZonePath);
                return;
            }
            if (item.type === SIDEBAR_SECTION) {
                const newSection = JSON.parse(JSON.stringify(item.component));
                newSection.id = utilService.makeId();
                insert(splitDropZonePath[0], newSection);
                return
            }


            // sidebar into
            if (item.type === SIDEBAR_ITEM) {
                // 1. Move sidebar item into page
                const newComponent = {
                    id: utilService.makeId(),
                    ...item.component
                };

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

    const onSelect = (type, path) => {
        eventBusService.emit('componentSelected');
        switch (type) {
            case COMPONENT:
                if (path.length === 3) {
                    setSelected({ ...cmps[path[0]].cmps[path[1]].cmps[path[2]], path: path });
                } else {
                    setSelected({ ...cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]], path: path });
                }
                break;
            case COLUMN:
                if (path.length === 2) {
                    setSelected({ ...cmps[path[0]].cmps[path[1]], path: path });
                } else {
                    setSelected({ ...cmps[path[0]].cmps[path[1]].cmps[path[2]], path: path });
                }
                break;
            case INNERSECTION:
                setSelected({ ...cmps[path[0]].cmps[path[1]], path: path });
                break;
            default:
                setSelected({ ...cmps[path[0]], path: path });
        }
    }
    const renderSection = (section, currentPath) => {
        return (
            <Section
                key={section.id}
                data={section}
                handleDrop={handleDrop}
                cmps={cmps[currentPath]}
                path={currentPath}
                updateComponent={onUpdateComponent}
                onSelect={onSelect}
                selected={selected}
            />
        );
    };
    const getSelected = (selected) => {
        if (!selected) return;
        const path = selected.path
        try {
            switch (path.length) {
                case 1:
                    return { ...cmps[path[0]], path }
                case 2:
                    return { ...cmps[path[0]].cmps[path[1]], path }
                case 3:
                    const currCmp = cmps[path[0]].cmps[path[1]].cmps[path[2]]
                    if (currCmp.type === COLUMN) {
                        return { ...currCmp, path }
                    } else {
                        return { ...currCmp.component, path }
                    }
                default:
                    return { ...cmps[path[0]].cmps[path[1]].cmps[path[2]].cmps[path[3]].component, path }
            }
        } catch (err) {
            return null;
        }
    }
    const chatChange = ({ target }) => {
        const { name, value } = target;
        if (name === 'openingText') {
            chatOpeningTextChange(value);
        } else {
            chatAnswerTextChange(value);
        }
    }
    return (
        <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
            <div className={`editor ${debugMode ? 'debug' : ''}`}>
                <SideBar
                    selected={getSelected(selected)}
                    update={onUpdateComponent}
                    onUndo={onUndo}
                    setChatIsEnabled={setChatIsEnabled}
                    chatOpeningText={chat.openingText}
                    chatAnswerText={chat.answerText}
                    chatIsEnabled={chat.isEnabled}
                    chatChange={chatChange} />
                <div className="page-container">
                    <div className="page">
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
                                        accept={[INNERSECTION, SIDEBAR_SECTION, SIDEBAR_ITEM, COMPONENT, SECTION, COLUMN, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION]}
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
                            accept={[SIDEBAR_ITEM, SIDEBAR_SECTION, COMPONENT, SECTION, COLUMN, SIDEBAR_COLUMN, SIDEBAR_INNERSECTION]}
                            onDrop={handleDrop}
                            isLast
                        />
                        {!cmps.length && (
                            <div className="empty">
                                Drag element to start...
                            </div>
                        )}
                        {chat.isEnabled && <ChatApp openingText={chat.openingText} answerText={chat.answerText} />}
                    </div>
                </div>
            </div>
        </DndProvider>
    )
}

function mapStateToProps(state) {
    return {
        _id: state.layoutModule._id,
        cmps: state.layoutModule.cmps,
        selected: state.layoutModule.selected,
        style: state.layoutModule.style,
        chat: state.layoutModule.chat
    }
}
const mapDispatchToProps = {
    saveWap,
    loadWap,
    setWap,
    moveSidebarComponentIntoParent,
    moveSidebarColumnIntoParent,
    moveSidebarInnerSectionIntoParent,
    moveWithinParent,
    moveToDifferentParent,
    updateComponent,
    setSelected,
    insert,
    setChatIsEnabled,
    chatOpeningTextChange,
    chatAnswerTextChange,
    dispatchAction
}

export const Editor = connect(mapStateToProps, mapDispatchToProps)(_Editor);