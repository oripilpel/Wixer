import { Button, TextField } from "@mui/material";
import classNames from "classnames";

import { useState } from "react";
import { CssTextField } from "./CssTextField";

export function ContactForm({ data, style, update }) {
    const [form, setForm] = useState({ ...data });
    const styles = theme => ({
        multilineColor: {
            color:'red'
        }
    });

    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
        update('data', { newForm })
    }

    return (
        <div className="flex direction-column">
            <CssTextField
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
                variant="standard"
                multiline
                InputProps={{
                    className: styles.multilineColor
                }}
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