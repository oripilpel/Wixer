import { DribbbleIcon } from '../../assets/img/social/DribbbleIcon'
import { FacebookIcon } from '../../assets/img/social/FacebookIcon'
import { InstagramIcon } from '../../assets/img/social/InstagramIcon'
import { GithubIcon } from '../../assets/img/social/GithubIcon'
import { LinkedinIcon } from '../../assets/img/social/LinkedinIcon'
import { TwitterIcon } from '../../assets/img/social/TwitterIcon'


export function SocialIcons({ data, style }) {
    return (
        <div className="social-icons flex" style={style}>
            {data.socials.facebook.shown && <a href={data.socials.facebook.url}><FacebookIcon fillColor="#000000" /></a>}
            {data.socials.instagram.shown && <a href={data.socials.instagram.url}><InstagramIcon fillColor="#000000" /></a>}
            {data.socials.github.shown && <a href={data.socials.github.url}><GithubIcon fillColor="#000000" /></a>}
            {data.socials.dribbble.shown && <a href={data.socials.dribbble.url}><DribbbleIcon fillColor="#000000" /></a>}
            {data.socials.linkedin.shown && <a href={data.socials.linkedin.url}><LinkedinIcon fillColor="#000000" /></a>}
            {data.socials.twitter.shown && <a href={data.socials.twitter.url}><TwitterIcon fillColor="#000000" /></a>}
        </div>
    )
}












