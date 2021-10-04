import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { translateStyle } from "../services/util.service";

import { Image } from "../cmps/Image";
import { Text } from "../cmps/publish/Text";
import { Video } from "../cmps/Video";
import { Carousel } from "../cmps/Carousel";
import { Nav } from "../cmps/publish/Nav";
import { Button } from "../cmps/publish/Button";
import { SocialIcons } from "../cmps/publish/SocialIcons"
import { loadWap } from '../store/layout.actions'

function _Publish({ match, cmps, loadWap }) {
    const KeysToComponentMap = {
        text: Text,
        image: Image,
        video: Video,
        nav: Nav,
        button: Button,
        social: SocialIcons,
        carousel: Carousel
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
        cmps.map((sec, secIdx) => {
            return <div key={secIdx} className="section" style={{ ...sec.style, display: 'flex' }}>
                {sec.cmps.map(colOrIS => <div key={colOrIS.id} className={colOrIS.cmps[0].cmps ? 'innersection flex' : 'column'} style={colOrIS.style}>
                    {colOrIS.cmps.map(colOrCmp => <div key={colOrCmp.id} className={colOrCmp.cmps ? 'column flex direction-column' : 'component'} style={colOrCmp.style}>
                        {colOrCmp.cmps && colOrCmp.cmps.map(cmp => <div key={cmp.id} className="component">{renderer(cmp)}</div>)}
                        {!colOrCmp.cmps && renderer(colOrCmp)}
                    </div>)
                    }
                </div>)}
            </div>
        })
    )
}

function mapStateToProps(state) {
    return {
        cmps: state.layoutModule.cmps
    }
}
const mapDispatchToProps = {
    loadWap
}

export const Publish = connect(mapStateToProps, mapDispatchToProps)(_Publish)