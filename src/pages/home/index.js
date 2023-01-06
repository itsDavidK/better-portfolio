import React from 'react'
import {
    ScrollContainer, 
    ScrollPage, 
    Animator,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn,
} from 'react-scroll-motion'
import './style.css'
import headerImage from '../../img/profile.png'


const home = () => {
    return(
        <ScrollContainer>
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                <div className="image-container">
                    <img src={headerImage} alt="profile image" />
                    <div className="black-background"></div>
                </div>
                </Animator>

                <Animator animation={batch(Fade(),Sticky(),MoveOut(1000, 0))}>
                    <div className="name">
                        <h2 className="first">
                            David
                        </h2>
                    </div>
                </Animator>

                <Animator animation={batch(Fade(),Sticky(),MoveOut(-1650, 0))}>
                    <div className="name">
                        <h2 className="last">
                            Kovalchuk
                        </h2>
                    </div>
                </Animator>

                <Animator animation={batch(Fade(),Sticky(),MoveOut(-100, 100))}>
                    <div className="position">
                        <div></div>
                        <h2 className="last">
                            Full-Stack Developer
                        </h2>
                    </div>
                </Animator>

            </ScrollPage>

            <ScrollPage page={1}>

            </ScrollPage>

        </ScrollContainer>
    )
}

export default home