(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{6096:(e,t,a)=>{Promise.resolve().then(a.bind(a,7023))},7023:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>eE});var n=a(5155),s=a(2115),i=a(698),o=a(4918),r=a(5285),l=a(6980);let c=()=>(0,n.jsxs)("svg",{id:"logo",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",width:"100",height:"100",fill:"none",children:[(0,n.jsx)("title",{children:"Loader Logo"}),(0,n.jsxs)("g",{children:[(0,n.jsx)("g",{id:"RS",transform:"translate(11.000000, 5.000000)",opacity:"0",children:(0,n.jsx)("text",{x:"39",y:"49",fontSize:"27",fill:"#d3d3d3",textAnchor:"middle",dominantBaseline:"middle",fontFamily:"'Playfair Display', serif",children:"RS"})}),(0,n.jsx)("path",{stroke:"#d3d3d3",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",d:"M 50,5 L 5,50 L 50,95 L 95,50 Z",strokeDasharray:"300",strokeDashoffset:"300"})]})]});function d(){let e=(0,i._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n\n  .logo-wrapper {\n    width: max-content;\n    max-width: 100px;\n    transition: opacity 0.5s ease-in-out;\n    opacity: ",";\n    svg {\n      display: block;\n      width: 100%;\n      height: 100%;\n      margin: 0 auto;\n      fill: none;\n      user-select: none;\n\n      #B {\n        opacity: 0;\n      }\n    }\n  }\n"]);return d=function(){return e},e}let h=r.Ay.div.withConfig({shouldForwardProp:e=>"isMounted"!==e})(d(),e=>e.isMounted?1:0),m=e=>{let{finishLoading:t}=e,[a,i]=(0,s.useState)(!1),r=(0,s.useCallback)(()=>{l.A.timeline({complete:()=>t()}).add({targets:"#logo path",strokeDashoffset:[l.A.setDashoffset,0],duration:1e3,delay:400,easing:"easeInOutQuart"}).add({targets:"#logo #RS",opacity:1,duration:700,easing:"easeInOutQuart"}).add({targets:"#logo",delay:500,duration:300,easing:"easeInOutQuart",opacity:0,scale:.1}).add({targets:".loader",duration:200,easing:"easeInOutQuart",opacity:0,zIndex:-1})},[t]);return(0,s.useEffect)(()=>{let e=setTimeout(()=>i(!0),10);return r(),()=>clearTimeout(e)},[r]),(0,n.jsxs)(h,{className:"loader",isMounted:a,children:[(0,n.jsx)(o.mg,{bodyAttributes:{class:"hidden"}}),(0,n.jsx)("div",{className:"logo-wrapper",children:(0,n.jsx)(c,{})})]})};var _=a(6925),u=a(8830),p=a(9371),g=a(8763),f=a(8641),x=a.n(f),b=a(8173),j=a.n(b);let k=()=>{let[e,t]=(0,s.useState)(!1),a=(e,a)=>{e.preventDefault();let n=document.getElementById(a);n&&n.scrollIntoView({behavior:"smooth"}),t(!1)};return(0,s.useEffect)(()=>{let e=()=>{window.innerWidth>768&&t(!1)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]),(0,n.jsxs)(_.a,{className:x().header,children:[(0,n.jsxs)(u.Y,{justify:"space-between",align:"center",className:x().container,children:[(0,n.jsx)(u.Y,{align:"center",gap:"sm",children:(0,n.jsx)(j(),{href:"/",className:x().rs,children:"RS"})}),(0,n.jsx)(u.Y,{gap:"lg",className:"".concat(x().navLinks," ").concat(x().desktopNav),children:["about","journey","projects","skills","contact"].map((e,t)=>(0,n.jsxs)(p.E,{component:"a",href:"#".concat(e),className:x().link,onClick:t=>a(t,e),style:{animationDelay:"".concat(.15*t,"s")},children:[(0,n.jsx)("span",{className:x().bracket,children:"<"})," ",e.charAt(0).toUpperCase()+e.slice(1)," ",(0,n.jsx)("span",{className:x().bracket,children:">"})]},e))}),(0,n.jsx)("div",{className:x().hamburger,children:(0,n.jsx)(g.o,{toggled:e,toggle:()=>{t(!e)},size:20})})]}),(0,n.jsx)("div",{className:"".concat(x().drawer," ").concat(e?x().open:""),children:["about","journey","projects","skills","contact"].map(e=>(0,n.jsxs)(p.E,{component:"a",href:"#".concat(e),className:x().menuItem,onClick:t=>a(t,e),children:[(0,n.jsx)("span",{className:x().bracket,children:"<"})," ",e.charAt(0).toUpperCase()+e.slice(1)," ",(0,n.jsx)("span",{className:x().bracket,children:">"})]},e))})]})};var y=a(2994),S=a(7691),w=a(1663);let v={src:"/_next/static/media/face.358221cf.jpg"};var N=a(1579),I=a.n(N),A=a(5574),T=a(1694);function R(){return(0,n.jsx)(y.m,{size:"md",children:(0,n.jsxs)("div",{className:I().inner,children:[(0,n.jsxs)("div",{className:I().content,children:[(0,n.jsx)(p.E,{className:I().introText,children:"Hi there, I'm"}),(0,n.jsx)(S.h,{className:I().mainTitle,children:"Rohan Shah"}),(0,n.jsxs)(p.E,{className:I().location,children:[(0,n.jsx)(A.A,{size:20,className:I().locationIcon})," San Francisco Bay Area, California"]}),(0,n.jsx)(p.E,{className:I().description,children:"I'm currently a second-year Computer Science student at Purdue University. What really motivates me is what I work on outside of the classroom!"}),(0,n.jsxs)(p.E,{className:I().description,children:["Right now, I'm developing"," ",(0,n.jsx)(j(),{href:"https://algowar.xyz",className:I().link,target:"_blank",rel:"noopener noreferrer",children:"algowar.xyz"})]}),(0,n.jsxs)(j(),{href:"/Rohan_Shah_Resume.pdf",className:I().customButton,download:"Rohan_Shah_Resume.pdf",target:"_blank",rel:"noopener noreferrer",children:["Resume",(0,n.jsx)("span",{className:I().icon,children:(0,n.jsx)(T.A,{size:20})})]})]}),(0,n.jsx)(w._,{src:v.src,className:I().image,alt:"Rohan Shah"})]})})}var E=a(7049),L=a.n(E);function C(){return(0,n.jsx)("section",{id:"home",className:L().pageSection,children:(0,n.jsx)(R,{})})}var z=a(8975),F=a.n(z);let B={src:"/_next/static/media/about-1.3978aa41.jpg"},W={src:"/_next/static/media/about-2.b8b6b970.jpg"},P={src:"/_next/static/media/about-3.94e97520.jpg"},D={src:"/_next/static/media/about-4.31ad64a8.jpg"},M={src:"/_next/static/media/about-5.1e8f3e70.jpg"};function O(e){let t=(0,s.useRef)(null),[a,n]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let a=t.current;if(!a)return;let s=new IntersectionObserver(e=>{let[t]=e;t.isIntersecting&&(n(!0),s.unobserve(t.target))},e||{threshold:.1});return s.observe(a),()=>{s.disconnect()}},[t,e]),[t,a]}function G(){let[e,t]=O({threshold:.3}),[a,s]=O({threshold:.3}),[i,o]=O({threshold:.3}),[r,l]=O({threshold:.3}),[c,d]=O({threshold:.3}),[h,m]=O({threshold:.3}),[_,u]=O({threshold:.3});return(0,n.jsx)(y.m,{size:"lg",children:(0,n.jsxs)("div",{className:F().inner,children:[(0,n.jsxs)("div",{className:F().imageGrid,children:[(0,n.jsxs)("div",{className:F().topRow,children:[(0,n.jsx)(w._,{ref:e,src:B.src,alt:"Profile",className:"".concat(F().profileImage," ").concat(t?F().animate:"")}),(0,n.jsx)(w._,{ref:a,src:W.src,alt:"Dog",className:"".concat(F().dogImage," ").concat(s?F().animate:"")})]}),(0,n.jsxs)("div",{className:F().middleRow,children:[(0,n.jsx)(w._,{ref:c,src:M.src,alt:"Climbing",className:"".concat(F().climbingImage," ").concat(d?F().animate:"")}),(0,n.jsx)(w._,{ref:r,src:D.src,alt:"Basketball",className:"".concat(F().basketballImage," ").concat(l?F().animate:"")})]}),(0,n.jsx)(w._,{ref:i,src:P.src,alt:"Landscape",className:"".concat(F().landscapeImage," ").concat(o?F().animate:"")})]}),(0,n.jsxs)("div",{className:F().content,children:[(0,n.jsx)(S.h,{ref:h,className:"".concat(F().mainTitle," ").concat(m?F().animate:""),children:"01. ABOUT"}),(0,n.jsx)(p.E,{ref:_,className:"".concat(F().description," ").concat(u?F().animate:""),children:"Growing up in the Bay Area, near the heart of Silicon Valley, I was surrounded by technology and innovation from an early age. Building my first PC with my dad at 11 sparked a curiosity about how things work that has stuck with me ever since. Over the years, through school, internships, and personal projects, I've built a solid foundation in software development, gaining hands-on experience and sharpening my skills. I'm driven by the excitement of tackling new challenges, building creative solutions, and constantly learning—things that keep me passionate about this field."}),(0,n.jsx)(p.E,{className:"".concat(F().description," ").concat(u?F().animate:""),children:"When I'm not coding, you can see me at the gym lifting, bouldering, on a hike, or playing my guitar! I also love traveling. Visiting places around the world has unlocked vast creativity, inspiring fresh ideas and innovative solutions to challenges."})]})]})})}function U(){return(0,n.jsx)("section",{id:"about",className:L().pageSection,children:(0,n.jsx)(G,{})})}var J=a(7057);a(7917);var Q=a(4974),V=a(5221);let H=()=>{let e=[{icon:(0,n.jsx)(Q.A,{}),title:"Saint Francis High School",subtitle:"High School Diploma",location:"Mountain View, CA",date:"2019 - 2023",url:"https://www.sfhs.com/"},{icon:(0,n.jsx)(Q.A,{}),title:"Purdue University",subtitle:"B.S. in Computer Science, Machine Learning Concentration",location:"West Lafayette, IN",date:"2023 - WIP",url:"https://www.purdue.edu/"},{icon:(0,n.jsx)(V.A,{}),title:"ThetaRho",subtitle:"Software Engineer Intern",location:"San Jose, CA",date:"Summer 2024",url:"https://www.thetarho.ai/"},{icon:(0,n.jsx)(V.A,{}),title:"Visa",subtitle:"Software Engineer Intern",location:"Austin, TX",date:"Summer 2025",url:"https://www.visa.com/"}];return(0,n.jsx)(J.VerticalTimeline,{lineColor:"#fff",layout:"2-columns",children:e.map((e,t)=>(0,n.jsxs)(J.VerticalTimelineElement,{className:"vertical-timeline-element--work",contentStyle:{background:"#252525",color:"#fff",fontFamily:"Roboto Mono",boxShadow:"0 4px 8px rgba(0, 0, 0, 0.4)"},contentArrowStyle:{borderRight:"7px solid #252525"},date:e.date.toUpperCase(),iconStyle:{background:"#252525",color:"#fff"},icon:e.icon,children:[(0,n.jsx)("h3",{className:"vertical-timeline-element-title",style:{fontSize:"18px",fontFamily:"'Inter', sans-serif",fontWeight:"bold",marginBottom:"5px"},children:e.url?(0,n.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",style:{color:"inherit",textDecoration:"none"},children:e.title}):e.title}),(0,n.jsx)("h4",{className:"vertical-timeline-element-subtitle",style:{fontSize:"14px",fontFamily:"'Inter', sans-serif",fontWeight:"normal"},children:e.subtitle}),e.location&&(0,n.jsx)("p",{className:"vertical-timeline-element-location",style:{fontSize:"12px",fontFamily:"'Inter', sans-serif",fontStyle:"italic",color:"#ccc",marginTop:"5px"},children:e.location})]},t))})};function Y(){return(0,n.jsx)("section",{id:"journey",className:L().pageSection,children:(0,n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:"100%"},children:[(0,n.jsx)("h2",{style:{fontFamily:"'Roboto Mono', monospace",fontWeight:900,fontSize:"30px",color:"#fff",marginBottom:"40px",textAlign:"center"},children:"02. JOURNEY"}),(0,n.jsx)(H,{})]})})}var Z=a(6550),K=a(1348),q=a(4854),X=a(8998),$=a(3962),ee=a(5899),et=a(7290),ea=a(6100),en=a.n(ea);let es=e=>{let{slides:t}=e,[a,i]=(0,s.useState)(null),[o,r]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!1),[d,h]=(0,s.useState)(null),[m,_]=(0,s.useState)(!1),[u,p]=O();(0,s.useEffect)(()=>{let e=()=>{_(window.innerWidth<=768)};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);let g=e=>{h(e),c(!0)},f=()=>{h(null),c(!1)};return(0,s.useEffect)(()=>{if(!a||o)return;let e=setInterval(()=>{a.canScrollNext()?a.scrollNext():a.scrollTo(0)},2e3);return()=>clearInterval(e)},[a,o]),(0,n.jsxs)("div",{ref:u,className:"".concat(en().embla," ").concat(p?en().animate:""),onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),children:[(0,n.jsx)("h2",{className:en().embla__title,children:"03. PROJECTS"}),(0,n.jsx)(Z.F,{loop:!1,unstyled:!0,withControls:!1,getEmblaApi:e=>i(e),withIndicators:!1,classNames:{viewport:en().embla__viewport,container:en().embla__container,slide:en().embla__slide},children:t.map((e,t)=>(0,n.jsxs)(Z.F.Slide,{children:[m?(0,n.jsx)("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer",className:en().embla__slide__inner,children:(0,n.jsx)("img",{className:en().embla__slide__img,src:e.image,alt:e.title})}):(0,n.jsx)("div",{className:en().embla__slide__inner,onClick:()=>g(t),children:(0,n.jsx)("img",{className:en().embla__slide__img,src:e.image,alt:e.title})}),(0,n.jsxs)("div",{className:en().embla__slide__caption,children:[(0,n.jsx)(K.A,{variant:"h6",sx:{fontFamily:"Roboto Mono, monospace",fontSize:"14px",fontWeight:600,color:"#fff"},children:e.title}),(0,n.jsx)(K.A,{variant:"body2",sx:{fontFamily:"Inter, sans-serif",fontSize:"12px",color:"#ccc",marginTop:"0.5rem"},children:e.blurb})]})]},t))}),!m&&(0,n.jsx)(q.A,{open:l,onClose:f,children:(0,n.jsxs)(X.A,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:"800px",height:"400px",bgcolor:"#2d2d2d",boxShadow:24,borderRadius:"10px",padding:"2rem"},children:[(0,n.jsx)($.A,{"aria-label":"close",onClick:f,sx:{position:"absolute",top:"1rem",right:"1rem",color:"#ff4d4d"},children:(0,n.jsx)(ee.A,{})}),"number"==typeof d&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(X.A,{sx:{mb:"1rem"},children:[(0,n.jsx)(K.A,{variant:"h5",sx:{fontFamily:"Roboto Mono, monospace",fontSize:"24px",fontWeight:700,color:"#fff",mb:"1rem"},children:t[d].title}),(0,n.jsx)(K.A,{variant:"body1",sx:{fontFamily:"Inter, sans-serif",fontSize:"16px",color:"#d4d4d4",lineHeight:1.6},children:t[d].description}),t[d].techStack&&(0,n.jsxs)(K.A,{variant:"body2",sx:{fontFamily:"Roboto Mono, monospace",fontSize:"14px",color:"#d4d4d4",mt:"1rem"},children:[(0,n.jsx)("strong",{children:"Tech Stack:"})," ",t[d].techStack]})]}),(0,n.jsx)($.A,{href:t[d].githubLink,target:"_blank",sx:{position:"absolute",bottom:"2rem",left:"2rem",backgroundColor:"#ff4d4d",color:"white",borderRadius:"50%",width:"45px",height:"45px",display:"flex",alignItems:"center",justifyContent:"center","&:hover":{backgroundColor:"#e04444"}},children:(0,n.jsx)(et.A,{size:24})})]})]})})]})},ei={src:"/_next/static/media/ergon.9a850171.png"},eo={src:"/_next/static/media/fidelityUtility.451371f5.png"},er={src:"/_next/static/media/rmpSearch.209efd6b.png"},el={src:"/_next/static/media/algowar.821031f0.png"};function ec(){let e=[{title:"algowar.xyz",blurb:"Gamifying Leetcode-style coding prep through competitive head-to-head matches",description:"Developing a full-stack web application to gamify LeetCode-style coding preparation through competitive head-to-head matches. The application features a custom REST API built with Spring Boot and PostgreSQL, hosted on AWS RDS, and implements secure user authentication using AWS Cognito. The modern front-end, designed with Next.js, supports real-time gameplay, a comprehensive social system, leaderboards, and profile pages. Gameplay is enhanced with containerized code execution using Docker, AWS Lambda, and AWS ECR, along with skill-based matchmaking powered by Redis for efficient queuing. Live gameplay is facilitated through WebSocket integration, providing a seamless real-time experience.",githubLink:"https://github.com/rohanshah35/algowar",image:el.src,techStack:"Spring Boot, Next.js, PostgreSQL, AWS Cognito/RDS/S3/ECR/Lambda/EC2/Elasticache, Redis, WebSockets (Socket.io), Docker, TypeScript "},{title:"Project Ergon",blurb:"Store class notes, auto-generate summaries, flashcards, and study guides with this easy-to-use tool",description:"Developed a full-stack web app for storing class notes, automatically generating summaries, flashcards, and study guides. Implemented a custom REST API with full CRUD operations, utilizing AWS S3 for file storage and OpenAI for content generation. Built an interactive, responsive front-end with React and modern CSS.",githubLink:"https://github.com/ergon-app",image:ei.src,techStack:"React, Express.js, PostgreSQL, AWS S3, OpenAI API"},{title:"Fidelity Utility",blurb:"Easy to use web scraping data API for Fidelity brokerage users",description:"This Python application serves as a mock API for Fidelity using Selenium and BeautifulSoup, allowing users to retrieve personal portfolio information as well as general fund and stock data. It also includes scripts for various portfolio metrics.",githubLink:"https://github.com/rohanshah35/fidelityUtility",image:eo.src,techStack:"Python, Selenium, BeautifulSoup"},{title:"RMP Search Tool",blurb:"Find out what fellow students think about your professors with NLP",description:"This Java application conducts sentiment analysis on professor ratings scraped from RateMyProfessor using Selenium. It features multiple data visualization screens to assist prospective students in evaluating professors.",githubLink:"https://github.com/rohanshah35/RMP-Search-Tool",image:er.src,techStack:"Java, Selenium, CoreNLP, JavaFX"}];return(0,n.jsx)("section",{id:"projects",className:L().pageSection,children:(0,n.jsx)(es,{slides:e})})}var ed=a(5848),eh=a(9685),em=a(7187),e_=a(8825),eu=a(8452),ep=a(5121),eg=a.n(ep);let ef=[{category:"LANGUAGES",skills:["Python","Java","C/C++","JavaScript/TypeScript","HTML/CSS","SQL"],icon:V.A},{category:"FRAMEWORKS",skills:["Spring Boot","Express.js","Flask","React","Next.js","Node.js","Maven"],icon:em.A},{category:"LIBRARIES",skills:["pandas","NumPy","matplotlib","TensorFlow","Selenium","BeautifulSoup","Jsoup"],icon:e_.A},{category:"DEVELOPER TOOLS",skills:["Git / GitHub","AWS","Docker","Redis","Postman"],icon:eu.A}];function ex(e){let{icon:t,category:a,skills:s}=e,[i,o]=O();return(0,n.jsxs)("div",{ref:i,className:"".concat(eg().skillCategory," ").concat(o?eg().animate:""),children:[(0,n.jsx)(ed.L,{variant:"light",size:40,radius:40,className:eg().skillIcon,children:(0,n.jsx)(t,{size:20,stroke:1.5})}),(0,n.jsx)(p.E,{mt:"sm",mb:7,size:"lg",className:eg().skillCategoryTitle,children:a}),(0,n.jsx)(p.E,{size:"sm",className:eg().skillList,children:s.join(", ")})]})}function eb(){let e=ef.map((e,t)=>(0,s.createElement)(ex,{...e,key:t}));return(0,n.jsxs)(y.m,{className:eg().skillsWrapper,children:[(0,n.jsx)(S.h,{className:eg().skillsTitle,children:"04. SKILLS"}),(0,n.jsx)(y.m,{size:560,p:0}),(0,n.jsx)(eh.r,{mt:40,cols:2,spacing:"lg",children:e})]})}function ej(){return(0,n.jsx)("section",{id:"skills",className:L().pageSection,children:(0,n.jsx)(eb,{})})}var ek=a(8239),ey=a(5281),eS=a(4129),ew=a.n(eS);function ev(){let[e,t]=O();return(0,n.jsxs)(y.m,{ref:e,className:"".concat(ew().contactWrapper," ").concat(t?ew().animate:""),children:[(0,n.jsx)(S.h,{className:ew().contactTitle,children:"05. CONTACT"}),(0,n.jsx)(y.m,{size:560,p:0,children:(0,n.jsx)("p",{className:ew().contactDescription,children:"Feel free to reach out via email, check out my GitHub, or connect with me on LinkedIn."})}),(0,n.jsxs)(u.Y,{className:ew().buttonGroup,mt:"xl",children:[(0,n.jsx)("a",{className:"".concat(ew().contactButton," ").concat(ew().redGradient),href:"mailto:rohanshahsf@gmail.com",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(ek.A,{size:28,stroke:1.5})}),(0,n.jsx)("a",{className:"".concat(ew().contactButton," ").concat(ew().redGradient),href:"https://github.com/rohanshah35",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(et.A,{size:28,stroke:1.5})}),(0,n.jsx)("a",{className:"".concat(ew().contactButton," ").concat(ew().redGradient),href:"https://www.linkedin.com/in/rohanshah2/",target:"_blank",rel:"noopener noreferrer",children:(0,n.jsx)(ey.A,{size:28,stroke:1.5})})]})]})}function eN(){return(0,n.jsx)("section",{id:"contact",className:L().pageSection,children:(0,n.jsx)(ev,{})})}var eI=a(9747),eA=a(7649),eT=a.n(eA);let eR=()=>(0,n.jsx)(_.a,{className:eT().footer,children:(0,n.jsx)(eI.o,{children:(0,n.jsxs)(p.E,{className:eT().footerText,children:["Made with ",(0,n.jsx)("span",{className:eT().heart,children:"❤️"})," by Rohan Shah"]})})});function eE(){let[e,t]=(0,s.useState)(!0);return(0,n.jsx)("div",{className:"page-bg",children:e?(0,n.jsx)(m,{finishLoading:()=>{t(!1)}}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{}),(0,n.jsx)(C,{}),(0,n.jsx)(U,{}),(0,n.jsx)(Y,{}),(0,n.jsx)(ec,{}),(0,n.jsx)(ej,{}),(0,n.jsx)(eN,{}),(0,n.jsx)(eR,{})]})})}a(4051)},4051:()=>{},7649:e=>{e.exports={footer:"footer_footer__OSQxG",footerText:"footer_footerText__HEg5H",heart:"footer_heart__McfwO"}},8975:e=>{e.exports={inner:"about-hero_inner__plbOz",imageGrid:"about-hero_imageGrid__vIZu2",topRow:"about-hero_topRow__EZnf_",middleRow:"about-hero_middleRow__ucuSF",profileImage:"about-hero_profileImage__vTv6w",dogImage:"about-hero_dogImage__WITRZ",landscapeImage:"about-hero_landscapeImage__V2Q6M",basketballImage:"about-hero_basketballImage__gJpVX",climbingImage:"about-hero_climbingImage__sM7gw",mainTitle:"about-hero_mainTitle__AIxNR",description:"about-hero_description__iUm9g",animate:"about-hero_animate__motta",fadeIn:"about-hero_fadeIn__2yCfj",slideFromTop:"about-hero_slideFromTop__vqpzi",content:"about-hero_content__KQVSn"}},6100:e=>{e.exports={embla:"carousel_embla__D7xsL",animate:"carousel_animate__OBSLf",embla__title:"carousel_embla__title__Nf8e_",fadeSlideIn:"carousel_fadeSlideIn__K73WC",embla__viewport:"carousel_embla__viewport__UoME3",embla__container:"carousel_embla__container__MAvls",embla__slide:"carousel_embla__slide__Icma6",embla__slide__inner:"carousel_embla__slide__inner__37BJ0",embla__slide__img:"carousel_embla__slide__img__NM8xf",embla__slide__caption:"carousel_embla__slide__caption__vxqin"}},4129:e=>{e.exports={contactWrapper:"contact-section_contactWrapper__zSl44",contactTitle:"contact-section_contactTitle__KXTQ5",contactDescription:"contact-section_contactDescription__snYEW",contactButton:"contact-section_contactButton__k65Vr",animate:"contact-section_animate__DIaZC",fadeSlideIn:"contact-section_fadeSlideIn__woENM",buttonGroup:"contact-section_buttonGroup__ejM_D",redGradient:"contact-section_redGradient__o2T_b"}},8641:e=>{e.exports={rs:"header_rs__OgB_2",slideInTop:"header_slideInTop__Jumrh",header:"header_header__0ZBDm",container:"header_container__2l6Oy",navLinks:"header_navLinks__afFQf",link:"header_link__w75kF",bracket:"header_bracket__bjVTJ",hamburger:"header_hamburger__5Dcz8",drawer:"header_drawer__ecSgN",open:"header_open__ILYA1",menuItem:"header_menuItem__knFbC"}},1579:e=>{e.exports={inner:"hero_inner__vhmcu",content:"hero_content__fsj9e",slideFromTop:"hero_slideFromTop__UqunN",introText:"hero_introText__QsgF4",mainTitle:"hero_mainTitle__GRp_2",location:"hero_location__0_LAw",locationIcon:"hero_locationIcon__wJgIP",description:"hero_description__dwmV2",link:"hero_link__U_dUI",customButton:"hero_customButton__NbFuD",icon:"hero_icon__GI_jK",image:"hero_image__lvLnI",fadeIn:"hero_fadeIn___p2Ls"}},7049:e=>{e.exports={pageSection:"pages_pageSection__7dsY_"}},5121:e=>{e.exports={skillsWrapper:"skills-table_skillsWrapper__ib5rD",skillsTitle:"skills-table_skillsTitle__YiX2E",skillCategory:"skills-table_skillCategory__qRjli",animate:"skills-table_animate__rPrkG",slideFromBottom:"skills-table_slideFromBottom__w_7S3",skillIcon:"skills-table_skillIcon__9Fjch",skillCategoryTitle:"skills-table_skillCategoryTitle__wZAel",skillList:"skills-table_skillList__gjcUz"}}},e=>{var t=t=>e(e.s=t);e.O(0,[571,522,849,441,517,358],()=>t(6096)),_N_E=e.O()}]);