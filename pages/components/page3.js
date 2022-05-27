import styles from './page3.module.css';
import { FaSass, FaNodeJs, FaReact, FaFigma } from 'react-icons/fa';
import { DiJavascript1, DiMongodb } from 'react-icons/di';
import Card from './card';
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

export default function Page3({ selectedLanguage }) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2>{selectedLanguage?.page3title1}</h2>
        <div className={styles.studies}>
          <Card
            color="#A7FCA8"
            isSmallText={true}
            child={
              <Course2
                title={selectedLanguage?.page3university1title}
                date={selectedLanguage?.page3university1date}
                locale={selectedLanguage?.page3university1locale}
              />
            }
          />
          <Card
            color="#A7FCA8"
            isSmallText={true}
            child={
              <Course2
                title={selectedLanguage?.page3university2title}
                date={selectedLanguage?.page3university2date}
                locale={selectedLanguage?.page3university2locale}
              />
            }
          />
        </div>
        <h2>{selectedLanguage?.page3title2}</h2>
        <div className={styles.studies}>
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title={selectedLanguage?.page3course1title}
                date={selectedLanguage?.page3course1date}
                locale={selectedLanguage?.page3course1locale}
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title={selectedLanguage?.page3course2title}
                date={selectedLanguage?.page3course2date}
                locale={selectedLanguage?.page3course2locale}
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title={selectedLanguage?.page3course3title}
                date={selectedLanguage?.page3course3date}
                locale={selectedLanguage?.page3course3locale}
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title={selectedLanguage?.page3course4title}
                date={selectedLanguage?.page3course4date}
                locale={selectedLanguage?.page3course4locale}
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title={selectedLanguage?.page3course5title}
                date={selectedLanguage?.page3course5date}
                locale={selectedLanguage?.page3course5locale}
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title={selectedLanguage?.page3course6title}
                date={selectedLanguage?.page3course6date}
                locale={selectedLanguage?.page3course6locale}
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title={selectedLanguage?.page3course7title}
                date={selectedLanguage?.page3course7date}
                locale={selectedLanguage?.page3course7locale}
              />
            }
          />
          <Card
            color="#CCFCE8"
            isSmallText={true}
            child={
              <Course
                title={selectedLanguage?.page3course8title}
                date={selectedLanguage?.page3course8date}
                locale={selectedLanguage?.page3course8locale}
              />
            }
          />
        </div>

        <h2>{selectedLanguage?.page3title3}</h2>
        <div className={styles.skillContainer}>
          <Skill text={selectedLanguage?.page3skill1} color="#CCFCE8" />
          <Skill text={selectedLanguage?.page3skill2} color="#C0FCC1" />
          <Skill text={selectedLanguage?.page3skill3} color="#FCB4A7" />
          <Skill text={selectedLanguage?.page3skill4} color="#F3D9FC" />
          <Skill text={selectedLanguage?.page3skill5} color="#E5FCB3" />
          <Skill text={selectedLanguage?.page3skill6} color="#FCB4A7" />
        </div>
        <h2>{selectedLanguage?.page3title4}</h2>
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
