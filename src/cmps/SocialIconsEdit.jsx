import { useState } from "react";
import { DribbbleIcon } from '../assets/img/social/DribbbleIcon'
import { FacebookIcon } from '../assets/img/social/FacebookIcon'
import { InstagramIcon } from '../assets/img/social/InstagramIcon'
import { GithubIcon } from '../assets/img/social/GithubIcon'
import { LinkedinIcon } from '../assets/img/social/LinkedinIcon'
import { TwitterIcon } from '../assets/img/social/TwitterIcon'


export function SocialIconsEdit({ style, data, onUpdate }) {
    const [socials, setSocials] = useState({ ...data.socials })

    function handleChange({ target }) {
        const newSocials = { ...socials }
        newSocials[target.name].url = target.value
        setSocials(newSocials)
        onUpdate('data', { socials })

    }

    function toggleShown(socialName) {
        const newSocials = { ...socials }
        newSocials[socialName].shown = !newSocials[socialName].shown
        setSocials(newSocials)
        onUpdate('data', { socials })
    }

    return (
        <div className="social-icons-edit flex direction-column">
            <div className="social-container flex">
                <FacebookIcon isEditComp onClick={() => { toggleShown('facebook') }} fillColor={(socials.facebook.shown) ? '#4267B2' : '#000000'} />
                {<input type="text" disabled={!socials.facebook.shown} name="facebook" placeholder={`Facebook Link...`} value={(socials.facebook.url) ? socials.facebook.url : ''} onChange={handleChange} />}
            </div>

            <div className="social-container flex">
                <InstagramIcon isEditComp onClick={() => { toggleShown('instagram') }} fillColor={(socials.instagram.shown) ? '#F77737' : '#000000'} />
                {<input type="text" disabled={!socials.instagram.shown} name="instagram" placeholder={`Instagram Link...`} value={(socials.instagram.url) ? socials.instagram.url : ''} onChange={handleChange} />}
            </div>

            <div className="social-container flex">
                <GithubIcon isEditComp onClick={() => { toggleShown('github') }} fillColor={(socials.github.shown) ? '#3b3838' : '#000000'} />
                {<input type="text" disabled={!socials.github.shown} name="github" placeholder={`Github Link...`} value={(socials.github.url) ? socials.github.url : ''} onChange={handleChange} />}
            </div>

            <div className="social-container flex">
                <DribbbleIcon isEditComp onClick={() => { toggleShown('dribbble') }} fillColor={(socials.dribbble.shown) ? '#ea4c89' : '#000000'} />
                {<input type="text" disabled={!socials.dribbble.shown} name="dribbble" placeholder={`Dribbble Link...`} value={(socials.dribbble.url) ? socials.dribbble.url : ''} onChange={handleChange} />}
            </div>

            <div className="social-container flex">
                <LinkedinIcon isEditComp onClick={() => { toggleShown('linkedin') }} fillColor={(socials.linkedin.shown) ? '#0e76a8' : '#000000'} />
                {<input type="text" disabled={!socials.linkedin.shown} name="linkedin" placeholder={`Linkedin Link...`} value={(socials.linkedin.url) ? socials.linkedin.url : ''} onChange={handleChange} />}
            </div>

            <div className="social-container flex">
                <TwitterIcon isEditComp onClick={() => { toggleShown('twitter') }} fillColor={(socials.twitter.shown) ? '#1DA1F2' : '#000000'} />
                {<input type="text" disabled={!socials.twitter.shown} name="twitter" placeholder={`Twitter Link...`} value={(socials.twitter.url) ? socials.twitter.url : ''} onChange={handleChange} />}
            </div>
        </div>
    )

}