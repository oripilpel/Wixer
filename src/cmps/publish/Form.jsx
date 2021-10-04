import { TextField } from "@material-ui/core";
import { Button } from "@mui/material";

import { useState } from "react";

export function ContactForm({ data, style, update }) {
    const [form, setForm] = useState({ ...data });

    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    return (
        <div className="flex direction-column">
            <TextField
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
            />
            <TextField
                label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                name="phone"
            />
            <TextField
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                name="subject"
            />
            <TextField
                label="Your Message"
                value={form.msg}
                onChange={handleChange}
                name="msg"
            />
            <a className="flex link" href={`mailto:name@email.com?subject=${form.subject}&body=from${form.name} phone number:${form.phone},
            ${form.msg}`}>
                <Button style={{ flex: 1 }} >send as email</Button>
            </a>
        </div>
    )
}