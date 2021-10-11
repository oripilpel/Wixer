import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { wapService } from "../../services/waps.service";
import { utilService } from "../../services/util.service";
import { MsgSent } from "./MsgSent";
import { StyledTextField } from "../StyledTextField";
import { StyledTextFieldDark } from "../StyledTextFieldDark";


function _ContactForm({ data, match }) {
    const [form, setForm] = useState({ ...data.form })
    const [isOpen, setIsOpen] = useState(false)


    function handleChange({ target }) {
        const { name, value } = target;
        const newForm = { ...form, [name]: value }
        setForm(newForm)
    }

    const StyledInput = data.isDark ? StyledTextFieldDark : StyledTextField;

    function onSubmit(ev) {
        ev.preventDefault()
        wapService.sendLead(match.params.wapName, { ...form, id: utilService.makeId(), date: Date.now() })
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
            <Button type="submit" onClick={onSubmit} sx={{ '&:hover': { backgroundColor: (data.isDark) ? '#2b2b2b' : '#ababab' }, backgroundColor: (data.isDark) ? '#3E3E3E' : '#F5F5F5', color: (data.isDark) ? '#F5F5F5' : '#3E3E3E' }} >Contact Us</Button>
            <MsgSent isOpen={isOpen} setIsOpen={setIsOpen} backgroundColor={(data.isDark) ? '#3E3E3E' : '#F5F5F5'} />
        </form>
    )
}

export const ContactForm = withRouter(_ContactForm)