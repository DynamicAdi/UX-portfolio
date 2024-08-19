import React from "react";
import styles from "./styles.module.scss";
import { IoMailOutline, IoPhonePortraitOutline } from "react-icons/io5";
import {
  RiTwitterXLine,
  RiLinkedinFill,
  RiInstagramLine,
  RiWhatsappLine,
  RiGithubFill,
  RiDribbbleLine,
} from "react-icons/ri";

function Contacts() {
  const social = [
    {
      id: "Twitter",
      link: "https://x.com/Modern_Coder",
      Icon: RiTwitterXLine,
      color: "#111111",
    },
    {
      id: "Linkedin",
      link: "https://linkedin.com/in/DevAdarsh",
      Icon: RiLinkedinFill,
      color: "#2d4cfc",
    },
    {
      id: "Github",
      link: "https://github.com/DynamicAdi",
      Icon: RiGithubFill,
      color: "#9c3900",
    },
    {
      id: "Whatsapp",
      link: "https://wa.me/+919086345112",
      Icon: RiWhatsappLine,
      color: "#16d939",
    },
    {
      id: "Instagram",
      link: "https://instagram.com/Tech_versatile",
      Icon: RiInstagramLine,
      color: "#ff194f",
    },
    {
      id: "Gmail",
      link: "mailto:adarshpanditdev@gmail.com",
      Icon: IoMailOutline,
      color: "#ff2b2b",
    },
    {
      id: "Dribbble",
      link: "",
      Icon: RiDribbbleLine,
      color: "#ff52ab",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.child}>
        <div className={styles.headers}>
          <div className={styles.head}>
            <h1>Get in</h1>
            <h2>Touch</h2>
          </div>
          <div className={styles.lower}>
            <div className={styles.phone}>
              <div className={styles.content}>
                <IoMailOutline size={30} /> -
                <a href="mailto:adarshpanditdev@gmail.com">
                  {" "}
                  adarshpanditdev@gmail.com
                </a>
              </div>
              <div className={styles.content}>
                <IoPhonePortraitOutline size={30} /> -
                <a href="tel:+919086345112"> +91 9086345112</a>
              </div>
            </div>
            <div className={styles.social}>
              <h1>Social media</h1>
              <ul>
                {social.map((item) => (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.id}
                    style={{
                      background: item.color,
                      borderColor: item.color,
                      color: "white",
                    }}
                  >
                    <li>
                      <item.Icon />
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <form action="">
              <label className={styles.input}>
                <input type="text" className={styles.field} placeholder=" " />
                <span className={styles.label}>Full name</span>
              </label>
              <label className={styles.input}>
                <input type="email" className={styles.field} placeholder=" " />
                <span className={styles.label}>Email</span>
              </label>
              <label className={styles.input}>
                <input type="number" className={styles.field} placeholder=" " />
                <span className={styles.label}>Phone no.</span>
              </label>
              <label className={styles.input}>
                <input type="text" className={styles.field} placeholder=" " />
                <span className={styles.label}>Subject</span>
              </label>
              <label className={styles.input}>
                <textarea placeholder=" " className={styles.field} />
                <span className={styles.label}>Message</span>
              </label>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
