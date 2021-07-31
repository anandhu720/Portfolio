import React,{useEffect} from 'react'
import Navbar from '../navbar/Navbar';
import './_home.scss';

import {ReactComponent as GithubIcon} from '../../images/github.svg';
import {ReactComponent as LinkdenIcon} from '../../images/linkden.svg';
import {ReactComponent as InstaIcon} from '../../images/insta.svg';
import {ReactComponent as JsIcon} from '../../images/javascript.svg';
import {ReactComponent as ReactIcon} from '../../images/react.svg';
import {ReactComponent as ReduxIcon} from '../../images/redux.svg';
import {ReactComponent as SolidityIcon} from '../../images/Solidity.svg';
import {ReactComponent as EthereumIcon} from '../../images/Ethereum.svg';
import {ReactComponent as NodeIcon} from '../../images/nodejs.svg';
import {ReactComponent as MongoIcon} from '../../images/mongodb.svg';
import {ReactComponent as SassIcon} from '../../images/sass.svg';
import {ReactComponent as CIcon} from '../../images/c.svg';
import {ReactComponent as HtmlIcon} from '../../images/html.svg';
import {ReactComponent as CssIcon} from '../../images/css.svg';
import {ReactComponent as PythonIcon} from '../../images/python.svg';
import {ReactComponent as BootstrapIcon} from '../../images/bootstrap.svg';
import {ReactComponent as JqueryIcon} from '../../images/jquery.svg';


import mainImage from '../../images/me.png';
import blockchainImage from '../../images/blockchain.png';
import codingImage from '../../images/coding.png';

import cards from '../../cards'

