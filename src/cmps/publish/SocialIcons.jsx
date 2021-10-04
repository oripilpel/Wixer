import { DribbbleIcon } from '../../assets/img/social/DribbbleIcon'
import { FacebookIcon } from '../../assets/img/social/FacebookIcon'
import { InstagramIcon } from '../../assets/img/social/InstagramIcon'
import { GithubIcon } from '../../assets/img/social/GithubIcon'
import { LinkedinIcon } from '../../assets/img/social/LinkedinIcon'
import { TwitterIcon } from '../../assets/img/social/TwitterIcon'


export function SocialIcons({ data, style }) {
    return (
        <div className="social-icons flex justify-between" style={style}>
            {data.socials.facebook.shown && <a style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }} href={data.socials.facebook.url}><FacebookIcon fillColor={data.color} /></a>}
            {data.socials.instagram.shown && <a style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }} href={data.socials.instagram.url}><InstagramIcon fillColor={data.color} /></a>}
            {data.socials.github.shown && <a style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }} href={data.socials.github.url}><GithubIcon fillColor={data.color} /></a>}
            {data.socials.dribbble.shown && <a style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }} href={data.socials.dribbble.url}><DribbbleIcon fillColor={data.color} /></a>}
            {data.socials.linkedin.shown && <a style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }} href={data.socials.linkedin.url}><LinkedinIcon fillColor={data.color} /></a>}
            {data.socials.twitter.shown && <a style={{ backgroundColor: data.backgroundColor, height: '60px', width: '60px', padding: '10px', borderRadius: '50%' }} href={data.socials.twitter.url}><TwitterIcon fillColor={data.color} /></a>}
        </div>
    )
}












