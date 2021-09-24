import Hero from '../assets/img/hero.gif'

export function Home() {
    return (
        <section className="home">
            <div className="top">
                <img className="hero" src={Hero} />
            </div>
        </section>
    )
}