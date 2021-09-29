import { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { StyledEngineProvider } from "@mui/styled-engine";
import { Tab, Tabs } from "@mui/material";
import AddBoxIcon from '@mui/icons-material/AddBox';
import EditIcon from '@mui/icons-material/Edit';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import { COMPONENT } from "../constants";
import { SidebarEditComponent } from "./SidebarEditComponent";
import { SidebarAddComponent } from "./SidebarAddComponent";
import { saveWap } from '../store/layout.actions'

function _SideBar({ selected, update, cmps, style, _id, saveWap, setHintsText }) {

    const [hintsChecked, setHintsChecked] = useState(true);
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [isElementClicked, setIsElementClicked] = useState(true);
    const [isPublishBlink, setIsPublishBlink] = useState(true);

    const setHints = (stage) => {
        switch (stage) {
            case isAddClicked:
                if (isAddClicked) return
                setIsAddClicked(true)
                setIsElementClicked(false)
                setHintsText('Now drug an elements to the blue zones and build your site')
                break;
            case isElementClicked:
                if (isElementClicked) return
                setIsElementClicked(true)
                setIsPublishBlink(false)
                setTimeout(() => {
                    setIsPublishBlink(true)
                    setHintsChecked(false);
                    setHintsText('')
                }, 5000)
                setHintsText('Don\'t forget to click on Publish at the end!')
                break;
            case isPublishBlink:
                setIsPublishBlink(true)
                setHintsChecked(false);
                setHintsText('')
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
            setHintsText('Click on Add button to see the elements')
        } else {
            setIsAddClicked(true)
            setIsElementClicked(true)
            setIsPublishBlink(true)
            setHintsText('')
        }
    };

    const [isEdit, setIsEdit] = useState(false);
    useEffect(() => {
        if (selected) setIsEdit(true);
    }, [selected]);
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

            </div>
            <div className="items">
                {!isEdit && <SidebarAddComponent isElementClicked={isElementClicked} setHints={setHints} />}
                {isEdit && selected && (
                    <>
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
        _id: state.layoutModule._id
    }
}

const mapDispatchToProps = {
    saveWap
}

export const SideBar = connect(mapStateToProps, mapDispatchToProps)(_SideBar);