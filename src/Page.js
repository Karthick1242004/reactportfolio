import Pg from './page.module.css';
import { useState,useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from './Images/Logo1.png';
import Logo1 from './Images/caliberlogo.png';
import Work1 from './Images/netflix.png';
import Work2 from './Images/insta.png';
import Work3 from './Images/infotube.png';
import Work4 from './Images/portfolio.png';
import Work5 from './Images/visionpro.png';
import Work6 from './Images/google.png';
import Work7 from './Images/caliber.png';
import Work8 from './Images/airmagic.png';
import Work9 from './Images/iphone.png';
import Work10 from './Images/smart.png';
import Work11 from './Images/cog.png';
import Work12 from './Images/vms.png';
import Work13 from './Images/jass.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, Element, animateScroll as scroll, scroller }  from 'react-scroll';

export default function Page() {
  const [showNavLinks, setShowNavLinks] = useState(false);
  const [mobileView, setMobileView] = useState(false);
 
  const handleToggleNav = () => {
    if (mobileView) {
      setShowNavLinks(!showNavLinks);
    }
  };

  const checkScreenSize = () => {
    setMobileView(window.innerWidth <= 750);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <main>
      <div className={Pg.main}>
        <div className={Pg.nav}>
          <div className={Pg.navb}>
            <h1>Portfolio</h1>
            <button className={Pg.navicon} onClick={handleToggleNav}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div
              className={`${Pg.navb1} ${mobileView ? 'flex-column' : ''}`}
              style={{ display: showNavLinks || !mobileView ? 'flex' : 'none' }}
            >
              <Link className={Pg.lk} to="#">
                Home</Link>
             <Link to='about' smooth={true} duration={800} className={Pg.lk} >About</Link>
             <Link to='works' smooth={true} duration={800} className={Pg.lk} >Works</Link>
             <Link to='services' smooth={true} duration={800} className={Pg.lk} >Services</Link>
             <Link to='contact' smooth={true} duration={2000} className={Pg.lk}>Contact</Link>
           </div>
           
          </div>
        </div>
        <div className={Pg.maincont} >
          <div className={Pg.cont}>
            <div className={Pg.cont1}>
              <h2 style={{ "--i": 2 }}>Hello , I'm</h2>
              <h1 style={{ "--i": 3 }}>Karthickrajan S</h1>
              <p  style={{ "--i": 4 }}> Founder of Caliber Tech , freelancing fullstack developer in MERN stack , frontend developer in NEXT JS and also a videographer</p>
            </div>
            <div className={Pg.cont2}>
              <a style={{ "--i": 5 }} className={Pg.bt1} href='https://www.linkedin.com/in/karthickrajan-s-08394b289/'><FontAwesomeIcon  className={Pg.icn11} icon={faLinkedinIn} /></a>
              <a style={{ "--i": 6 }} className={Pg.bt1} href='https://github.com/Karthick1242004'><FontAwesomeIcon  className={Pg.icn11} icon={faGithub} /></a>
              <a style={{ "--i": 7 }} className={Pg.bt1} href='https://www.instagram.com/karthick_124_/'><FontAwesomeIcon  className={Pg.icn11} icon={faInstagram} /></a>
              <a style={{ "--i": 8 }} className={Pg.bt1} href='https://wa.me/6382682378'><FontAwesomeIcon  className={Pg.icn11} icon={faWhatsapp} /></a>
              <a style={{ "--i": 9 }} className={Pg.bt1} href='https://www.threads.net/@karthick_124_'><FontAwesomeIcon  className={Pg.icn11} icon={faThreads} /></a>
            </div>
          </div>
          <div className={Pg.img}>
            <img style={{ "--i": 1 }} className={Pg.image1} src={Logo} alt="logo"/>
          </div>
        </div>
        <div id='about' className={Pg.maincont1} data-aos="fade-right" data-aos-delay="500">
          <img data-aos="fade-left" data-aos-delay="200" className={Pg.image2} src={Logo} alt="logo"/>
          <div className={Pg.abt2}>
           <h1 data-aos="fade-right" data-aos-delay="300">Who am I?</h1>
           <p data-aos="fade-right" data-aos-delay="400">I am a engineering student who is currently pursuing BE Computer Science in Kongu Enginnering College in Tamil Nadu. Iam a fullstack developer who works in MERN stack technology and also a frontend developer in NEXT JS frame work. Started Caliber Tech and did some projects for small vendors, Worked on many freelancing projects which are listed below in this web page. Won competitions in web development and also participated in Smart India Hackathon 2023. My main hobby is videography , I like to capture moments and nature. Feel free to check out my social media pages for my videographic contents. </p>
           <a  href='https://drive.google.com/file/d/1hA85SZgz6rgw-Cff1zUaWZHRx-X_ZADO/view?usp=sharing' className={Pg.bt3}>Download Resume</a>
          </div>
        </div>
        <div id='services' className={Pg.maincont4}data-aos="fade-left" data-aos-delay="500">
          <div className={Pg.ca}>
            <div className={Pg.ca1}>
              <h1 data-aos="fade-left" data-aos-delay="500">Caliber Tech</h1>
              <p data-aos="fade-left" data-aos-delay="500">Your input is our desire, our output is your desire . Caliber tech builds web applications for customers by using their inputs and as well as provides technical support and maintenance to the customer's application. We develope web pages for small scale shops and small vendors in a very affordable money. We also provide updation services with a minimal amount of charge . A trustful service for customers at anytime . Portfolio website starts from ₹2000 (Single Page) . Business or Commercial websites starts from ₹4000 (1-4 Pages) . Customer application service is provided from ₹500 / Month. To know further more visit our we page.</p>
              <a  href='https://calibertech.netlify.app/' className={Pg.bt4}>Visit Our Page</a>
            </div>
            <img data-aos="fade-right" data-aos-delay="500" className={Pg.image5} src={Logo1} alt="logo"/>
          </div>
        </div>
        <div className={Pg.maincont2}>
          <div className={Pg.sk1}>
            <h1 data-aos="fade-right" data-aos-delay="500">My Skills</h1>
            <p data-aos="fade-left" data-aos-delay="500">- I like to craft beatiful and responsive web pages -</p>
          </div>
          <div className={Pg.sk2}>
              <div className={Pg.skk1}>
                  <div data-aos="fade-right" data-aos-delay="500" className={Pg.sk21}>
                    <h1>Frontend  Development</h1>
                    <p>Clean and seemless experience for users , search engines and converting users to customers.</p>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="600" className={Pg.sk21}>
                    <h1>Always Responsive Design</h1>
                    <p>Always responsive pages , adaptive for all mobile , tablets , laptops and displays of users.</p>
                  </div>
                  <div data-aos="fade-right" data-aos-delay="700" className={Pg.sk21}>
                    <h1>Optimized Code For Performance</h1>
                    <p>Well optimized code for performance using React JS and NEXT JS and also search engines optimized for better user expreince.</p>
                  </div>
                  <div  data-aos="fade-right" data-aos-delay="800" className={Pg.sk21}>
                    <h1>High Qality Videographic Content</h1>
                    <p>Started videography as a hobby and now a good and quality video creator. Visit my Instagram to view my videography works there </p>
                  </div>
              </div>
              <div className={Pg.skk2}>
                 <div data-aos="fade-left" data-aos-delay="200" className={Pg.skk21}>
                    <h2>React JS</h2>
                    <span className={Pg.bar}><span className={Pg.react}></span><p className={Pg.barp}> - 75%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="300" className={Pg.skk21}>
                    <h2>HTML</h2>
                    <span className={Pg.bar}><span className={Pg.html}></span><p className={Pg.barp}> - 80%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="400" className={Pg.skk21}>
                    <h2>CSS</h2>
                    <span className={Pg.bar}><span className={Pg.css}></span><p className={Pg.barp}> - 80%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="500" className={Pg.skk21}>
                    <h2>NEXT JS</h2>
                    <span className={Pg.bar}><span className={Pg.next}></span><p> -70%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="600" className={Pg.skk21}>
                    <h2>Tailwind CSS</h2>
                    <span className={Pg.bar}><span className={Pg.tail}></span><p> - 60%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="700" className={Pg.skk21}>
                    <h2>Node JS</h2>
                    <span className={Pg.bar}><span className={Pg.node}></span><p> - 60%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="800" className={Pg.skk21}>
                    <h2>Mongo DB</h2>
                    <span className={Pg.bar}><span className={Pg.mongo}></span><p> - 70%</p></span>
                  </div>
                 <div data-aos="fade-left" data-aos-delay="900" className={Pg.skk21}>
                    <h2>MYSQL</h2>
                    <span className={Pg.bar}><span className={Pg.mysql}></span><p> - 65%</p></span>
                  </div>
              </div>
          </div>
        </div>
        <div className={Pg.maincont3}>
          <div className={Pg.mainc1}>
            <h1 id='works' data-aos="fade-left" data-aos-delay="500">My Works</h1>
          </div>
          <div className={Pg.mainc2}>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work1} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Netflix Clone</h1>
                   <h6>MERN Stack - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_mernstack-netflixclone-fullstackdev-activity-7160298236484677632-3Zeo?utm_source=share&utm_medium=member_ios'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/Netflix-Clone-App'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                   <a href='https://karthicknetflixclone.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
               <p className={Pg.prp}> • This is a Netflix website clone created for practicing API fetch , post , rendering components in other pages and also for writing API for Email and Password GET and POST in MongoDB using Node JS and Express JS . It also gave a good knowlegde over React states and hooks.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work3} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Infotube (SIH2023)</h1>
                   <h6>MERN Stack - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                 </div>
               </div>
              
               <p className={Pg.prp}> • As a part of Smart India Hackathon 2023, we selected a problem statement for developing a <b>'Online integrated platform for students to upload project details'</b>. We developed this project and got selected for college level hackathon after clearing project presetation round.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Team Project(Team Leader, Frontend Developer)</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work12} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>CSEA-Cognissance Website</h1>
                   <h6>React JS - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                   <a href='https://csea-cognissance.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
              
               <p className={Pg.prp}> • As a part of <b>Computer Science and Engineering Association</b> ,I developed this webpage for my Computer Science Department symposium named <b>'Cognissance2k24'</b> with great passion and detication in my work.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project(Team Leader, Frontend Developer)</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work11} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Vehicle Management System</h1>
                   <h6>MERN Stack - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                   <a href='https://kec-vms.vercel.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
              
               <p className={Pg.prp}> • As a part of Web-App event conducted by <b>'EHORYZON2024'</b> we developed a <b>Vehicle Management System</b> for our college vehicles with a feature of notifying the drivers and VMS admin about next service date via SMS.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Team Project(Team Leader, Full Stack Developer)</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work13} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Jass-Media (Freelancing)</h1>
                   <h6>MERN Stack - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_sih2023-studentinnovation-reactjs-activity-7121559521478537216-gf0-?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/infotubesih'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                   <a href='https://jassmedia.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
              
               <p className={Pg.prp}> • By doing freelancing via our company <b>Caliber Tech</b> we got a project for developing a webpage with a contact us form connected via email for a company named <b>Jass-Media</b> , It is a media company in Tamil Nadu. </p>
               <p className={Pg.prp}> <b>Project Type :</b> Team Project(Team Leader, Full Stack Developer)</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work2} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Instagram Clone</h1>
                   <h6>NEXT JS - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_nextjs-frontenddevelopment-instagramclone-activity-7157236046735310848-tgA6?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/Instagram-Clone'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                 </div>
               </div>
               <p className={Pg.prp}> • This is a Instagram clone created using NEXT JS framework. This is my first project in NEXT JS.It is just a complete frontend clone of Instagram. It gave a brief knowlegde about NEXT JS project structure , routing and rendering components across pages . It was a great experience in frontend development</p>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>   
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work4} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>3D Portfolio</h1>
                   <h6>React JS & Three JS - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdevelopment-threejs-blenderart-activity-7157677820071084032-uJof?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/3Dportfolio'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /></a>
                 </div>
               </div>
               <p className={Pg.prp}> • This a prototype of my 1st 3D model integration in ReactJS. With the help of Blender,Spline and Three JS I was able to make a 3D immersible game world into the hands of web. This gave a good experience in using Blender and Spline. ThreeJS gave a good knowledge on orbit controlling and scene management.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>   
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work5} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Vision Pro Web Clone - Web</h1>
                   <h6>HTML,CSS & JS</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdesign-javascriptmagic-responsivedesign-activity-7106280737900740608-EWa1?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/applevisionproui'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                   <a href='https://karthick1242004.github.io/applevisionproui/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
               <p className={Pg.prp}> • This is Apple Vision Pro website clone . This project gave a good handson experience in javascript parallax animation and adaptive scrolling in web page. The website inspired me to a lot and I wanted to try to make it and i did it. This is one of the project that took me so much time to complete than other projects.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>   
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work6} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Elder To-Do List</h1>
                   <h6>React JS - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_teamwork-hackathon-frontenddesign-activity-7126593601203048448-T-6q?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/Googlehackathon'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                 </div>
               </div>
               <p className={Pg.prp}><b>•</b> Created with the problem statement provided by Google Hackathon ,IIT Patna. This is a To-Do list app for elderly people , they can maintain their daily activities and reminders for medicine timeings and hospital appointments and also to chat with their caretakers . This is only a frontend of the application in ReactJS.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Team Project(Frontend Developer)</p>   
            </div>


            {/* from herer */}


            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work7} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>Caliber Tech</h1>
                   <h6>MERN Stack - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_webdevelopment-reactjs-nodejs-activity-7162115397318627328-1q_j?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://github.com/Karthick1242004/Caliber-Tech-App'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                   <a href='https://calibertech.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
               <p className={Pg.prp}><b>•</b> This is a landing page created for my own startup named <b>Caliber Tech</b>. Caliber Tech is a web based startup which provides web pages for small shops and vendors in affordable price with unaffordable quality. This is started using three of my classmates who are so enthusiastic about web development .</p>
               <p className={Pg.prp}> <b>Project Type :</b> Team Project(Designer and Frontend Developer)</p>    
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work8} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>AirMagic</h1>
                   <h6>HTML,CSS,JS & NodeJS - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://github.com/Karthick1242004/airmagic'><FontAwesomeIcon  className={Pg.icn2} icon={faGithub} /> </a>
                 </div>
               </div>
               <p className={Pg.prp}><b>•</b> This is a freelancing project done by <b>Caliber Tech</b>. A ecommerce page for photo frames . We (Caliber Tech) were only asked to develope the frontend for the ecommerce site. The backend team needs the project only in HTML . With constent meetings with the coustomer , we were able to develope the website .</p>
               <p className={Pg.prp}> <b>Project Type :</b> Team Project(Designer and Full-Frontend Developer)</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="100" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work9} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>iPhone 14 Pro Web Clone</h1>
                   <h6>React JS - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                 <a href='https://www.linkedin.com/posts/karthickrajan-s-08394b289_reactjs-hooks-ui-activity-7100661194142691328-Qlz7?utm_source=share&utm_medium=member_desktop'><FontAwesomeIcon  className={Pg.icn2} icon={faLinkedin} /></a>
                   <a href='https://iphone14propromax124.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
               <p className={Pg.prp}><b>•</b> This is a iPhone 14 Pro Max website clone . The design , style , images , animations and layouts inspired me to clone this website . It was challenging and also intresting  to devlope . It made me understand more about ReactJS Hooks concept. Apple websites are fun to clone. A good process for beginners like me.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>
            </div>
            <div data-aos="fade-right" data-aos-delay="200" className={Pg.mainc21}>
              <div className={Pg.im}>
                  <img src={Work10} alt="Netflix" className={Pg.w1}></img>
               </div>
               <div className={Pg.mn}>
                <div className={Pg.mn1}>
                   <h1>iPhone 14 Pro Web Clone</h1>
                   <h6>React JS - Web</h6>
                 </div>
                 <div className={Pg.mn2}>
                   <a href='https://applevisionproui.netlify.app/'><FontAwesomeIcon  className={Pg.icn2} icon={faPaperclip} /></a>
                 </div>
               </div>
               <p className={Pg.prp}><b>•</b> This is a UI concept for <b>Smart Home App</b> in apple vision pro. Creating a UI and developing the frontend for this application in Spatial Computing is such a challenging work. So i just tried a sample ReactJS clone. The technology needed to implement this app is no were near a comman man's power.</p>
               <p className={Pg.prp}> <b>Project Type :</b> Solo Project</p>
            </div>
          </div>
        </div>
        <div id='contact' className={Pg.maincont5} data-aos="fade-left" data-aos-delay="400" >
          <div className={Pg.contact}>
            <div className={Pg.contact2}>
              <h1>Personal Email: <span className={Pg.sp}><b>@karthick1242004@gmail.com</b></span></h1>
              <h1>Company Email: <span className={Pg.sp}><b>@calibertech875@gmail.com</b></span></h1>
            </div>
            <img className={Pg.image121} src={Logo} alt="logo"/>
            <div className={Pg.contact1}>
              <h1>Designed and developed by <span className={Pg.sp}><b>Karthickrajan S</b></span> Copyright 2023.Powered by <Link className={Pg.likn} to='https://calibertech.netlify.app/'><b>#Caliber Tech.</b></Link></h1>
            </div>
          </div>
        </div>
     </div>  
    </main>
  );
}
