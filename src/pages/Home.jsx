import React from 'react';
import { HomeTop } from '../cmps/Home/HomeTop'
import { HomeFeatures } from '../cmps/Home/HomeFeatures';
import { TemplateList } from '../cmps/TemplateList';
import { templateService } from '../services/template.service';

export function Home() {
    const templates = templateService.getAmountOfTemplates(3)
    return (
        <section className="home">
            <HomeTop />
            <HomeFeatures />
            <TemplateList templates={templates} />
        </section>
    )
}