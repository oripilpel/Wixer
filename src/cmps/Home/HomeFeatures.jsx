import React from 'react';
import Fade from 'react-reveal/Fade';

import Feature1 from '../../assets/img/feature1.png'
import Feature2 from '../../assets/img/feature2.png'
import Feature3 from '../../assets/img/feature3.png'
import Feature4 from '../../assets/img/feature4.png'

export class HomeFeatures extends React.Component {
    render() {
        const duration = 2000
        const delay = 0
        return (
            <div className="home-features">
                <div className="feature">
                    <Fade left duration={duration} delay={delay}>
                        <div className="feature-wrapper main-layout  flex align-center wrap justify-between" >
                            <img src={Feature3} alt="img1" />
                            <div className="content">
                                <h3>Just Drag & Drop</h3>
                                <p>
                                    With a super most innovative drag and drop website builder, you can design any website you want. Just Drag, Drop and Customize!
                                    All the templates below were built using Wixer Platform.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="feature">
                    <Fade left duration={duration} delay={delay}>
                        <div className="feature-wrapper main-layout  flex align-center wrap justify-between" >
                            <div className="content">
                                <h3>Wixer editor</h3>
                                <p>
                                    Start from scratch or choose from over designer-made templates that you can fully customize using Wixer website Editor.
                                </p>
                            </div>
                            <img src={Feature2} alt="img2" />
                        </div>
                    </Fade>
                </div>
                <div className="feature">
                    <Fade left duration={duration} delay={delay}>
                        <div className="feature-wrapper main-layout  flex align-center wrap justify-between" >
                            <img src={Feature4} alt="img3" />
                            <div className="content">
                                <h3>Customize your site</h3>
                                <p>
                                    Pick a template and customize anything, or answer a few questions and get a free website designed just for you
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <div className="feature">
                    <Fade left duration={duration} delay={delay}>
                        <div className="feature-wrapper main-layout  flex align-center wrap justify-between" >
                            <div className="content">
                                <h3>Suited for any of your needs</h3>
                                <p>
                                    Design and build your own high-quality websites. Whether you’re promoting your business, showcasing your work, opening your store or starting a blog—you can do it all with the Wixer website builder.
                                </p>
                            </div>
                            <img src={Feature1} alt="img4" />
                        </div>
                    </Fade>
                </div>
            </div>
        )
    }
}