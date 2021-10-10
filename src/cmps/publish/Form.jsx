import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { wapService } from "../../services/waps.service";
import { StyledTextField, TextF } from "../StyledTextField";
import { utilService } from "../../services/util.service";
import { MsgSent } from "./MsgSent";
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';



function _ContactForm({ data, match }) {
    const [form, setForm] = useState({ ...data.form })
    const [isOpen, setIsOpen] = useState(false)
    // let StyledInput = StyledTextField(data.isDark);

    // const styled =
    // useEffect(() => {
    //     StyledInput = StyledTextField(data.isDark)
    // }, [])

    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }
    let StyledInput = TextField;


    function onSubmit(ev) {
        ev.preventDefault()
        wapService.sendLead(match.params.wapId, { ...form, id: utilService.makeId(), date: Date.now() })
        setIsOpen(true)
        setForm({ ...data.form })
    }

    return (
        <form onSubmit={onSubmit} className="contact-form flex direction-column">
            <StyledInput
                label="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Phone Number"
                value={form.phone}
                onChange={handleChange}
                name="phone"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Email"
                value={form.email}
                onChange={handleChange}
                name="email"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Subject"
                value={form.subject}
                onChange={handleChange}
                name="subject"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Your Message"
                value={form.msg}
                onChange={handleChange}
                name="msg"
                variant="standard"
                fullWidth={true}
            />
            <Button type="submit" style={{ flex: 1 }} >Contact Us</Button>
            <MsgSent isOpen={isOpen} setIsOpen={setIsOpen} />
        </form>
    )
}

export const ContactForm = withRouter(_ContactForm)