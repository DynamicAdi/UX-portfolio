import React from "react";
import styles from "./styles.module.scss";
import Title from "@/components/Title/Title";

const obj:any = [
  {
    id: 1,
    catogery: "Graphic Design",
    img: 'https://picsum.photos/1080/1920?random=1',
    title: "Product title",
  },
  {
    id: 2,
    catogery: "UI/UX Design",
    img: 'https://picsum.photos/1080/1920?random=2',
    title: "Product title",
  },
  {
    id: 3,
    catogery: "Graphic Design",
    img: 'https://picsum.photos/1080/1920?random=3',
    title: "Product title",
  },
  {
    id: 4,
    catogery: "Product Design",
    img: 'https://picsum.photos/1080/1920?random=4',
    title: "Product title",
  },
  {
    id: 5,
    catogery: "Product Marketing",
    img: 'https://picsum.photos/1080/1920?random=5',
    title: "Product title",
  },
  {
    id: 6,
    catogery: "Product Design",
    img: 'https://picsum.photos/1080/1920?random=6',
    title: "Product title",
  },
];


function CaseStudies() {
  return (
    <div className={styles.container}>
      <Title route="/case-studies">Case studies</Title>
      <div className={styles.child}>
        <div className={styles.box}>
          <div className={`${styles.context}`}>
            <div className={`${styles.product} ${styles.first}`}>
              <div className={styles.image}>
                <img src={obj[0].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h3>{obj[0].catogery}</h3>
                <h1>{obj[0].title}</h1>
              </div>
            </div>
            <div className={`${styles.product} ${styles.innerSecond}`}>
              <div className={styles.image}>
                <img src={obj[1].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h3>{obj[1].catogery}</h3>
                <h1>{obj[1].title}</h1>
              </div>
            </div>
          </div>
          <div className={`${styles.context} ${styles.second}`}>
            <div className={`${styles.product} ${styles.secondFirst}`}>
              <div className={styles.image}>
                <img src={obj[2].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h3>{obj[2].catogery}</h3>
                <h1>{obj[2].title}</h1>
              </div>
            </div>
            <div className={`${styles.product} ${styles.SecondInnerSecond}`}>
              <div className={styles.image}>
                <img src={obj[3].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h3>{obj[3].catogery}</h3>
                <h1>{obj[3].title}</h1>
              </div>
            </div>
          </div>
          <div className={`${styles.context}`}>
            <div className={`${styles.product} ${styles.thirdFirst}`}>
              <div className={styles.image}>
                <img src={obj[4].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h3>{obj[4].catogery}</h3>
                <h1>{obj[4].title}</h1>
              </div>
            </div>
            <div className={`${styles.product} ${styles.ThirdInnerSecond}`}>
              <div className={styles.image}>
                <img src={obj[5].img} alt="" className={styles.img} />
              </div>
              <div className={styles.text}>
                <h3>{obj[5].catogery}</h3>
                <h1>{obj[5].title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
