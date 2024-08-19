import React from "react";
import styles from "./styles.module.scss";
import ServicesCard from "@/components/cards/services/servicesCard";
import SideSelector from "@/components/shared/main";

function Services() {
  const array = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className={styles.services}>
      <div className={styles.child}>
        <SideSelector title="Services" description=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              veritatis quis veniam sapiente dignissimos tempore, magnam placeat
              dolorem."/>
        <div className={styles.right}>
          <div className={styles.boxes}>
            {array.map((item) => (
              <div key={item}>
                <ServicesCard />
              </div>
            ))}
          </div>
          <div className={styles.line}>Scroll down</div>
        </div>
            </div>
      </div>
  );
}

export default Services;
