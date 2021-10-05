import { Button, TextField } from "@mui/material";

import { useState } from "react";

export function ContactForm({ data, style, update }) {
    const [form, setForm] = useState({ ...data });

    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
        update('data', { newForm })
    }

    return (
        <div style={{ color: 'red' }} className="form flex direction-column">
            <TextField
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
                variant="standard"
            />
            <TextField
                label="Email"
                value={form.email}
                onChange={handleChange}
                name="email"
                variant="standard"
            />
            <TextField
                label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                name="phone"
                variant="standard"
            />
            <TextField
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                name="subject"
                variant="standard"
            />
            <TextField
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