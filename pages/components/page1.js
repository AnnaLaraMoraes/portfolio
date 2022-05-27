import styles from './page1.module.css';
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from 'react-icons/ai';
import Link from 'next/link';

export default function Page1({ selectedLanguage }) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>
            {selectedLanguage?.page1title1}
            <br />
            <div className={styles.heartIcon}>
              {selectedLanguage?.page1title2}
              <img src="/heart.png" alt="Me" />
            </div>
          </h1>
          <h2 className={styles.subTitle}>{selectedLanguage?.page1text1}</h2>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactItem}>
            <Link href="mailto:annalara1426@gmail.com">
              <a className={styles.contactIcon}>
                <AiOutlineMail style={{ marginRight: 6 }} />
                annalara1426@gmail.com
              </a>
            </Link>
          </div>
          <div className={styles.contactIconContainer}>
            <Link href="https://www.linkedin.com/in/anna-lara-moraes-39827983/">
              <a className={styles.contactIcon}>
                <AiOutlineLinkedin />
              </a>
            </Link>
            <Link href="https://github.com/AnnaLaraMoraes">
              <a className={styles.contactIcon}>
                <AiOutlineGithub />
              </a>
            </Link>
          </div>
        </div>
        <div className={styles.image}>
          <img src="/draw.svg" alt="Me" />
        </div>
      </div>
    </div>
  );
}
