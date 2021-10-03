import { Button, TextField } from "@material-ui/core";
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
        <div className="flex direction-column">
            <TextField
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
            />
            <TextField
                label="Email"
                value={form.email}
                onChange={handleChange}
                name="email"
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
            <Button>Send</Button>
        </div>
    )
}