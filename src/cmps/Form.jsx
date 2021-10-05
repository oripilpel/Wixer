import { Button } from "@mui/material";

import { useState } from "react";
import { CssTextFieldLight } from "./CssTextFieldLight";
import { CssTextFieldDark } from "./CssTextFieldDark";

export function ContactForm({ data, update }) {
    const [form, setForm] = useState({ ...data.form });

    const StyledInput = (data.isDark) ? CssTextFieldDark : CssTextFieldLight


    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
        update('data', { ...data, form: newForm })
    }

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
                label="Email"
                value={form.email}
                onChange={handleChange}
                name="email"
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
            <Button>send as email</Button>
        </div>
    )
}