import { HomeTop } from '../cmps/Home/HomeTop'
import { HomeFeatures } from '../cmps/Home/HomeFeatures';
import { HomeTemplates } from '../cmps/Home/HomeTemplates'

export function Home() {
    return (
        <section className="home">
            <HomeTop />
            <HomeFeatures />
            <HomeTemplates />
        </section>
    )
}