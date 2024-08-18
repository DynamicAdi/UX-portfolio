import React from "react";
import styles from "./styles.module.scss";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";

function Testmonials() {
  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <div className={styles.text}>
          <h1>
            What <span>people</span> say about me.
          </h1>
          <p>I love to do what I do.</p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.prev}>
            <IoArrowBack size={20} />
          </div>
          <div className={styles.prev + " " + styles.next}>
            <IoArrowForward size={23} />
          </div>
          <div className={styles.prev + " " + styles.add}>Add +</div>
        </div>
      </div>
      <div className={styles.cards}>
        <div className={styles.boxes}>

        <div className={styles.box}>
          <div className={styles.image}>
            <img src="https://picsum.photos/1080/1920?random=8" alt="" />
          </div>
          <div className={styles.content}>
            <h1>John Doe</h1>
            <h3>CEO of XYZ</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nostrum.{" "}
            </p>
          </div>
        </div>
        <div className={styles.box}>
          <div className={styles.image}>
            <img src="https://picsum.photos/1080/1920?random=7" alt="" />
          </div>
          <div className={styles.content}>
            <h1>John Doe</h1>
            <h3>CEO of XYZ</h3>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat,
              nostrum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quaerat, nostrum.{" "}
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Testmonials;
