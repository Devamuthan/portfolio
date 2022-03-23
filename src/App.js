import React from "react";
import './App.css';
import BackgroundBlob1 from './assets/bg-big-blob-1.svg';
import BackgroundBlob2 from './assets/bg-big-blob-2.svg';
import BackgroundBlob3 from './assets/bg-small-blob-1.svg';
import BackgroundBlob4 from './assets/bg-small-blob-2.svg';
import FlatLine from './assets/flat-line.svg';
import MeetMeLine from './assets/meet-me-line.svg';
import MeetMeArrow from './assets/meet-me-arrow.svg';
import Github from './assets/github.svg';
import Twitter from './assets/twitter.svg';
import Dribble from './assets/dribbble.svg';
import Linkedin from './assets/linkedin.svg';
import Mail from './assets/mail.svg';
import ContactLine from './assets/contact line.svg';
import Lines from "./components/lines/Lines";
import Logo from "./components/logo/Logo";
import { ArcText } from "@arctext/react";
import styled from 'styled-components';

export default class App extends React.Component {
    render() {

        const Circle = styled( ArcText )`
          background-color: transparent;

          // Applied to each characters
          & span.character {
            font-family: 'Domine', serif;
            font-size: 38px;
          }
        `

        return (
            <div className="App">
                <img className={ 'background-blob-1' } src={ BackgroundBlob1 } alt={ 'Background' }/>
                <img className={ 'background-blob-2' } src={ BackgroundBlob2 } alt={ 'Background' }/>
                <img className={ 'background-blob-3' } src={ BackgroundBlob3 } alt={ 'Background' }/>
                <img className={ 'background-blob-4' } src={ BackgroundBlob4 } alt={ 'Background' }/>

                <Lines ClassName={ 'line-1' } Orientation={ 'v' }/>
                <Lines ClassName={ 'line-2' } Orientation={ 'v' }/>
                <Lines ClassName={ 'line-3' } Orientation={ 'v' }/>
                <Lines ClassName={ 'line-4' } Orientation={ 'v' }/>
                <Lines ClassName={ 'line-5' } Orientation={ 'v' }/>
                <Lines ClassName={ 'line-6' } Orientation={ 'v' }/>
                <Lines ClassName={ 'line-7' } Orientation={ 'v' }/>
                <Lines ClassName={ 'line-8' } Orientation={ 'h' }/>
                <Lines ClassName={ 'line-9' } Orientation={ 'h' }/>
                <Lines ClassName={ 'line-10' } Orientation={ 'h' }/>

                <div className={ 'logo-container' }>
                    <Logo/>
                </div>

                <div className={ 'details' }>
                    <div className={ 'hey-there' }>
                        Hey There
                    </div>

                    <div className={ 'name' }>
                        Devamuthan S
                    </div>

                    <div className={ 'role' }>
                        <img src={ FlatLine } alt={ 'Flat Line' } className={ 'flat-line' }/>
                        <div className={ 'role-text' }>
                            Dreamer & Developer
                        </div>
                    </div>

                    <div className={ 'description' }>
                        I dream about my life, and work hard to make it come true. Being a developer was once a dream.
                        <span className={ 'italics' }> One down, many to go.</span>
                    </div>

                    <div className={ 'meet-me' }>
                        <img src={ MeetMeLine } alt={ 'Meet Me Line' } className={ 'meet-me-line' }/>
                        <div className={ 'meet-me-button-container' }>
                            <a href={'https://google.com'}>
                                <div className={ 'meet-me-button' }>
                                    <p>Meet Me</p>
                                    <img src={ MeetMeArrow } alt={ 'Meet Me Arrow' } className={ 'meet-me-arrow' }/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <img src={ContactLine} alt={'Contact Line'} className={'contact-line'} />

                    <div className={'social'}>
                        <img src={FlatLine} alt={'Flat Line'} className={'flat-line'} />
                        <div className={'social-links'}>
                            <a href={'https://google.com'}>
                                <img  src={Github} alt={'Github'} className={'github'} />
                            </a>
                            <a href={'https://google.com'}>
                                <img  src={Twitter} alt={'Twitter'} className={'twitter'} />
                            </a>
                            <a href={'https://google.com'}>
                                <img  src={Dribble} alt={'Dribble'} className={'dribble'} />
                            </a>
                            <a href={'https://google.com'}>
                                <img  src={Linkedin} alt={'Linkedin'} className={'linkedin'} />
                            </a>
                            <a href={'https://google.com'}>
                                <img  src={Mail} alt={'Mail'} className={'mail'} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className={ 'location-container' }>
                    <Circle
                        text="CHENNAI, INDIA"
                        upsideDown
                        radius={ 160 }
                        characterWidth={ 13 }
                    />
                </div>

            </div>
        )
    }
}