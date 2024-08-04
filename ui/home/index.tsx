"use client"

import React from 'react'
import styles from "./styles.module.scss";
import profile from "@/public/profile.png";
import { FiDownload } from "react-icons/fi";
import { Typewriter } from 'react-simple-typewriter';
import { FaXTwitter } from 'react-icons/fa6';

function HomeScreen() {
  return (
    <div className={styles.container}>
    <div className={styles.child}>
    <div className={styles.content}>
        <div className={styles.upper}>
        <h1>Dev <span>Adarsh </span></h1>
        <h2>I'm a{' '} <span> 
            <Typewriter 
            words={["Full Stack Developer", "Apps Developer", "Programmer", "UI/UX Designer", "Graphic Designer", "3D Animator", "3D Model Artist", "3D Sculpture", "Interior Designer"]}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={1000}
            loop={Infinity}
            />

          </span>
          </h2>
        <a href="#" className={`${styles.button}`}>
   <button>Download CV <FiDownload style={{fontSize: "1.5rem"}}/></button>
  </a>
       
        </div>
        <div className={styles.lower}>
        <div className={styles.box}>
            <h1>5+</h1>
            <h2>Experience</h2>
        </div>
        <div className={styles.box}>
            <h1>129+</h1>
            <h2>Projects</h2>
        </div>
        </div>

        {/* <p>I am a passionate software developer with expertise in web development and a strong focus on user experience. With a strong foundation in computer science and a deep understanding of programming languages, I have successfully delivered high-quality software solutions that meet the needs of clients and users alike. I am committed to continuous learning and staying up-to-date with the latest technologies and trends in the field of software development. I am excited to bring my skills and experience to new challenges and contribute to the success of your projects.</p> */}
    </div>
    <div className={styles.art}>
    <svg width="619" height="650" viewBox="0 0 619 691" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect id='myRect' x="10" y="13" width="592" height="677" rx="60" fill="#9D6FFF" />
<image href={profile.src} x="30" y="150" width="560" height="590" clipPath="url(#clip)"/>
<clipPath id="clip">
    <use href="#myRect" />
  </clipPath>
<path d="M10 285L10.5 327.936L11.2652 332.929C14.3858 353.29 30.2757 369.317 50.6085 372.614V372.614C73.6036 376.342 90.5 396.198 90.5 419.493V659.896C90.5 676.84 104.059 690.668 121 691V691L60.2991 689.81C27.0474 689.158 0.670029 661.583 1.49376 628.335L10 285Z" fill="white"/>
<path d="M618.5 60.5C618.5 90.0376 603 173.5 602 153.5C600 136.566 581.875 120.691 562.5 117.5C546.015 114.785 524.295 110.201 516 100C502.909 83.9011 503 61.2841 503 41C503 7.86292 454 13 487.5 13C503.5 9 539.614 -5.06125 568 2.49999C597.004 10.226 618.5 41 618.5 60.5Z" fill="#FFFCFC"/>
<a href="mailto:adarshpanditdev@gmail.com">
<circle cx="552.5" cy="65.5" r="37.5" fill="black"/>
<ellipse cx="552.164" cy="65.6394" rx="27.8662" ry="28.2754" fill="white"/>
<path d="M561.33 55.8837L552.988 62.4895L544.455 55.8837V55.8855L544.465 55.8944V65.1443L552.892 71.8928L561.33 65.4048V55.8837Z" fill="#EA4335"/>
<path d="M563.519 54.2769L561.329 55.8837V65.4048L568.222 60.0346V56.7995C568.222 56.7995 567.385 52.1791 563.519 54.2769Z" fill="#FBBC05"/>
<path d="M561.329 65.4048V77.754H566.612C566.612 77.754 568.116 77.5969 568.224 75.858V60.0346L561.329 65.4048Z" fill="#34A853"/>
<path d="M544.466 77.7649V65.1443L544.455 65.1354L544.466 77.7649Z" fill="#C5221F"/>
<path d="M544.455 55.8853L542.276 54.2874C538.41 52.1896 537.572 56.8083 537.572 56.8083V60.0432L544.455 65.1351V55.8853Z" fill="#C5221F"/>
<path d="M544.455 55.8858V65.1356L544.466 65.1445V55.8947L544.455 55.8858Z" fill="#C5221F"/>
<path d="M537.572 60.0457V75.869C537.678 77.6098 539.183 77.7651 539.183 77.7651H544.467L544.455 65.1356L537.572 60.0457Z" fill="#4285F4"/>
</a>


<a href="https://linkedin.com/in/DevAdarsh" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
<circle cx="48" cy="418" r="30" fill="#2597FF"/>
<g clipPath="url(#clip0_24_170)">
<path fillRule="evenodd" clipRule="evenodd" d="M63 432H57V421.501C57 418.621 55.7295 417.015 53.451 417.015C50.9715 417.015 49.5 418.689 49.5 421.501V432H43.5V412.5H49.5V414.693C49.5 414.693 51.3825 411.39 55.6245 411.39C59.868 411.39 63 413.979 63 419.337V432ZM36.663 409.381C34.6395 409.381 33 407.728 33 405.69C33 403.653 34.6395 402 36.663 402C38.685 402 40.3245 403.653 40.3245 405.69C40.326 407.728 38.685 409.381 36.663 409.381ZM33 432H40.5V412.5H33V432Z" fill="white"/>
</g>
</a>

<a href="https://github.com/DynamicAdi" target="_blank" rel="noopener noreferrer" className={styles.anchor}>
<circle cx="48" cy="649" r="30" fill="#2D1000"/>
<g clipPath="url(#clip1_24_170)">
<path fillRule="evenodd" clipRule="evenodd" d="M48.776 632.6C57.8205 632.6 65.152 640.117 65.152 649.39C65.152 656.807 60.4652 663.099 53.9623 665.321C53.132 665.486 52.8373 664.962 52.8373 664.515C52.8373 663.961 52.8569 662.153 52.8569 659.907C52.8569 658.341 52.3329 657.319 51.745 656.799C55.3919 656.383 59.2239 654.963 59.2239 648.514C59.2239 646.68 58.5885 645.183 57.5372 644.007C57.7075 643.583 58.2692 641.875 57.3767 639.563C57.3767 639.563 56.0044 639.113 52.8782 641.285C51.5698 640.913 50.168 640.726 48.776 640.719C47.3841 640.726 45.9839 640.913 44.6771 641.285C41.5477 639.113 40.1721 639.563 40.1721 639.563C39.2829 641.875 39.8446 643.583 40.0132 644.007C38.9668 645.183 38.3265 646.68 38.3265 648.514C38.3265 654.946 42.1503 656.388 45.7874 656.812C45.3191 657.231 44.8949 657.971 44.7475 659.057C43.8141 659.486 41.4428 660.228 39.9821 657.662C39.9821 657.662 39.1158 656.049 37.4717 655.931C37.4717 655.931 35.875 655.91 37.3603 656.951C37.3603 656.951 38.4329 657.467 39.1781 659.408C39.1781 659.408 40.1393 662.404 44.6951 661.389C44.7033 662.793 44.7181 664.115 44.7181 664.515C44.7181 664.959 44.4167 665.478 43.5996 665.322C37.0917 663.104 32.4 656.809 32.4 649.39C32.4 640.117 39.7332 632.6 48.776 632.6Z" fill="white"/>
</g>
</a>

<a href="https://x.com/Modern_coder" target="_blank" rel="noopener noreferrer">
<circle cx="49" cy="493" r="30" fill="#232323" />
      <foreignObject x="30" y="473" width="40" height="40">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
          <FaXTwitter color="#ffffff" size="33" />
        </div>
      </foreignObject>
</a>
<a href="#">
<circle cx="49" cy="573" r="30" fill="#FF5FB5"/>
<g clipPath="url(#clip2_24_170)">
<path d="M68.9477 574.318C68.9477 574.366 68.9653 574.41 68.9602 574.459C68.9565 574.484 68.9415 574.503 68.9377 574.528C68.3309 582.489 63.0433 589.148 55.83 591.78C55.7387 591.826 55.6436 591.858 55.541 591.88C53.4903 592.593 51.2981 593 49.0072 593C37.9752 593 28.999 584.028 28.999 573C28.999 572.16 29.0678 571.338 29.1692 570.524C29.1742 570.49 29.1642 570.459 29.1717 570.425C29.1754 570.409 29.1867 570.398 29.1905 570.381C30.035 563.969 33.9326 558.518 39.3641 555.508C39.4667 555.423 39.583 555.366 39.7044 555.319C42.4858 553.848 45.6452 553 49.0072 553C54.0908 553 58.7228 554.921 62.2563 558.055C62.2663 558.06 62.2788 558.06 62.2888 558.066C62.4364 558.159 62.5565 558.278 62.6504 558.413C66.5567 562.065 69.0153 567.245 69.0153 573C69.0153 573.445 68.9765 573.88 68.9477 574.318ZM66.3227 575.443C62.2375 575.088 58.6427 575.336 55.4985 575.923C56.4882 579.608 57.0149 583.868 56.6959 588.716C61.7971 586.206 65.5019 581.281 66.3227 575.443ZM49.0072 590.5C50.7801 590.5 52.4855 590.224 54.0983 589.731C54.5738 584.684 54.0883 580.27 53.0461 576.464C49.2799 577.448 46.2908 578.905 44.0749 580.301C40.579 582.505 38.4106 584.861 37.4172 586.08C40.5077 588.82 44.5604 590.5 49.0072 590.5ZM31.5002 573C31.5002 577.298 33.0642 581.231 35.6442 584.28C37.6837 581.82 43.0139 576.494 52.2916 574.049C51.8161 572.716 51.2769 571.468 50.6925 570.303C47.3681 571.839 43.3279 572.896 38.4907 572.896C36.3361 572.896 34.0151 572.671 31.5402 572.201C31.529 572.468 31.5002 572.73 31.5002 573ZM31.8243 569.689C39.2227 571.123 45.0258 570.054 49.4563 568.063C45.9867 562.291 41.6726 559 40.1185 557.936C35.8807 560.449 32.7864 564.693 31.8243 569.689ZM49.0072 555.5C46.7737 555.5 44.6417 555.93 42.676 556.696C44.4252 558.026 47.1341 560.391 49.7279 563.906C50.3847 564.798 51.0541 565.803 51.706 566.903C55.8788 564.494 58.5614 561.369 59.959 559.369C56.9574 556.954 53.1512 555.5 49.0072 555.5ZM61.7983 561.094C60.2055 563.31 57.3165 566.594 52.9235 569.139C53.5879 570.466 54.2072 571.916 54.7515 573.489C58.1873 572.83 62.0898 572.564 66.5116 572.949C66.4979 568.369 64.7024 564.209 61.7983 561.094Z" fill="white"/>
</g>
</a>
<defs>
<clipPath id="clip0_24_170">
<rect width="30" height="30" fill="white" transform="translate(33 402)"/>
</clipPath>
<clipPath id="clip1_24_170">
<rect width="32.752" height="32.752" fill="white" transform="translate(32.4 632.6)"/>
</clipPath>
<clipPath id="clip2_24_170">
<rect width="40" height="40" fill="white" transform="translate(29 553)"/>
</clipPath>
</defs>
</svg>

    </div>
    </div>
    </div>
  )
}

export default HomeScreen