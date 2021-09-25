import Hero from '../../assets/img/hero.gif'

export function HomeTop() {
    return (
        <div className="home-top main-layout">
            <h1>Build Websites intuitively with <span>Wixer!</span></h1>
            <div className="hero flex justify-between">
                <p className="flex direction-column justify-around">
                    <span>
                        Wixer is an easy-to-use, strong & uniquie platform for web building!
                    </span>
                    <a href="#templates" >Start Build Now!</a>
                </p>
                <img src={Hero} />
            </div>
        </div>
    )
}