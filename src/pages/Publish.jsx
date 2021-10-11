import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
import { translateStyle } from "../services/util.service";

import { Image } from "../cmps/Image";
import { Text } from "../cmps/publish/Text";
import { Video } from "../cmps/Video";
import { Carousel } from "../cmps/Carousel";
import { Nav } from "../cmps/publish/Nav";
import { Button } from "../cmps/publish/Button";
import { SocialIcons } from "../cmps/publish/SocialIcons"
import { ContactForm } from "../cmps/publish/Form"
import { GMap } from "../cmps/GMap";
import { ChatApp } from "../cmps/ChatApp";
import { loadWap } from '../store/layout.actions'
import { INNERSECTION } from "../constants";

function _Publish({ history, match, cmps, chat, loadWap }) {
    const [loadHamb, setLoadHamb] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = (menuMode = !isMenuOpen) => {
        setIsMenuOpen(menuMode)
    }

    useEffect(() => {
        if (match.params.wapId) { // if preview page
            const id = match.params.wapId
                ; (async () => {
                    try {
                        await loadWap(id)
                    } catch (err) {
                        return history.push('/')
                    }
                })()
        } else if (match.params.wapName) { // if publish page
            const name = match.params.wapName
                ; (async () => {
                    try {
                        await loadWap(null, name)
                    } catch (err) {
                        return history.push('/')
                    }
                })()
        }
    }, [match.params.wapId, match.params.wapName])

    function renderer({ component }) {
        const props = {
            id: component.id,
            key: component.id,
            data: component.data,
            style: translateStyle({ ...component.style }),
        }
        switch (component.type) {

            case ('text'):
                return <Text {...props} />
            case ('image'):
                return < Image {...props} />
            case ('video'):
                return <Video {...props} />
            case ('nav'):
                return <Nav {...props} setLoadHamb={setLoadHamb} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            case ('button'):
                return <Button {...props} />
            case ('social'):
                return < SocialIcons {...props} />
            case ('carousel'):
                return < Carousel {...props} />
            case ('form'):
                return <ContactForm {...props} />
            case ('GMap'):
                return <GMap {...props} />
            default:
                return <></>
        }

    }
    return (
        <div className="publish">
            {match.params.wapId && <div className="margin-top-65"></div> }
            {loadHamb && (
                <>
                    <div className={`screen ${isMenuOpen ? "active" : ""}`} onClick={() => toggleMenu(false)}></div>
                    <div className={`hamb-icon ${isMenuOpen ? "active" : ""}`} onClick={() => toggleMenu()}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </>
            )}

            {cmps.map((sec, secIdx) => {
                const containsInnerSection = sec.cmps.some(child => child.type === INNERSECTION)
                return <div id={secIdx + 1} key={secIdx} className={`section flex ${containsInnerSection ? 'direction-column' : ''}`} style={{ ...sec.style }}>
                    {sec.cmps.map(colOrIS => <div key={colOrIS.id} className={colOrIS.cmps[0].cmps ? 'innersection flex' : 'column flex direction-column'} style={colOrIS.style}>
                        {colOrIS.cmps.map(colOrCmp => <div key={colOrCmp.id} className={colOrCmp.cmps ? 'column flex direction-column' : `component ${colOrCmp.component.type}`} style={colOrCmp.style}>
                            {colOrCmp.cmps && colOrCmp.cmps.map(cmp => <div key={cmp.id} className={`component ${cmp.component.type}`}>{renderer(cmp)}</div>)}
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