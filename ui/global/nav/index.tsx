import React from 'react'
import styles from './styles.module.scss';
import { MdOutlineSort } from "react-icons/md";


function Navbar() {
  return (
    <div className={styles.nav}>
        <h1>LOGO</h1>
        <div className={styles.btn}>
          <MdOutlineSort />
        </div>
    </div>
  )
}

export default Navbar