import { Button } from "@mui/material";

import { CssTextFieldLight } from "../CssTextFieldLight";
import { CssTextFieldDark } from "../CssTextFieldDark";
import { useState } from "react";

export function ContactForm({ data, style, update }) {
    const [form, setForm] = useState({ ...data });

    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const StyledInput = (data.isDark) ? CssTextFieldDark : CssTextFieldLight

    return (
        <div className="flex direction-column">
            <StyledInput
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
                variant="standard"
            />
            <StyledInput
                label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                name="phone"
                variant="standard"
            />
            <StyledInput
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                name="subject"
                variant="standard"
            />
            <StyledInput
                label="Your Message"
                value={form.msg}
                onChange={handleChange}
                name="msg"
                variant="standard"
            />
            <a className="flex link" href={`mailto:name@email.com?subject=${form.subject}&body=from${form.name} phone number:${form.phone},
            ${form.msg}`}>
                <Button style={{ flex: 1 }} >send as email</Button>
            </a>
        </div>
    )
}