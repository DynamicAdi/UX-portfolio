import React from 'react'
import styles from './Title.module.scss';
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";

interface TitleProps {
    children: React.ReactNode,
    route: string
}




function Title({route, children}: TitleProps) {
  return (
    <div className={styles.context}>
        <h1>{children}</h1>
    <Link href={route} className={styles.route}>
    <h3>view all <IoIosArrowRoundForward size={45}/></h3>
    </Link>
    </div>
  )
}

export default Title