import React from 'react'
import styles from './styles.module.scss';
import { FaBezierCurve, FaCode, FaCubes, FaHouseChimneyCrack, FaPenRuler } from 'react-icons/fa6';


function SideSelector({title, description}: {
    title: string,
    description: string
}) {
  return (
    <>
            <div className={styles.left}>
          <div className={styles.content}>
            <h1>{title}</h1>
            <p>
             {description}
            </p>
          </div>

          <div className={styles.circles}>
            <div className={styles.tabs}>
              <div className={`${styles.iconContainer} ${styles.active}`}>
                <FaCode size={25} />
              </div>
              <p className={styles.active}>Development</p>
            </div>

            <div className={styles.tabs}>
            <div className={styles.iconContainer}>
              <FaBezierCurve size={25}/>
              </div>
              <p>UI Design</p>
            </div>           
             <div className={styles.tabs}>
              <div className={styles.iconContainer}>
                <FaCode size={25} />
              </div>
              <p>User Experience</p>
            </div>           
             <div className={styles.tabs}>
             <div className={styles.iconContainer}>
              <FaCubes size={25} />
              </div>
              <p>3D Modeling</p>
            </div>            
            <div className={styles.tabs}>
            <div className={styles.iconContainer}>
                <FaPenRuler size={25} />
              </div>
              <p>Graphic Design</p>
            </div>           
             <div className={styles.tabs}>
             <div className={styles.iconContainer}>
                <FaHouseChimneyCrack size={25} />
              </div>
              <p>Interior Design</p>
            </div>

          </div>
        </div>
    </>
  )
}

export default SideSelector