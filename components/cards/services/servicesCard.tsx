import React from 'react'
import styles from './styles.module.scss'
import { IoMdArrowRoundBack } from 'react-icons/io'

function ServicesCard() {
  return (
    <div className={styles.box}>
    <h1><span>01/</span>{" "}Website building</h1>
    <div className={styles.lower}>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis quis veniam sapiente dignissimos tempore, magnam placeat dolorem.</p>
      <a href="/"><button><IoMdArrowRoundBack  size={24}/></button></a>
    </div>
  </div>
  )
}

export default ServicesCard