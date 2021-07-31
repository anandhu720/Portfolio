import React,{useEffect} from 'react'
import Navbar from '../navbar/Navbar';
import './home.css';

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
import { GitHub, LinkedIn, Mail } from '@material-ui/icons';
import { Instagram } from '@material-ui/icons';

 
const Home = () => {

    useEffect(() =>{
        Aos.init({duration:2000});
    },[])

    return (
        <div className="main">
        <div className='home' id="home">
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
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/_a_na_ndhu__/"><InstaIcon/></a>
                    </div>
                    <div className="col-md-1 logo-home">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anandha-krishnan-8077551b8/"><LinkdenIcon/></a>
                    </div>
                    <div className="col-md-1 logo-home">
                        <a target="_blank" rel="noreferrer" href="https://github.com/anandhu720"><GithubIcon/></a>
                    </div>
                </div>
                <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/17TLcPVrp0gJnLTRgP8suWBxzFPsRw0Wa/view?usp=sharing" className="btn">RESUME</a> 
            </div>
            <div className="home_second">
                <div className="container">
                    <div className="row">
                        <div data-aos="fade-right" className="col-lg-6">
                            <img src={mainImage} alt="" />
                        </div>
                        <div id="about" data-aos='fade-left' className="col-lg-6">
                            <h1 className="home_second_heading">
                                WHO AM I <span style={{color:'#EB662D'}}> ?</span> 
                            </h1>
                            <span className="home_second_dis">
                            My Name is Anandha Krishnan Valiyaveetil Kamalon .
                            I Am from Kerala,India.I am 19 years old now.
                            Currently I am pursuing Bachelor's degree in Computer Science Engineering at LPU Punjab.
                            I finished my high school education at Kasaragod,Kerala.
                            I have a great knowledge in Web development and I have finished many projects like YouTube clone,
                            Disney+ Hotstar UI clone,To-do list.Now I am trying to master Block Chain.
                            I am so fascinated about Web 3.0 and block chain.I strongly believe that block chain
                            can bring lot of changes in our world.I see a great future in block chain development.
                            So I am now trying to master Block Chain development.
                            </span>
                        </div>
                    </div>
                    <div className="row">
                        <div data-aos="fade-right" className="col-lg-6 ">
                            <h1 className="home_second_heading">
                                WHAT I DO <span style={{color:'#EB662D'}}> ?</span> 
                            </h1>
                            <span className="home_second_dis">
                                I am a full stack web developer.I use to create responsive
                                modern web apps that helps others and makes others work easy.
                                I have great knowledge in frontend development using React.js and 
                                I love to use React.js.It helps to developers to create simple and powerful 
                                user interfaces.I have also worked with redux for state management in large scale web apps.
                                I use Nodejs,Express.js and mongodb in backend development.Now I am studying 
                                Block Chain development.Currently I am working with Solidity and Ethereum to 
                                create Web 3.0 apps.I strongly believe Web 3.0 will make revolution in internet. 
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
                        ALSO I HAVE GOOD KNOWLEDGE IN FIREBASE.
                        I USALLY WORK WITH REACT,JS
                        FRAMEWORK,REDUX,BOOTSTRAP AND MATERIAL UI
                        IN FRONT-END AND NODE.JS,
                        EXPRESS.JS AND MONGODB
                        IN BACKEND.CURRENTLY I AM WORKING WITH SOLIDITY AND ETHEREUM TO CREATE SMART CONTRACTS AND
                        TO MAKE FUTURESTIC WEB 3.0 WEB USING BLOCKCHAIN.
                        
                        </span>
                    </div>
                    <div data-aos="fade-left" className="col-lg-6">
                        <img width="100%" src={codingImage} alt="" />
                    </div>
                </div>
                <div data-aos="fade-left" className="scrollmenu">
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
                <div data-aos='fade-left' className="container-fluid">
                    <div className="row flex-nowrap">
                    {
                                cards.map(card =>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="card card-block" style={{
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
        <footer className="footer">
                <div className="footer_content">
                    <h3>ANANDHA KRISHNAN V K</h3>
                    <p>KASARGOD,KERALA</p>
                    <p>anandhu4310@gmail.com</p>
                    <p>PH NO : 7025125075</p>
                    <ul className="footer_content_socials">
                        <li><a target="_blank" rel="noreferrer" href="https://github.com/anandhu720"><GitHub/></a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.instagram.com/_a_na_ndhu__/"><Instagram/></a></li>
                        <li><a target="_blank" rel="noreferrer" href="mailto:anandhu4310@gmail.com"><Mail/></a></li>
                        <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/anandha-krishnan-8077551b8/"><LinkedIn/></a></li>

                    </ul>
                </div>
                <div className="footer_bottom">
                    <p>Copyright &copy;2021-22.Designed by <span>Anandha Krishnan</span></p>
                </div>
            </footer>
        </div>
    )
}

export default Home
