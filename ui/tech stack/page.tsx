import React from 'react'
import styles from './styles.module.scss';
import { FaHtml5 } from 'react-icons/fa6';
import SideSelector from '@/components/shared/main';

function TechStack() {
  return (
    <div className={styles.container}>
             <div className={styles.child}>
                <SideSelector title='Skills' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit veritatis quis veniam sapiente dignissimos tempore, magnam placeat dolorem.' />
        <div className={styles.right}>
          <div className={styles.context}>
              <div className={styles.slider}>
                <div className={styles.upper}>
                  <div className={styles.icon}>
                    <FaHtml5 size={30} color='orangered'/>
                    </div> <p>Html </p>
                </div>
                <div className={styles.center}></div>
                <div className={styles.lower}>
                  <p>Advanced</p>
                </div>
              </div>

              <div className={styles.slider}>
                <div className={styles.upper}>
                  <div className={styles.icon}>
                    <FaHtml5 size={30} color='orangered'/>
                    </div> <p>Html </p>
                </div>
                <div className={styles.center}></div>
                <div className={styles.lower}>
                  <p>Advanced</p>
                </div>
              </div>              <div className={styles.slider}>
                <div className={styles.upper}>
                  <div className={styles.icon}>
                    <FaHtml5 size={30} color='orangered'/>
                    </div> <p>Html </p>
                </div>
                <div className={styles.center}></div>
                <div className={styles.lower}>
                  <p>Advanced</p>
                </div>
              </div>              <div className={styles.slider}>
                <div className={styles.upper}>
                  <div className={styles.icon}>
                    <FaHtml5 size={30} color='orangered'/>
                    </div> <p>Html </p>
                </div>
                <div className={styles.center}></div>
                <div className={styles.lower}>
                  <p>Advanced</p>
                </div>
              </div>              <div className={styles.slider}>
                <div className={styles.upper}>
                  <div className={styles.icon}>
                    <FaHtml5 size={30} color='orangered'/>
                    </div> <p>Html </p>
                </div>
                <div className={styles.center}></div>
                <div className={styles.lower}>
                  <p>Advanced</p>
                </div>
              </div>              <div className={styles.slider}>
                <div className={styles.upper}>
                  <div className={styles.icon}>
                    <FaHtml5 size={30} color='orangered'/>
                    </div> <p>Html </p>
                </div>
                <div className={styles.center}></div>
                <div className={styles.lower}>
                  <p>Advanced</p>
                </div>
              </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default TechStack