import styles from './page3.module.css';
import { FaSass, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import Card from './card';
import { FaUserGraduate } from 'react-icons/fa';
const Skill = ({ text, color }) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.skill}>
      {text}
    </div>
  );
};

const Technology = ({ text, color, Icon }) => {
  return (
    <div style={{ backgroundColor: color }} className={styles.technology}>
      {Icon}
      {text}
    </div>
  );
};

const Course = ({ title, date, locale }) => {
  return (
    <div className={styles.job}>
      <label
        style={{
          fontWeight: 700,
          fontSize: 18,
          marginBottom: 4,
          maxWidth: '40ch',
        }}
      >
        {title}
      </label>
      <label>{date}</label>
      <label>{locale}</label>
    </div>
  );
};

const Course2 = ({ title, date, locale }) => {
  return (
    <div className={styles.job}>
      <label
        style={{
          fontWeight: 700,
          fontSize: 18,
          marginBottom: 4,
          maxWidth: '40ch',
        }}
      >
        {title}
      </label>
      <label>{date}</label>
      <label>{locale}</label>
    </div>
  );
};

export default function Page3() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2>Formação acadêmica</h2>
        <p className={styles.textAbout}>
          Entrei na área de TI em 2017, no curso de graduação em Ciência da
          Computação que estudei por 3 anos. Nesse período tive uma ótima carga
          de conhecimento e também ótimas experiências pessoais. Fui monitora de
          duas matérias (Engenharia de Software e Técnicas de Programação 1),
          participei de maratonas de programação e vários mini cursos dentro da
          universidade e online. Em 2020 tranquei o curso pois me mudei para
          Alemanha e logo depois, em 2021, comecei o curso de graduação em
          Engenharia de Software, que estou estudando atualmente.{' '}
          <FaUserGraduate />
        </p>
        <div className={styles.studies}>
          <Card
            color="#A7FCA8"
            isSmallText={true}
            child={
              <Course2
                title="Unigran EAD - Engenharia de Software"
                date="2021 - cursando"
                locale="Estudo a distância, polo Berlim - Alemanha"
              />
            }
          />
          <Card
            color="#A7FCA8"
            isSmallText={true}
            child={
              <Course2
                title="PUC Goiás - Ciência da Computação"
                date="2017 - 2020 (trancado)"
                locale="Goiânia - Goiás"
              />
            }
          />
        </div>
        <h2>Cursos</h2>
        <div className={styles.studies}>
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title="Inovando com CSS - Fundação Bradesco"
                date="abr 2019"
                locale="online"
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title="Introdução à Programação para WEB - Instituto Federal de Educação (IFSP)"
                date="abr 2019"
                locale="online"
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title="Linguagem de Programação C# Básico - Fundação Bradesco"
                date="mai de 2019"
                locale="online"
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title="HTML Avançado - Fundação Bradesco"
                date="set de 2017"
                locale="online"
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title="PHP Academy - Softblue Cusos Online"
                date="jun de 2017"
                locale="online"
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title="Algoritmos (Java) - BrasilMais TI"
                date="mai de 2017"
                locale="online"
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title="Linux Básico - CACC PUC Goiás"
                date="mar de 2017"
                locale="online"
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title="Java Academy - Softblue Cusos Online"
                date="mai de 2017"
                locale="online"
              />
            }
          />
        </div>

        <h2>Skills</h2>
        <div className={styles.skillContainer}>
          <Skill text="Desenvolvimento web" color="#CCFCE8" />
          <Skill text="UX/UI" color="#C0FCC1" />
          <Skill text="Wireframe" color="#FCB4A7" />
          <Skill text="Desenvolvimento mobile" color="#F3D9FC" />
          <Skill text="Prototipagem" color="#E5FCB3" />
          <Skill text="Full stack" color="#FCB4A7" />
        </div>
        <h2>Tecnologias</h2>
        <div className={styles.tecnologiesContainer}>
          <Technology
            text="JavaScript"
            color="#CCFCE8"
            Icon={<DiJavascript1 className={styles.technologyIcon} />}
          />
          <Technology
            text="ReactJs"
            color="#CCFCE8"
            Icon={<FaReact className={styles.technologyIcon} />}
          />
          <Technology
            text="MongoDB"
            color="#CCFCE8"
            Icon={<DiMongodb className={styles.technologyIcon} />}
          />
          <Technology
            text="NodeJs"
            color="#C0FCC1"
            Icon={<FaNodeJs className={styles.technologyIcon} />}
          />
          <Technology
            text="Sass"
            color="#FCB4A7"
            Icon={<FaSass className={styles.technologyIcon} />}
          />
          <Technology
            text="React Native"
            color="#F3D9FC"
            Icon={<FaReact className={styles.technologyIcon} />}
          />
          <Technology
            text="Figma"
            color="#E5FCB3"
            Icon={<FaFigma className={styles.technologyIcon} />}
          />
        </div>
      </div>
    </div>
  );
}
