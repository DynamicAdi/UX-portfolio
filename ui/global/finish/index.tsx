import React from 'react'
import styles from './styles.module.scss';
import { IoArrowUpSharp } from 'react-icons/io5';
import Link from 'next/link';


function Finish() {
  return (
    <div className={styles.finish}>
      {/* <div className={styles.img}>
        <img src={Pic.src} alt="finalPic" />
      </div> */}
      <div className={styles.layer}></div>
        <div className={styles.child}>
        <h1>Thanks for visiting...</h1>
        <h2>That was all about me!</h2>
        <Link href="/">
        <button>Go to Top <IoArrowUpSharp size={33} /></button>
        </Link>
        </div>
    </div>
  )
}

export default Finish