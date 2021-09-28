import React from 'react';
import Soon from '../assets/img/soon.gif'
import Build from '../assets/img/build.gif'
export function About() {
    return (
        <section className="about main-layout">
            <div className="soon">
                <div>
                    <img className="soon-img" src={Soon} alt=""/>
                </div>
                <div>
                    <img className="build-img" src={Build} alt=""/>
                </div>
            </div>
        </section>
    )
}