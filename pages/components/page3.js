import styles from './page3.module.css'
import {FaSass, FaNodeJs, FaReact, FaFigma} from 'react-icons/fa';

const Skill = ({text, color}) => {
  return (
    <div style={{backgroundColor: color}} className={styles.skill}>
      {text}
    </div>
  )
}

const Technology = ({text, color, Icon}) => {
  return (
    <div style={{backgroundColor: color}} className={styles.technology}>
      {Icon}
      {text}
    </div>
  )
}

const Course = ({title, date, locale, backgroundColor}) => {
  return (
      <div style={{backgroundColor: backgroundColor}} className={styles.studiesContainer}>
          <div className={styles.job}>
              <label style={{fontWeight: 700, fontSize: 18, marginBottom: 4, maxWidth: "40ch"}}>{title}</label>
              <label>{date}</label>
              <label>{locale}</label>
          </div>
      </div>
  )
}


export default function Page3() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
          <h2>Formação acadêmica</h2>
          <div className={styles.studies}>
          <Course title="Unigran EAD - Engenharia de Software" date="2021 - cursando" 
              locale="Estudo a distância, polo Berlim - Alemanha"
              backgroundColor="#A7FCA8"/>
                    <Course title="PUC Goiás - Ciência da Computação" date="2017 - 2020" 
              locale="Goiânia - Goiás"
              backgroundColor="#F3D9FC"/>
          </div>
          <h2>Cursos</h2>
          <div className={styles.studies}>
          <Course title="Inovando com CSS - Fundação Bradesco" date="abr 2019" 
              locale="online"
              backgroundColor="#CCFCE8"/>
                  
                  <Course title="Introdução à Programação para WEB - Instituto Federal de Educação, Ciência e Tecnologia de São Paulo (IFSP)" date="abr 2019" 
              locale="online"
              backgroundColor="#C0FCC1"/>
                <Course title="Linguagem de Programação C# Básico - Fundação Bradesco" date="mai de 2019" 
              locale="online"
              backgroundColor="#FCB4A7"/>
              <Course title="HTML Avançado - Fundação Bradesco" date="set de 2017" 
              locale="online"
              backgroundColor="#F3D9FC"/>
               <Course title="PHP Academy - Softblue Cusos Online" date="jun de 2017" 
              locale="online"
              backgroundColor="#E5FCB3"/>
              <Course title="Algoritmos (Java) - BrasilMais TI" date="mai de 2017" 
              locale="online"
              backgroundColor="#FC9AC9"/>
              <Course title="Linux Básico - CACC PUC Goiás" date="mar de 2017" 
              locale="online"
              backgroundColor="#D9E5FC"/>
                  <Course title="Java Academy - Softblue Cusos Online" date="mai de 2017" 
              locale="online"
              backgroundColor="#A7FCA8"/>
          </div>
      
        <h2>Skills</h2>
        <div className={styles.skillContainer}>
        <Skill text="Desenvolvimento web" color="#CCFCE8"/>
        <Skill text="UX/UI" color="#C0FCC1"/>
        <Skill text="Wireframe" color="#FCB4A7"/>
        <Skill text="Desenvolvimento mobile" color="#F3D9FC"/>
        <Skill text="Prototipagem" color="#E5FCB3"/>
        <Skill text="Full stack" color="#FCB4A7"/>
        </div>
        <div className={styles.tecnologies}>
          <h2>Tecnologias</h2>
          <div className={styles.tecnologiesContainer}>
            <Technology text="ReactJs" color="#CCFCE8" Icon={<FaReact className={styles.technologyIcon}/>}/>
            <Technology text="NodeJs" color="#C0FCC1" Icon={<FaNodeJs className={styles.technologyIcon}/>}/>
            <Technology text="Sass" color="#FCB4A7" Icon={<FaSass className={styles.technologyIcon}/>}/>
            <Technology text="React Native" color="#F3D9FC" Icon={<FaReact className={styles.technologyIcon}/>}/>
            <Technology text="Figma" color="#E5FCB3" Icon={<FaFigma className={styles.technologyIcon}/>}/>
          </div>
        </div>
      </div>
    </div>
  )
}
