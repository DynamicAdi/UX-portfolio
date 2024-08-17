import React from 'react'
import styles from "./styles.module.scss";
import { IoIosArrowForward, IoMdArrowRoundBack } from 'react-icons/io';
import ServicesCard from '@/components/cards/services/servicesCard';

function Services() {
  const array = [1, 2, 3];
  return (
    <div className={styles.services}>
        <div className={styles.child}>
          <div className={styles.left}>
            <div className={styles.content}>
            <h1>Services</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis quis veniam sapiente dignissimos tempore, magnam placeat dolorem.</p>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.boxes}>
              {array.map((item) => (
                <ServicesCard />
              ))}
            </div>
            <div className={styles.line}>Scroll down</div>
          </div>
        </div>
    </div>
  )
}

export default Services