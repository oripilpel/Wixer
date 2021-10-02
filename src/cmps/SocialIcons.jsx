import { DribbbleIcon } from '../assets/img/social/DribbbleIcon'
import { FacebookIcon } from '../assets/img/social/FacebookIcon'
import { InstagramIcon } from '../assets/img/social/InstagramIcon'
import { GithubIcon } from '../assets/img/social/GithubIcon'
import { LinkedinIcon } from '../assets/img/social/LinkedinIcon'
import { TwitterIcon } from '../assets/img/social/TwitterIcon'


export function SocialIcons({ data, style }) {
    return (
        <div className="social-icons" style={style}>
            {data.socials.facebook.shown && <FacebookIcon fillColor="#000000" />}
            {data.socials.instagram.shown && <InstagramIcon fillColor="#000000" />}
            {data.socials.github.shown && <GithubIcon fillColor="#000000" />}
            {data.socials.dribbble.shown && <DribbbleIcon fillColor="#000000" />}
            {data.socials.linkedin.shown && <LinkedinIcon fillColor="#000000" />}
            {data.socials.twitter.shown && <TwitterIcon fillColor="#000000" />}
        </div>
    )
}












