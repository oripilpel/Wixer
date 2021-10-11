import { useState, useEffect } from "react";
import { connect } from 'react-redux';

import { StyledEngineProvider } from "@mui/styled-engine";
import { Tab, Tabs } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import HistoryIcon from '@mui/icons-material/History';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { COMPONENT } from "../constants";
import { SidebarEditComponent } from "./SidebarEditComponent";
import { SidebarAddComponent } from "./SidebarAddComponent";
import { saveWap, loadWap } from '../store/layout.actions'
import { eventBusService } from "../services/event-bus-service";
import { hintsService } from "../services/hint.service"
import { SaveModal } from "./SaveModal";

function _SideBar({
    name,
    user,
    selected,
    update,
    cmps,
    style,
    _id,
    chat,
    saveWap,
    loadWap,
    onUndo,
    setChatIsEnabled,
    chatIsEnabled,
    chatOpeningText,
    chatAnswerText,
    chatChange
}) {
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        //componentDidMount
        const removeEventBus = eventBusService.on('componentSelected', () => { setIsEdit(true) });
        return () => {
            // componentWillUnmount
            removeEventBus();
        }
    }, [])

    const hints = hintsService.get()
    const [hintsChecked, setHintsChecked] = useState(hints ? true : false);
    const [isAddClicked, setIsAddClicked] = useState(hints ? false : true);
    const [isElementClicked, setIsElementClicked] = useState(true);
    const [isPublishBlink, setIsPublishBlink] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isPublishModal, setIsPublishModal] = useState(false);


    const setHints = (stage) => {
        switch (stage) {
            case isAddClicked:
                if (isAddClicked) return
                setIsAddClicked(true)
                setIsElementClicked(false)
                break;
            case isElementClicked:
                if (isElementClicked) return
                setIsElementClicked(true)
                setIsPublishBlink(false)
                setTimeout(() => {
                    setIsPublishBlink(true)
                    setHintsChecked(false);
                    hintsService.save(false)
                }, 5000)
                break;
            case isPublishBlink:
                setIsPublishBlink(true)
                setHintsChecked(false);
                hintsService.save(false)
                break;
            default:
                break;
        }
    }
    const hintsHandleChange = (event) => {
        setHintsChecked(event.target.checked);
        if (event.target.checked) {
            setIsAddClicked(false)
            setIsElementClicked(true)
            setIsPublishBlink(true)
            hintsService.save(true)
        } else {
            setIsAddClicked(true)
            setIsElementClicked(true)
            setIsPublishBlink(true)
            hintsService.save(false)
        }
    };
    const handleChange = (ev, value) => {
        setIsEdit(value === 'add' ? false : true);
    };

    const onUpdate = (field, data) => {
        update(selected, field, data);
    }

    const onSave = (newName) => {
        const n = newName || name;
        setIsModalOpen(false)
        saveWap({ _id, cmps, style, chat, name: n })
    }

    return (
        <div className="side-bar">
            <SaveModal cmps={cmps} loadWap={loadWap} user={user} name={name} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} onSave={onSave} isPublish={isPublishModal} />
            <Tabs className='tabs' value={isEdit ? 'edit' : 'add'} onChange={handleChange} aria-label="disabled tabs example">
                <Tab icon={<AddBoxIcon />}
                    className={`tab add ${!isAddClicked ? 'anima' : ''}`}
                    label="Add" value="add"
                    onClick={() => { setHints(isAddClicked) }} />
                <Tab icon={<EditIcon />} className="tab edit" label="Edit" value="edit" />
            </Tabs>
            <div className="hints">
                <FormControlLabel
                    className="hints"
                    value="end"
                    control={<Switch
                        checked={hintsChecked}
                        onChange={hintsHandleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        size='small'
                    />}
                    label="Hints"
                    labelPlacement="start"
                />
                <button className="undo" onClick={onUndo} title="undo"><HistoryIcon /></button>
            </div>
            <div className="items">
                {!isEdit && <SidebarAddComponent
                    isElementClicked={isElementClicked}
                    setHints={setHints}
                    setChatIsEnabled={setChatIsEnabled}
                    chatChange={chatChange}
                    chatIsEnabled={chatIsEnabled}
                    chatOpeningText={chatOpeningText}
                    chatAnswerText={chatAnswerText} />}
                {isEdit && selected && (
                    <>
                        <div className="editing">
                            Editing: {(selected.type === COMPONENT) ? selected.component.type : selected.type}
                        </div>
                        <div className="sidebar-edit-component">
                            <StyledEngineProvider injectFirst>
                                <SidebarEditComponent
                                    type={(selected.type === COMPONENT) ? selected.component.type : selected.type}
                                    style={(selected.type === COMPONENT) ? selected.component.style : selected.style}
                                    data={(selected.type === COMPONENT) ? selected.component.data : selected.data}
                                    onUpdate={onUpdate} />
                            </StyledEngineProvider>
                        </div>
                    </>
                )}
                {isEdit && !selected && <div className="empty">Nothing is selected</div>}
            </div>

            <div className="save-pub">
                <div className="save" onClick={() => {
                    setIsPublishModal(false)
                    setIsModalOpen(true)
                }} >
                    Save
                </div>
                <div onClick={() => {
                    setIsPublishModal(true)
                    setIsModalOpen(true)
                }} className={`pub ${!isPublishBlink ? 'anima' : ''}`} onMouseDown={() => { setHints(isPublishBlink) }}>
                    Publish
                </div>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cmps: state.layoutModule.cmps,
        style: state.layoutModule.style,
        _id: state.layoutModule._id,
        chat: state.layoutModule.chat,
        name: state.layoutModule.name,
        user: state.userModule.user
    }
}

const mapDispatchToProps = {
    saveWap,
    loadWap
}

export const SideBar = connect(mapStateToProps, mapDispatchToProps)(_SideBar);