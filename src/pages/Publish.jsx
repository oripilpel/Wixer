import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { translateStyle } from "../services/util.service";

import { Image } from "../cmps/Image";
import { Text } from "../cmps/publish/Text";
import { Video } from "../cmps/Video";
import { Nav } from "../cmps/publish/Nav";
import { Button } from "../cmps/publish/Button";
import { SocialIcons } from "../cmps/publish/SocialIcons"
import { ContactForm } from "../cmps/publish/Form"
import { GMap } from "../cmps/GMap";
import { ChatApp } from "../cmps/ChatApp";
import { loadWap } from '../store/layout.actions'
import { INNERSECTION } from "../constants";

function _Publish({ match, cmps, chat, loadWap }) {
    const KeysToComponentMap = {
        text: Text,
        image: Image,
        video: Video,
        nav: Nav,
        button: Button,
        social: SocialIcons,
        form: ContactForm,
        GMap
    };

    useEffect(() => {
        const id = match.params.wapId;
        if (id) loadWap(id);
    }, []);

    const renderer = ({ component }) => {
        if (!component) return
        if (typeof KeysToComponentMap[component.type] !== "undefined") {
            return React.createElement(
                KeysToComponentMap[component.type],
                {
                    id: component.id,
                    key: component.id,
                    data: component.data,
                    style: translateStyle({ ...component.style }),
                },
            );
        }
    }

    return (
        <div className="publish">
            {cmps.map((sec, secIdx) => {
                const containsInnerSection = sec.cmps.some(child => child.type === INNERSECTION)
                return <div key={secIdx} className={`section flex ${containsInnerSection ? 'direction-column' : ''}`} style={{ ...sec.style }}>
                    {sec.cmps.map(colOrIS => <div key={colOrIS.id} className={colOrIS.cmps[0].cmps ? 'innersection flex' : 'column'} style={colOrIS.style}>
                        {colOrIS.cmps.map(colOrCmp => <div key={colOrCmp.id} className={colOrCmp.cmps ? 'column flex direction-column' : 'component'} style={colOrCmp.style}>
                            {colOrCmp.cmps && colOrCmp.cmps.map(cmp => <div key={cmp.id} className="component">{renderer(cmp)}</div>)}
                            {!colOrCmp.cmps && renderer(colOrCmp)}
                        </div>)
                        }
                    </div>)}
                </div>
            })}
            {chat && chat.isEnabled && <ChatApp openingText={chat.openingText} answerText={chat.answerText} />}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        cmps: state.layoutModule.cmps,
        chat: state.layoutModule.chat
    }
}
const mapDispatchToProps = {
    loadWap
}

export const Publish = connect(mapStateToProps, mapDispatchToProps)(_Publish)