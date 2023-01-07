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
import projectOne from '../../img/shrubclub.png'
import projectTwo from '../../img/portfolio.png'
import projectThree from '../../img/musicquiz.png'
import projectFour from '../../img/pineapple.png'
import aboutPic from '../../img/about.jpg'
import resume from '../../directory/DavidKovalchukResume.pdf'

import {FiMail} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
import {FiLinkedin} from 'react-icons/fi'
import { FiDownload } from 'react-icons/fi'


const home = () => {
    const ZoomInScrollOut= batch(StickyIn(), FadeIn(), ZoomIn());
    const work = [
        {
            name: "Shrub Club",
            link: 'https://shrubclub.netlify.app/',
            imageSrc: projectOne
        },

        {
            name: "My Portfolio",
            link: '#',
            imageSrc: projectTwo
        },

        {
            name: "Music Quiz",
            link: 'https://musicguava.herokuapp.com/',
            imageSrc: projectThree
        },

        {
            name: "Pineapple Motivator",
            link: 'https://diangigrich.github.io/PineappleMotivator/pages/userForm.html',
            imageSrc: projectFour
        },

    ]
    const handleContactClick = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    }
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
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title about-me">
                        About Me
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1000, -400))}>
                    <div className="background-image-container">
                        <img src={aboutPic} alt="baby David"/>
                        <div className="black-background"></div>
                    </div>
                </Animator>
                <Animator animation={batch(Fade(),Sticky(), MoveOut(1000, 500))}>
                    <div className="details">
                        <h2 className="greeting">Hey There!</h2>
                        <p className="bio">
                            From a very young age I was fascinated by the endless possibilities that a computer gave. To this day I still have the passion for developing projects through code.
                        </p>
                        <p className="bio">
                            I'm a recent graduate from University of Washington's Full-Stack Development bootcamp. I am experienced with front-end and back-end development. I am excited to put my creativity and skills into many more future projects.
                        </p>
                        <div className="bio">
                            Thank you for reading! Keep scrolling to learn more about me.
                        </div>
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={3}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title">
                        Projects
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={4}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <div className="portfolio-content">
                        {
                            work?.map((work, index) => {
                                return(
                                    <a href={work?.link} target="_blank" key={work?.name}>
                                        <div className="portfolio-card">
                                            <div className="project-image">
                                                <img src={work?.imageSrc} alt={work?.name}/>
                                            </div>
                                            <div className="portfolio-title">
                                                <h3>
                                                    {work?.name}
                                                </h3>
                                            </div>
                                            <div className="count">
                                                {index}
                                            </div>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={5}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title contact">
                        Contact
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={6}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%'
                }}>
                    <span style={{ fontSize: '40px'}}>

                        <Animator animation={MoveIn(0, 1000)}>
                            <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                <FiDownload color='white' className='contact-list-icon'/>
                                <a href={resume}><p>Resume</p></a>
                            </div>
                        </Animator>

                        <Animator animation={MoveIn(-500, 0)}>
                            <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onClick={() => handleContactClick('https://github.com/itsDavidK')}>
                                <FiGithub color='white' className='contact-list-icon'/>
                                <p>GitHub</p>
                            </div>
                        </Animator>

                        <Animator animation={MoveIn(1000, 0)}>
                            <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onClick={() => handleContactClick('https://www.linkedin.com/in/david-kovalchuk-a9239916b/')}>
                                <FiLinkedin color='white' className='contact-list-icon'/>
                                <p> LinkedIn</p>
                            </div>
                        </Animator>


                        <Animator animation={MoveIn(-1000, 0)}>
                            <div style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                onClick={() => handleContactClick('mailto:davidakovalchuk@gmail.com')}>
                                <FiMail color='white' className='contact-list-icon'/>
                                <p>davidakovalchuk@gmail.com</p>
                            </div>
                        </Animator>
 
 
                    </span>

                </div>
            </ScrollPage>

        </ScrollContainer>
    )
}

export default home