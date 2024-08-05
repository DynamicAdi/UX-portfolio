import React from 'react'
import styles from "./styles.module.scss"
import Title from '@/components/Title/Title'
import ProjectCard from '@/components/cards/project/ProjectCard'


function Projects() {
  return (
    <div className={styles.container}>
        <Title route='/projects'>Latest Projects</Title>
        <div className={styles.child}>
          <div className={styles.content}>
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
    </div>
  )
}

export default Projects