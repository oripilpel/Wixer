import Hero from '../../assets/img/hero.gif'

export function HomeTop() {
    return (
        <div className="home-top main-layout">
            <h1>Create a website for your business</h1>
            <img src={Hero} alt="build your site by drag and drop platform" />
            <p className="flex direction-column justify-around">
                <span>
                   <span className="wixer">Wixer </span>is an easy-to-use platform, to build your website easily and quickly.
                </span>
                <a href="#templates" >Start Build Now!</a>
            </p>
        </div>
    )
}