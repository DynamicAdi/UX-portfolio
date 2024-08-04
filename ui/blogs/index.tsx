import React from 'react'
import styles from "./styles.module.scss";
import Title from '@/components/Title/Title';
import BlogCard from '@/components/cards/blog/Card';


function Blog() {
  return (
    <div className={styles.container}>
        <Title route='/blogs'>Latest <span className={styles.mid}>Blogs</span></Title>
        <div className={styles.child}>
          <div className={styles.cards}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />


          </div>
        </div>
    </div>
  )
}

export default Blog