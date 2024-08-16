import React from 'react'
import styles from "./styles.module.scss";

function ProjectCard() {
  return (
    <div className={styles.box}>
    <div className={styles.img}>
      <img src="https://picsum.photos/1080/1920?random=1" alt="project pic"/>
    </div>
    <div className={styles.text}>
      <h1>Project title</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, minima?</p>
    </div>
  </div>

  )
}

export default ProjectCard