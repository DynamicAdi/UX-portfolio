import React from 'react'
import styles from "./cardStyle.module.scss";
import Link from 'next/link';
import { GoArrowUpRight } from 'react-icons/go';


function BlogCard() {
  return (
    <div className={styles.card}>
    <div className={styles.image}>
      <h2 className={styles.tag}>COMMUNITY</h2>
      <img src="https://picsum.photos/1080/1920?random=1" alt="blogPic" />
    </div>
    <div className={styles.content}>
      <h1>I am the title of the blog</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quo harum, aspernatur nisi sunt repellendus omnis expedita totam est tempore.</p>
      <div className={styles.context}>
        <p><span>Adarsh</span> • 12th April 2022</p>
      </div>
      <Link href={"/"} className={styles.link}>
        <h4>Read more <GoArrowUpRight size={20} /></h4>
      </Link>
    
    </div>
  </div>
  )
}

export default BlogCard;