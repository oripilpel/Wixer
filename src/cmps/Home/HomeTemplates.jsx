import React from 'react';
import { TemplateList } from '../TemplateList';

export function HomeTemplates() {
    return (
        <div id="templates" className="home-templates main-layout">
            <h2>Choose a template and start building now!</h2>
            <TemplateList />
        </div>
    );
}