import React from 'react';
import { HomeTop } from '../cmps/Home/HomeTop'
import { HomeFeatures } from '../cmps/Home/HomeFeatures';
import { TemplateList } from '../cmps/TemplateList';

export function Home() {
    return (
        <section className="home">
            <HomeTop />
            <HomeFeatures />
            <TemplateList numberOfTemplates={3} />
        </section>
    )
}