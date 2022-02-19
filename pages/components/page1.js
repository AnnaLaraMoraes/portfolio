import styles from './page1.module.css'
import {AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineWhatsApp} from 'react-icons/ai';
import Image from 'next/image'
import Link from 'next/link'

export default function Page1() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
      <div className={styles.buttonsLanguage}>
        <button className={styles.button}><strong>PT</strong></button>
        <button className={styles.button}>EN</button>
      </div>
      <h1 className={styles.title}>Olá!<br/> Sou Anna Lara</h1>
      <h2 className={styles.subTitle}>Programadora desde 2018 e estudante de Engenharia de Software.</h2>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
        <Link  href="https://wa.me/4915752946337">
          <a className={styles.contactIcon}><AiOutlineWhatsApp style={{marginRight: 6}}/>+49 1575 2976337</a>
        </Link>
        </div>
        <div className={styles.contactItem}>
        <Link href="mailto:annalara1426@gmail.com">
          <a className={styles.contactIcon}><AiOutlineMail style={{marginRight: 6}}/>annalara1426@gmail.com</a>
        </Link>
        </div>
        <div className={styles.contactIconContainer}>
          <Link href="https://www.linkedin.com/in/anna-lara-moraes-39827983/">
            <a className={styles.contactIcon}><AiOutlineLinkedin/></a>
          </Link>
          <Link href="https://github.com/AnnaLaraMoraes">
            <a className={styles.contactIcon}><AiOutlineGithub/></a>
          </Link>
          <Link href="https://www.instagram.com/annalara.dev/">
            <a className={styles.contactIcon}><AiOutlineInstagram/></a>
          </Link>
        </div>
      </div>
      <div className={styles.image}>
        <Image src="/undraw.svg" alt="Me" width={864.67} height={685.08} />
      </div>
      </div>
    </div>
  )
}