import Aos from 'aos';
import 'aos/dist/aos.css';

 
const Home = () => {

    useEffect(() =>{
        Aos.init({duration:2000});
    },[])

    return (
        <div className='home'>
            <Navbar/>
            <div className="home_heading">
                <h2 className="heading-main" data-text='HELLO THERE !'>HELLO THERE !</h2>
                <h1 data-text='MY NAME IS ANANDHA KRISHNAN'>MY NAME IS ANANDHA KRISHNAN</h1>
                <div data-aos='fade-zoom-in' className="row">
                <span className="col-lg-6 home_heading_dis">I AM A BLOCK CHAIN DEVELOPER WITH WEB DEVELOPMENT SKILLS.<br/>
                    I AM A CURRENTLY PURSUING MY COMPUTER SCIENCE ENGINEERING DEGREE AT LPU.
                    LETS CHANGE THE WORLD WITH BLOCK CHAIN !!!</span>
                </div>
                <div className="row">
                    <div className="col-md-1 logo-home">
                        <InstaIcon/>
                    </div>
                    <div className="col-md-1 logo-home">
                        <LinkdenIcon/>
                    </div>
                    <div className="col-md-1 logo-home">
                        <GithubIcon/>
                    </div>
                </div>
                <button className="btn">RESUME</button> 
            </div>
            <div className="home_second">
                <div className="container">
                    <div className="row">
                        <div data-aos="fade-right" className="col-lg-6">
                            <img src={mainImage} alt="" />
                        </div>
                        <div data-aos='fade-left' className="col-lg-6">
                            <h1 className="home_second_heading">
                                WHO AM I <span style={{color:'#EB662D'}}> ?</span> 
                            </h1>
                            <span className="home_second_dis">
                            It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout. The point of using Lorem 
                            Ipsum is that it has a more-or-less normal distribution of letters, as 
                            opposed to using 'Content here, content here', making it look like 
                            readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search f
                            or 'lorem ipsum' will uncover many web sites still in their infancy. 
                            Various versions have evolved over the years, sometimes by accident, 
                            sometimes on purpose (injected humour and the like).
                            editors now use Lorem Ipsum as their default model text, and a search f
                            or 'lorem ipsum' will uncover many web sites still in their infancy. 
                            Various versions have evolved over the years, sometimes by accident, 
                            sometimes on purpose (injected humour and the like
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div data-aos="fade-right" className="col-lg-6 ">
                            <h1 className="home_second_heading">
                                WHAT I DO <span style={{color:'#EB662D'}}> ?</span> 
                            </h1>
                            <span className="home_second_dis">
                            It is a long established fact that a reader will be distracted by the readable 
                            content of a page when looking at its layout. The point of using Lorem 
                            Ipsum is that it has a more-or-less normal distribution of letters, as 
                            opposed to using 'Content here, content here', making it look like 
                            readable English. Many desktop publishing packages and web page
                            editors now use Lorem Ipsum as their default model text, and a search f
                            or 'lorem ipsum' will uncover many web sites still in their infancy. 
                            Various versions have evolved over the years, sometimes by accident, 
                            sometimes on purpose (injected humour and the like).
                            editors now use Lorem Ipsum as their default model text, and a search f
                            or 'lorem ipsum' will uncover many web sites still in their infancy. 
                            Various versions have evolved over the years, sometimes by accident, 
                            sometimes on purpose (injected humour and the like
                            </span>
                        </div>
                        <div data-aos="fade-left" className="col-lg-6">
                            <img src={blockchainImage} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home_third container">
                <h2 data-text="MY SKILLS">MY SKILLS</h2>
                <div className="row">
                    <div data-aos="fade-right" className="col-lg-6">
                        <span>
                        AS A WEB DEVELOPER I AM
                        REALLY GOOD AT HTML,CSS,
                        SCSS AND JAVASCRIPT.
                        I USALLY WORK WITH REACT,JS
                        FRAMEWORK AND REDUX
                        IN FRONT-END AND NODE.JS,
                        EXPRESS.JS AND MONGODB
                        IN BACKEND.ALSO I WORK WITH SOLIDITY TO CREATE SMART CONTRACTS AND MAKE FUTURESTIC WEB 3.0 WEB APPS USING BLOCKCHAIN.
                        AS A WEB DEVELOPER I AM
                        REALLY GOOD AT HTML,CSS,
                        SCSS AND JAVASCRIPT.
                        I USALLY WORK WITH REACT,JS
                        FRAMEWORK AND REDUX
                        IN FRONT-END AND NODE.JS,
                        EXPRESS.JS AND MONGODB
                        IN BACKEND.ALSO I WORK WITH SOLIDITY TO CREATE SMART CONTRACTS AND MAKE FUTURESTIC WEB 3.0 WEB APPS USING BLOCKCHAIN.
                        </span>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6">
                        <img width="100%" src={codingImage} alt="" />
                    </div>
                </div>
                <div data-aos="fade-left" class="scrollmenu">
                    <JsIcon className="icons" />
                    <ReactIcon className="icons" />
                    <ReduxIcon className="icons" />
                    <SolidityIcon className="icons" />
                    <EthereumIcon className="icons" />
                    <NodeIcon className="icons1" />
                    <MongoIcon className="icons" />
                    <BootstrapIcon className="icons" />
                    <SassIcon className="icons" />
                    <JqueryIcon className="icons" />
                    <HtmlIcon className="icons" />
                    <CssIcon className="icons" />
                    <PythonIcon className="icons" />
                    <CIcon className="icons" /> 
                </div>
            </div>
            <div className="home_fourth">
                <h1 data-aos="fade-down"><span style={{color:'#EB662D'}}>MY POPULAR </span>WORKS</h1>
                <div data-aos='fade-left' class="container-fluid">
                    <div class="row flex-nowrap">
                    {
                                cards.map(card =>
                                    <div class="col-lg-3 col-md-6">
                                        <div class="card card-block" style={{
                                            backgroundImage: `url(${card.img})`
                                        }}>
                                            <div className="card-content mt-auto">
                                                <div className="card-title">
                                                    <h2>{card.title}</h2>
                                            </div>
                                            <div className="card-body">
                                                {card.content}
                                            </div>
                                            <a target="_blank" rel="noreferrer"  href={card.link} className="button">Source code</a>
                                        </div>
                                    </div>
                                </div>
                                    )
                            }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
