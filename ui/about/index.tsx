import React from 'react'
import styles from "./styles.module.scss";
import sidePic from "@/public/SidePic.png";

function About() {
  return (
    <div className={styles.container}>
        <h1><span>Who</span> I am?</h1>
        <div className={styles.child}>
            <div className={styles.left}>
                <div className={styles.shape}>
                <img src={sidePic.src} alt='profile' className={styles.img} />
                </div>
            </div>


            <div className={styles.right}>
                <div className={styles.content}>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolor, assumenda vitae iure temporibus laboriosam est corrupti culpa commodi earum esse magnam corporis delectus pariatur laborum? Sit quod ab ad delectus, fuga fugiat similique earum expedita, libero quis modi alias quam natus sed odio a. Vel nam modi illum aut!</p>
                    <br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum accusamus quasi, in sint dolore non aliquam itaque a totam tempora minus? Qui perspiciatis, adipisci quis dolorem sapiente dignissimos beatae corrupti iste quidem quasi. Voluptates placeat illo molestiae nam odit libero accusantium similique tenetur sit, ipsam laboriosam, totam sapiente, voluptate fugiat officia enim facere doloribus? Molestiae exercitationem, expedita magnam recusandae facilis deleniti adipisci odit sit iste corrupti aut est, aperiam et perspiciatis dicta culpa obcaecati ipsa itaque aliquid accusamus, esse rem.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About