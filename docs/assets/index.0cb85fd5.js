import{c as x,s as o,t as d,a as C,i as g,b as h,S,M as y,F as w,d as M,r as B}from"./vendor.7b6b686d.js";const E=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const r of e.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function s(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function l(t){if(t.ep)return;t.ep=!0;const e=s(t);fetch(t.href,e)}};E();const O=d('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="52 42 88 66"><path d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" style="transition: all 500ms"></path><path d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" style="transition: all 500ms"></path><path d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" style="transition: all 500ms"></path><path d="M72 74V48l24 18 24-18v26L96 92" style="transition: all 500ms"></path><path d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" style="transition: all 500ms"></path></svg>'),j=i=>(()=>{const n=O.cloneNode(!0),s=n.firstChild,l=s.nextSibling,t=l.nextSibling,e=t.nextSibling,r=e.nextSibling;return x(a=>{const f=i.active?"#4285f4":"#444",p=i.active?"#34a853":"#909090",c=i.active?"#fbbc04":"#C1C1C1",m=i.active?"#ea4335":"#6C6C6C",u=i.active?"#c5221f":"#000";return f!==a._v$&&o(s,"fill",a._v$=f),p!==a._v$2&&o(l,"fill",a._v$2=p),c!==a._v$3&&o(t,"fill",a._v$3=c),m!==a._v$4&&o(e,"fill",a._v$4=m),u!==a._v$5&&o(r,"fill",a._v$5=u),a},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})(),L=d(`<svg style="transition: all 500ms" width="100%" height="100%" version="1.1" id="lni_lni-linkedin-original" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 64 64"><path d="M58.5,1H5.6C3.1,1,1.1,3,1.1,5.5v53c0,2.4,2,4.5,4.5,4.5h52.7c2.5,0,4.5-2,4.5-4.5V5.4C63,3,61,1,58.5,1z M19.4,53.7h-9.1
	V24.2h9.1V53.7z M14.8,20.1c-3,0-5.3-2.4-5.3-5.3s2.4-5.3,5.3-5.3s5.3,2.4,5.3,5.3S17.9,20.1,14.8,20.1z M53.9,53.7h-9.1V39.4
	c0-3.4-0.1-7.9-4.8-7.9c-4.8,0-5.5,3.8-5.5,7.6v14.6h-9.1V24.2h8.9v4.1h0.1c1.3-2.4,4.2-4.8,8.7-4.8c9.3,0,11,6,11,14.2v16H53.9z"></path></svg>`),N=i=>(()=>{const n=L.cloneNode(!0);return x(()=>o(n,"fill",i.active?"#0B66C2":"#000")),n})(),T=d('<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" style="transition: all 500ms"></path></svg>'),A=i=>(()=>{const n=T.cloneNode(!0);return x(()=>o(n,"fill",i.active?"#4a72a7":"#000")),n})();var z="./assets/linkedin-original.f9a8f210.svg",V="./assets/gmail.3e2abb19.svg",P="./assets/phone.a288bfc9.svg";const G=d('<div class="flex justify-center items-center h-screen fadeInBottomSm"><div><h2 class="text-5xl font-bold mb-[50px] text-center">Contact</h2><ul class="flex flex-col gap-5"></ul></div></div>'),R=d('<li><div class="flex h-[80px] items-center gap-4 sm:gap-5 border-2 border-black rounded-lg border-solid px-4 py-2 text-center text-sm sm:text-[18px]"><a class="cursor-pointer w-[30px] h-[30px] sm:w-[50px] sm:h-[50px]"></a><span></span></div></li>'),F=()=>{const i=[{name:"linkedin",href:"https://www.linkedin.com/in/samlu821/",text:"https://www.linkedin.com/in/samlu821/",img:z,targetNewTab:!0},{name:"email",href:"mailto:lusamuel99@gmail.com",text:"lusamuel99@gmail.com",img:V},{name:"phone_number",href:null,text:"909-896-8569",img:P}],[n,s]=C(null),l=e=>{s(e)},t=()=>{s(null)};return(()=>{const e=G.cloneNode(!0),r=e.firstChild,a=r.firstChild,f=a.nextSibling;return g(f,h(w,{each:i,children:p=>{const{name:c,href:m,targetNewTab:u,text:k}=p,_=()=>n()?.name===c;return(()=>{const $=R.cloneNode(!0),b=$.firstChild,v=b.firstChild,I=v.nextSibling;return b.addEventListener("mouseleave",()=>{t()}),b.addEventListener("mouseenter",()=>{l(p)}),o(v,"href",m),o(v,"target",u?"_blank":void 0),g(v,h(S,{get children(){return[h(y,{when:c==="linkedin",get children(){return h(N,{get active(){return _()}})}}),h(y,{when:c==="email",get children(){return h(j,{get active(){return _()}})}}),h(y,{when:c==="phone_number",get children(){return h(A,{get active(){return _()}})}})]}})),g(I,k),$})()}})),e})()},H=d('<div class="flex justify-center sm:items-center pt-24 sm:pt-0 h-screen fadeInBottomSm"><section class=""><h2 class="text-5xl font-bold">About Me</h2><p class="my-5 leading-[37px]">I am a Business Administration and Marketing major currently at California State University Fullerton. I am expected to graduate Spring 2023 with my Bachelor\u2019s. While I have not held any jobs that pertained to marketing, I have had to privilege to help the marketing team at my workplace, Gigabyte Technology; where I have been working since 2017. At first I started off as a warehouse employee but then I transferred in early 2019 as a technical support representative. Because I have been in the tech industry since I was 17, I mainly want to stay in the realm of PC hardware, however; I am interested in the motorsport industry as well. But for now, my forte lies in PC hardware. I hope you find things here on the site, informative and interesting.</p></section></div>'),W=()=>H.cloneNode(!0);var D="./assets/experience-pc-1.356f28b9.jpeg",U="./assets/experience-pc-2.25c8d448.jpeg",Z="./assets/experience-pc-3.9d103c96.jpeg",q="./assets/experience-trail-runners.bdb7abff.png";const K=d('<div class="fadeInBottomSm"><section class="pt-24"><h2 class="text-5xl font-bold">Experience</h2><div class=""><p class="my-5" style="    font-size: 18px; line-height: 37px; margin-bottom: 30px;">I am a Business Administration and Marketing major currently at California State University Fullerton. I am expected to graduate Spring 2023 with my Bachelor\u2019s. While I have not held any jobs that pertained to marketing, I have had to privilege to help the marketing team at my workplace, Gigabyte Technology; where I have been working since 2017. At first I started off as a warehouse employee but then I transferred in early 2019 as a technical support representative. Because I have been in the tech industry since I was 17, I mainly want to stay in the realm of PC hardware, however; I am interested in the motorsport industry as well. But for now, my forte lies in PC hardware. I hope you find things here on the site, informative and interesting.</p><div class="grid md:grid-cols-[1fr,1fr,1fr]  gap-3 md:h-[500px] drop-shadow-lg grid-cols-1"><img class="object-cover h-full rounded-lg"><img class="object-cover h-full rounded-lg"><img class="object-cover h-full rounded-lg"></div></div><div class="my-[200px]"><p style="    font-size: 18px; line-height: 37px; margin-bottom: 60px;">I also have done a marketing project for school. The project is about a shoe company called Allbirds and to create a tangible output, in my case a report, on their Trail Runner SWT model and how to market it towards the Gen Z population in the San Diego area. I did research on the age demographic that is Gen Z, the population of that demographic in the San Diego area, checked which gender the Trail Runner SWT is popular amongst, and decided the best course of action in regards to marketing.</p><img class="object-cover h-full rounded-lg"></div></section></div>'),Y=()=>(()=>{const i=K.cloneNode(!0),n=i.firstChild,s=n.firstChild,l=s.nextSibling,t=l.firstChild,e=t.nextSibling,r=e.firstChild,a=r.nextSibling,f=a.nextSibling,p=l.nextSibling,c=p.firstChild,m=c.nextSibling;return o(r,"src",D),o(a,"src",U),o(f,"src",Z),o(m,"src",q),i})();var J="./assets/CertificateOfCompletion_Balancing_Multiple_Roles_as_a_Leader_2.e36e25ec.pdf",Q="./assets/CertificateOfCompletion_Content_Marketing_Foundations.3097f1ac.pdf",X="./assets/CertificateOfCompletion_Email_Marketing_Strategy_and_Optimization.120a2429.pdf",ee="./assets/Google_Essential.3f60dbee.pdf",te="./assets/CertificateOfCompletion_Marketing_Tools_SEO_2019.f0ab0b58.pdf",ne="./assets/CertificateOfCompletion_Mobile_Marketing_Strategy.c1df8639.pdf";const ie=d('<div class="flex justify-center items-center h-screen fadeInBottomSm"><section><h2 class="text-5xl font-bold mb-[50px] text-center">Certifications</h2><ul class="flex max-w-[400px] mx-auto flex-col gap-3"></ul></section></div>'),ae=d('<li><a class="border-2 border-black rounded-lg border-solid px-4 py-2 block text-center  transition-all hover:bg-black hover:text-white" target="_blank"></a></li>'),re=()=>{const i=[{pdf:J,name:"Balancing Multiple Roles as a Leader"},{pdf:Q,name:"Content Marketing Foundations"},{pdf:X,name:"Email Marketing Strategy and Optimization"},{pdf:ee,name:"Google Ads Essential Training"},{pdf:te,name:"Marketing Tools SEO 2019"},{pdf:ne,name:"Mobile Marketing Strategy"}];return(()=>{const n=ie.cloneNode(!0),s=n.firstChild,l=s.firstChild,t=l.nextSibling;return g(t,h(w,{each:i,children:e=>(()=>{const r=ae.cloneNode(!0),a=r.firstChild;return g(a,()=>e.name),x(()=>o(a,"href",e.pdf)),r})()})),n})()},le=d(`<div class="flex justify-center sm:items-center pt-24 sm:pt-0 h-screen"><div class="px-5"><h1 class="font-bold text-[43px] sm:text-6xl leading-[1em] mb-5 lg:whitespace-nowrap text-center"><span class="block fadeInLeft"><span>Hello, I'm</span><span class="hidden sm:inline"> </span><span class="block sm:inline">Samuel Lu</span></span><div class="text-xl my-3 text-gray-500 fadeInRight">GigaByte Technical Support Representative</div></h1><div class="flex flex-col items-center justify-center fadeInBottom"><p class="text-xl leading-[37px]">To the person reading this, my name is Samuel Lu and I would like thank you for taking time out of your day to arrive at my page. Here you can learn more about me, see what projects I have been a part of, my experiences, any certificates or licenses I obtained, and finally contact information.</p></div></div></div>`),oe=()=>le.cloneNode(!0),se=d('<div class=""><header class="fixed top-0 left-0 w-full  has-backdrop-filter:backdrop-blur-lg z-50 has-backdrop-filter:bg-[#e7f3ff]/60 bg-[#e7f3ff]/95" style="box-shadow: 0 0 13px 0px #0b487700; transition: box-shadow 300ms;"><div class="absolute top-0 right-0 bottom-0 w-8 pointer-events-none" style="background: linear-gradient(to left, #e6f3ff 5px, transparent)"></div><div class="flex gap-5 sm:justify-center overflow-auto px-5 pr-8 items-center h-[50px] no-scrollbar"></div></header><main class="px-6 max-w-[800px] mx-auto text-xl overflow-hidden"></main></div>'),ce=d('<button class=" border-solid border-b-2 border-transparent flex-shrink-0 transition-all hover:border-blue-700 font-bold"></button>');function de(){const i=[{link:"Introduction",component:oe},{link:"About Me",component:W},{link:"Experience",component:Y},{link:"Certifications",component:re},{link:"Contact",component:F}];let n;const[s,l]=C(i[0]),t=e=>{l(i.find(r=>r.link===e))};return window.addEventListener("scroll",()=>{window.scrollY>=100?n.style.boxShadow=" 0 0 13px 0px #0b48775e":n.style.boxShadow=" 0 0 13px 0px #0b487700"},{passive:!0}),(()=>{const e=se.cloneNode(!0),r=e.firstChild,a=r.firstChild,f=a.nextSibling,p=r.nextSibling,c=n;return typeof c=="function"?c(r):n=r,g(f,h(w,{each:i,children:m=>(()=>{const u=ce.cloneNode(!0);return u.$$click=()=>t(m.link),g(u,()=>m.link),u})()})),g(p,()=>s().component),e})()}M(["click"]);B(()=>h(de,{}),document.getElementById("root"));
