import { Button } from "@mui/material";

import { StyledTextField } from "./StyledTextField";

export function ContactForm({ data }) {

    const StyledInput = StyledTextField

    return (
        <div className="contact-form">
            <StyledInput
                label="Name"
                name="name"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Email"
                name="email"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Phone Number"
                name="phone"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Subject"
                name="subject"
                variant="standard"
                fullWidth={true}
            />
            <StyledInput
                label="Your Message"
                name="msg"
                variant="standard"
                fullWidth={true}
            />
            <Button sx={{ backgroundColor: (data.isDark) ? '#3E3E3E' : '#F5F5F5', color: (data.isDark) ? '#F5F5F5' : '#3E3E3E' }}>Contact Us</Button>
        </div>
    )
}