import React from 'react';
import { TemplateList } from '../cmps/TemplateList';
import { templateService } from '../services/template.service';

export function Templates() {
    const templates = templateService.getAmountOfTemplates()
    return (
        <section className="templates main-layout">
            <TemplateList templates={templates} />
        </section>
    )
}