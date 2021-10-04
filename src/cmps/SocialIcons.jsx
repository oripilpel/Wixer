import { DribbbleIcon } from '../assets/img/social/DribbbleIcon'
import { FacebookIcon } from '../assets/img/social/FacebookIcon'
import { InstagramIcon } from '../assets/img/social/InstagramIcon'
import { GithubIcon } from '../assets/img/social/GithubIcon'
import { LinkedinIcon } from '../assets/img/social/LinkedinIcon'
import { TwitterIcon } from '../assets/img/social/TwitterIcon'


export function SocialIcons({ data, style }) {
    return (
        <div className="social-icons flex justify-between" style={style}>
            {data.socials.facebook.shown && <div style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }}><FacebookIcon fillColor={data.color} /></div>}
            {data.socials.instagram.shown && <div style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }}> <InstagramIcon fillColor={data.color} /></div>}
            {data.socials.github.shown && <div style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }}><GithubIcon fillColor={data.color} /></div>}
            {data.socials.dribbble.shown && <div style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }}> <DribbbleIcon fillColor={data.color} /></div>}
            {data.socials.linkedin.shown && <div style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }}><LinkedinIcon fillColor={data.color} /></div>}
            {data.socials.twitter.shown && <div style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }}><TwitterIcon fillColor={data.color} /></div>}
        </div>
    )
}












