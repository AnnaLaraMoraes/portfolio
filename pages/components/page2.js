import styles from './page2.module.css';
import { GiCook, GiPaintBrush, GiSewingNeedle } from 'react-icons/gi';
import { MdCardTravel, MdMovie } from 'react-icons/md';
import {
  FaBeer,
  FaCoffee,
  FaMusic,
  FaPencilAlt,
  FaUserGraduate,
} from 'react-icons/fa';
import { RiUserHeartFill, RiCodeSSlashLine } from 'react-icons/ri';

const Language = ({ text, percent }) => {
  return (
    <div style={{ marginBottom: 16 }}>
      <label className={styles.titleLanguage}>{text}</label>
      <div className={styles.languageContainer}>
        <div style={{ width: percent }} className={styles.languagePercent} />
      </div>
    </div>
  );
};

const Hobby = ({ text, Icon }) => {
  return (
    <div className={styles.hobbyContainer1}>
      <div className={styles.hobbyContainer2}>
        <div className={styles.hobbyContainer3}>{Icon}</div>
        <label>{text}</label>
      </div>
    </div>
  );
};

export default function Page2({ selectedLanguage }) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div style={{ width: '100%' }}>
          <h2>{selectedLanguage.page2title1}</h2>
          <p className={styles.textAbout}>
            {selectedLanguage.page2text1}
            <RiUserHeartFill />
          </p>
          <p className={styles.textAbout}>
            {selectedLanguage.page2text2}
            <FaUserGraduate />
          </p>
          <p className={styles.textAbout}>
            {selectedLanguage.page2text3}
            <RiCodeSSlashLine />
          </p>
        </div>
        <div className={styles.languagesContainer}>
          <h2>{selectedLanguage.page2title2}</h2>
          <Language text={selectedLanguage.language1} percent="100%" />
          <Language text={selectedLanguage.language2} percent="70%" />
          <Language text={selectedLanguage.language3} percent="30%" />
          <Language text={selectedLanguage.language4} percent="10%" />
        </div>

        <div>
          <h2>{selectedLanguage.page2title3}</h2>
          <div className={styles.hobbies}>
            <Hobby text={selectedLanguage.page2hobby1} Icon={<GiCook />} />
            <Hobby
              text={selectedLanguage.page2hobby2}
              Icon={<MdCardTravel />}
            />
            <Hobby text={selectedLanguage.page2hobby3} Icon={<FaBeer />} />
            <Hobby text={selectedLanguage.page2hobby4} Icon={<FaMusic />} />
            <Hobby
              text={selectedLanguage.page2hobby5}
              Icon={<GiPaintBrush />}
            />
            <Hobby text={selectedLanguage.page2hobby6} Icon={<MdMovie />} />
            <Hobby text={selectedLanguage.page2hobby7} Icon={<FaCoffee />} />
            <Hobby text={selectedLanguage.page2hobby8} Icon={<FaPencilAlt />} />
            <Hobby
              text={selectedLanguage.page2hobby9}
              Icon={<GiSewingNeedle />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
