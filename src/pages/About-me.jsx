import C from '../assets/C.png';
import git from '../assets/git.png';
import html from '../assets/html.png';
import linux from '../assets/linux.png';
import nodejs from '../assets/nodejs.png';
import python from '../assets/python.png';
import react from '../assets/react.png';
import sql_server from '../assets/sql-server.png';
import css from '../assets/css-3.png';
import js from '../assets/js.png';

function AboutMe(){
    return(
        <div name="about-me" className="aboutMe">
            <div className="pseudo"></div>
            <div className="about_me_cont">
                    <div className="abount_me_info">
                        <h1>ABOUT ME</h1>
                        <p>Hey there! I'm an easy going full stack web developer named <b>Ntsako</b>. I implement stunning interfaces and reliable backends using my knowledge in front-end and back-end technologies, as well as HTML, CSS, and JavaScript.</p>
                        <p>When I'm not coding, I find inspiration in nature and try to maintain a healthy work-life balance by spending time with friend and family, meditation, and trying to dance <i>(emphasis on trying)</i>. I'm your man if you're seeking for a web developer who can turn dreams into code and code into reality.</p>
                        <p>Together, let's set out on a remarkable journey to build websites that will improve the quality of life on the internet. Are you prepared to bring joy to the digital world? Let's talk!</p>
                        <h2>TECH STACK</h2>
                    </div>
                <div className="stack_icons">
                    <img src={C}/>
                    <img src={python} />
                    <img src={css}/>
                    <img src={js} />
                    <img src={nodejs} />
                    <img src={html} />
                    <img src={sql_server} />
                    <img src={git }/>
                    <img src={react} />
                    <img src={linux} />
                </div>
            </div>
        </div>
    )
}
export default AboutMe;