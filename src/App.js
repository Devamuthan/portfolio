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
// import FlowLine from './assets/flow-line.svg';
import Image1 from './assets/image-1.svg';
import Image2 from './assets/image-2.svg';
import Image3 from './assets/image-3.svg';
import Image4 from './assets/image-4.svg';
import Image5 from './assets/image-5.svg';
import Image6 from './assets/image-6.svg';
import ZigZagLine from './assets/zig-zag-line.svg'

import Lines from "./components/lines/Lines";
import Logo from "./components/logo/Logo";
import { ArcText } from "@arctext/react";
import styled from 'styled-components';

export default class App extends React.Component {
    render() {

        const githubURL = 'https://github.com/Devamuthan';
        const twitterURL = 'https://google.com';
        const dribbleURL = 'https://dribbble.com/Deva2001';
        const linkedinURL = 'https://www.linkedin.com/in/devamuthansankar/';
        const mailID = 'ds@presidio.com';

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
                            <a href={ linkedinURL } target={ '_blank' } rel="noreferrer">
                                <div className={ 'meet-me-button' }>
                                    <p>Meet Me</p>
                                    <img src={ MeetMeArrow } alt={ 'Meet Me Arrow' } className={ 'meet-me-arrow' }/>
                                </div>
                            </a>
                        </div>
                    </div>

                    <img src={ ContactLine } alt={ 'Contact Line' } className={ 'contact-line' }/>

                    <div className={ 'social' }>
                        <img src={ FlatLine } alt={ 'Flat Line' } className={ 'flat-line' }/>
                        <div className={ 'social-links' }>
                            <a href={ githubURL } target={ '_blank' } rel={ "noreferrer" }>
                                <img src={ Github } alt={ 'Github' } className={ 'github' }/>
                            </a>
                            <a href={ twitterURL } target={ '_blank' } rel="noreferrer">
                                <img src={ Twitter } alt={ 'Twitter' } className={ 'twitter' }/>
                            </a>
                            <a href={ dribbleURL } target={ '_blank' } rel="noreferrer">
                                <img src={ Dribble } alt={ 'Dribble' } className={ 'dribble' }/>
                            </a>
                            <a href={ linkedinURL } target={ '_blank' } rel="noreferrer">
                                <img src={ Linkedin } alt={ 'Linkedin' } className={ 'linkedin' }/>
                            </a>
                            <a href={ `mailto:${ mailID }` } target={ '_blank' } rel="noreferrer">
                                <img src={ Mail } alt={ 'Mail' } className={ 'mail' }/>
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

                <div className={ 'icon-container' }>
                    <img src={ Image1 } alt={ 'Icon 1' } className={ 'image-1' }/>
                    <img src={ Image2 } alt={ 'Icon 2' } className={ 'image-2' }/>
                    <img src={ Image3 } alt={ 'Icon 3' } className={ 'image-3' }/>
                    <img src={ Image4 } alt={ 'Icon 4' } className={ 'image-4' }/>
                    <img src={ Image5 } alt={ 'Icon 5' } className={ 'image-5' }/>
                    <img src={ Image6 } alt={ 'Icon 6' } className={ 'image-6' }/>
                </div>

                <div className={'star-content'}>
                    <svg width="700" height="600" viewBox="0 0 486 413" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_b_15_2)">
                            <path
                                d="M218.659 20.4633C230.708 4.10979 252.915 -0.956168 270.864 8.55405L287.587 17.4149C299.975 23.9787 314.858 23.7577 327.046 16.8289L343.499 7.47528C361.158 -2.56377 383.505 1.84048 396.034 17.829L407.707 32.7259C416.355 43.7609 430.041 49.6124 443.993 48.2398L462.828 46.3869C483.043 44.3982 501.667 57.5111 506.61 77.2133L511.215 95.5704C514.627 109.169 524.75 120.081 538.054 124.502L556.014 130.47C575.29 136.876 586.971 156.43 583.472 176.439L580.213 195.082C577.799 208.892 582.608 222.979 592.964 232.429L606.944 245.186C621.949 258.878 624.666 281.493 613.331 298.349L602.771 314.055C594.948 325.689 593.612 340.513 599.229 353.359L606.812 370.699C614.95 389.31 608.234 411.075 591.023 421.864L574.988 431.917C563.109 439.363 555.859 452.363 555.766 466.382L555.64 485.307C555.505 505.62 540.517 522.771 520.406 525.627L501.668 528.288C487.788 530.26 475.877 539.186 470.09 551.956L462.277 569.194C453.891 587.695 433.223 597.267 413.689 591.697L395.489 586.506C382.007 582.662 367.495 585.972 357.014 595.284L342.866 607.854C327.68 621.345 304.906 621.683 289.326 608.649L274.81 596.505C264.058 587.509 249.454 584.63 236.092 588.874L218.054 594.602C198.694 600.75 177.751 591.796 168.82 573.552L160.498 556.554C154.334 543.962 142.164 535.393 128.231 533.835L109.422 531.731C89.2354 529.473 73.7449 512.775 73.0065 492.475L72.3185 473.562C71.8089 459.552 64.1759 446.773 52.0816 439.683L35.7546 430.111C18.2312 419.837 10.8718 398.282 18.4537 379.437L25.518 361.879C30.7509 348.873 28.9754 334.095 20.8106 322.698L9.78843 307.313C-2.04145 290.8 0.00275401 268.115 14.594 253.983L28.1891 240.817C38.2597 231.063 42.6486 216.84 39.8252 203.108L36.0136 184.57C31.9227 164.673 43.0171 144.781 62.0947 137.806L79.8698 131.307C93.0369 126.493 102.831 115.284 105.837 101.591L109.896 83.1053C114.251 63.2649 132.477 49.6047 152.743 50.9923L171.624 52.285C185.611 53.2427 199.118 46.9872 207.433 35.7003L218.659 20.4633Z"
                                fill="url(#paint0_radial_15_2)" fillOpacity="0.06"/>
                            <path
                                d="M288.055 16.5313L271.332 7.67041C252.945 -2.07175 230.197 3.11776 217.854 19.8702L206.628 35.1071C198.515 46.1188 185.338 52.2216 171.693 51.2874L152.811 49.9946C132.051 48.5732 113.38 62.5666 108.919 82.8909L104.861 101.377C101.928 114.736 92.3724 125.671 79.5265 130.368L61.7513 136.866C42.2084 144.012 30.8434 164.389 35.0341 184.771L38.8457 203.309C41.6003 216.707 37.3184 230.583 27.4934 240.098L13.8983 253.265C-1.04883 267.741 -3.1429 290.98 8.97552 307.895L19.9977 323.28C27.9634 334.399 29.6956 348.817 24.5903 361.506L17.526 379.064C9.75916 398.368 17.2981 420.45 35.2489 430.973L51.5758 440.545C63.3752 447.463 70.822 459.93 71.3192 473.598L72.0072 492.512C72.7636 513.306 88.6319 530.412 109.311 532.725L128.12 534.828C141.713 536.349 153.586 544.709 159.6 556.993L167.921 573.992C177.07 592.681 198.524 601.854 218.356 595.555L236.395 589.827C249.431 585.687 263.678 588.495 274.169 597.271L288.684 609.416C304.644 622.768 327.974 622.421 343.53 608.601L357.678 596.031C367.904 586.947 382.062 583.717 395.215 587.468L413.415 592.658C433.426 598.365 454.598 588.559 463.188 569.607L471 552.369C476.647 539.911 488.267 531.202 501.809 529.278L520.546 526.617C541.148 523.691 556.501 506.122 556.64 485.314L556.766 466.389C556.857 452.711 563.93 440.029 575.519 432.764L591.554 422.711C609.185 411.659 616.065 389.364 607.728 370.299L600.145 352.958C594.665 340.426 595.969 325.963 603.601 314.613L614.161 298.907C625.772 281.639 622.989 258.473 607.618 244.447L593.638 231.69C583.535 222.47 578.843 208.728 581.198 195.254L584.458 176.611C588.041 156.114 576.076 136.083 556.329 129.521L538.369 123.553C525.389 119.24 515.513 108.594 512.185 95.3271L507.58 76.97C502.517 56.7872 483.439 43.3545 462.73 45.3917L443.895 47.2446C430.283 48.5837 416.931 42.8749 408.494 32.1091L396.821 17.2122C383.986 0.833713 361.094 -3.67796 343.005 6.60595L326.552 15.9596C314.661 22.7194 300.141 22.935 288.055 16.5313Z"
                                stroke="url(#paint1_linear_15_2)" strokeOpacity="0.26" strokeWidth="2"/>
                        </g>
                        <defs>
                            <filter id="filter0_b_15_2" x="-3.88286" y="-3.88487" width="630.192" height="628.088"
                                    filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                <feGaussianBlur in="BackgroundImage" stdDeviation="2"/>
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_15_2"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_15_2"
                                         result="shape"/>
                            </filter>
                            <radialGradient id="paint0_radial_15_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                                            gradientTransform="translate(181 105) rotate(50.009) scale(514.263 449.522)">
                                <stop stopColor="#FE5D76"/>
                                <stop offset="0.828125" stopColor="#7C6CBC"/>
                                <stop offset="1" stopColor="#007BFF"/>
                            </radialGradient>
                            <linearGradient id="paint1_linear_15_2" x1="132.5" y1="50" x2="351.5" y2="308"
                                            gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FE546F"/>
                                <stop offset="1" stopColor="#007BFF"/>
                            </linearGradient>
                        </defs>
                    </svg>

                </div>

                <div className={'zig-zag-container'}>
                    <img src={ZigZagLine} alt={'Zig Zag Line'} className={'zig-zag-'}
                </div>


                {/*<img src={ FlowLine } alt={ 'Flow Line' } className={ 'flow-line' }/>*/}

            </div>
        )
    }
}