import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

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
import { saveWap } from '../store/layout.actions'
import { eventBusService } from "../services/event-bus-service";
import { hintsService } from "../services/hint.service"

function _SideBar({ selected, update, cmps, style, _id, saveWap, onUndo }) {
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

    const onSave = () => {
        saveWap({ _id, cmps, style })
    }

    return (
        <div className="side-bar">
            <Tabs className='tabs' value={isEdit ? 'edit' : 'add'} onChange={handleChange} aria-label="disabled tabs example">
                <Tab icon={<AddBoxIcon />}
                    className={`tab add ${!isAddClicked ? 'anima' : ''}`}
                    label="Add" value="add"
                    onClick={() => { setHints(isAddClicked) }} />
                <Tab icon={<EditIcon />} className="tab" label="Edit" value="edit" />
            </Tabs>
            <div className="hints">
                <FormControlLabel
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
                <button onClick={onUndo} title="undo"><HistoryIcon /></button>
            </div>
            <div className="items">
                {!isEdit && <SidebarAddComponent isElementClicked={isElementClicked} setHints={setHints} />}
                {isEdit && selected && (
                    <>
                        <div className="editing">
                            Editing: {(selected.type === COMPONENT) ? selected.component.type : selected.type}
                        </div>
                        <StyledEngineProvider injectFirst>
                            <SidebarEditComponent
                                type={(selected.type === COMPONENT) ? selected.component.type : selected.type}
                                style={(selected.type === COMPONENT) ? selected.component.style : selected.style}
                                data={(selected.type === COMPONENT) ? selected.component.data : selected.data}
                                onUpdate={onUpdate} />
                        </StyledEngineProvider>
                    </>
                )}
                {isEdit && !selected && <div className="empty">Nothing is selected</div>}
            </div>
            <div className="save-pub">
                <div className="save" onClick={onSave}>
                    Save
                </div>
                <div className={`pub ${!isPublishBlink ? 'anima' : ''}`} onMouseDown={() => { setHints(isPublishBlink) }}>
                    <Link to={`/publish/${_id}`}>Publish</Link>
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
    }
}

const mapDispatchToProps = {
    saveWap
}

export const SideBar = connect(mapStateToProps, mapDispatchToProps)(_SideBar);