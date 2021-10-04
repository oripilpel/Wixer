import { useState } from "react";
import { DribbbleIcon } from '../assets/img/social/DribbbleIcon'
import { FacebookIcon } from '../assets/img/social/FacebookIcon'
import { InstagramIcon } from '../assets/img/social/InstagramIcon'
import { GithubIcon } from '../assets/img/social/GithubIcon'
import { LinkedinIcon } from '../assets/img/social/LinkedinIcon'
import { TwitterIcon } from '../assets/img/social/TwitterIcon'
import { Accordion, AccordionSummary, AccordionDetails } from './Accordion';


export function SocialIconsEdit({ style, data, onUpdate }) {
    // const [socials, setSocials] = useState({ ...data.socials })
    const [props, setProps] = useState({ ...data })
    // const [background, setBackground] = useState({ ...data.backgroundColor })

    const [expanded, setExpanded] = useState('social')
    const handlePannelChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    function handleChange({ target }) {
        const newProps = { ...data }
        if (newProps.socials[target.name]) newProps.socials[target.name].url = target.value
        else newProps[target.name] = target.value
        setProps(newProps)
        onUpdate('data', newProps)
    }

    function toggleShown(socialName) {
        const newSocials = { ...props.socials }
        newSocials[socialName].shown = !newSocials[socialName].shown
        setProps({ ...props, socials: newSocials })
        onUpdate('data', props)
    }

    return (
        <div className=" flex direction-column">
            <Accordion expanded={expanded === 'social'} onChange={handlePannelChange('social')}>
                <AccordionSummary aria-controls="fontd-content" id="fontd-header">
                    Social Links
                </AccordionSummary>
                <AccordionDetails>
                    <div className="social-icons-edit">

                        <div className="social-container flex">
                            <FacebookIcon isEditComp onClick={() => { toggleShown('facebook') }} fillColor={(props.socials.facebook.shown) ? '#4267B2' : '#000000'} />
                            {<input type="text" disabled={!props.socials.facebook.shown} name="facebook" placeholder={`Facebook Link...`} value={(props.socials.facebook.url) ? props.socials.facebook.url : ''} onChange={handleChange} />}
                        </div>

                        <div className="social-container flex">
                            <InstagramIcon isEditComp onClick={() => { toggleShown('instagram') }} fillColor={(props.socials.instagram.shown) ? '#F77737' : '#000000'} />
                            {<input type="text" disabled={!props.socials.instagram.shown} name="instagram" placeholder={`Instagram Link...`} value={(props.socials.instagram.url) ? props.socials.instagram.url : ''} onChange={handleChange} />}
                        </div>

                        <div className="social-container flex">
                            <GithubIcon isEditComp onClick={() => { toggleShown('github') }} fillColor={(props.socials.github.shown) ? '#3b3838' : '#000000'} />
                            {<input type="text" disabled={!props.socials.github.shown} name="github" placeholder={`Github Link...`} value={(props.socials.github.url) ? props.socials.github.url : ''} onChange={handleChange} />}
                        </div>

                        <div className="social-container flex">
                            <DribbbleIcon isEditComp onClick={() => { toggleShown('dribbble') }} fillColor={(props.socials.dribbble.shown) ? '#ea4c89' : '#000000'} />
                            {<input type="text" disabled={!props.socials.dribbble.shown} name="dribbble" placeholder={`Dribbble Link...`} value={(props.socials.dribbble.url) ? props.socials.dribbble.url : ''} onChange={handleChange} />}
                        </div>

                        <div className="social-container flex">
                            <LinkedinIcon isEditComp onClick={() => { toggleShown('linkedin') }} fillColor={(props.socials.linkedin.shown) ? '#0e76a8' : '#000000'} />
                            {<input type="text" disabled={!props.socials.linkedin.shown} name="linkedin" placeholder={`Linkedin Link...`} value={(props.socials.linkedin.url) ? props.socials.linkedin.url : ''} onChange={handleChange} />}
                        </div>

                        <div className="social-container flex">
                            <TwitterIcon isEditComp onClick={() => { toggleShown('twitter') }} fillColor={(props.socials.twitter.shown) ? '#1DA1F2' : '#000000'} />
                            {<input type="text" disabled={!props.socials.twitter.shown} name="twitter" placeholder={`Twitter Link...`} value={(props.socials.twitter.url) ? props.socials.twitter.url : ''} onChange={handleChange} />}
                        </div>
                    </div>

                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'color'} onChange={handlePannelChange('color')}>
                <AccordionSummary>
                    Colors
                </AccordionSummary>
                <AccordionDetails>
                    <div className="flex direction-column" >
                        <label htmlFor="color">Socials Color:</label>
                        <input type="color" id="color" name="color" value={props.color} onChange={handleChange} />
                    </div>
                    <div className="flex direction-column">
                        <label htmlFor="backgroundColor">Socials Outline Color:</label>

                        <input type="color" id="backgroundColor" name="backgroundColor" value={props.backgroundColor} onChange={handleChange} />
                    </div>
                </AccordionDetails>
            </Accordion>
        </div>
    )

}

