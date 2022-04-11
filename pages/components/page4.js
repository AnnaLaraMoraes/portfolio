import styles from './page4.module.css';
import Card from './card';

const Job = ({ title, date, locale, description }) => {
  return (
    <div className={styles.job}>
      <label style={{ fontWeight: 700, fontSize: 18 }}>{title}</label>
      <label>{date}</label>
      <label>{locale}</label>
      <label
        style={{
          marginTop: 16,
          marginBottom: 6,
          fontWeight: 600,
          textDecoration: 'underline',
        }}
      >
        Atividades
      </label>
      <p style={{ margin: 0 }}>{description}</p>
    </div>
  );
};

export default function Page4({ selectedLanguage }) {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <h2>{selectedLanguage.page4title1}</h2>
        <div className={styles.jobDiv}>
          <Card
            color="#F3D9FC"
            child={
              <Job
                title={selectedLanguage.page4job1title}
                date={selectedLanguage.page4job1date}
                locale={selectedLanguage.page4job1locale}
                description={selectedLanguage.page4job1description}
                backgroundColor="#A7FCA8"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title={selectedLanguage.page4job2title}
                date={selectedLanguage.page4job2date}
                locale={selectedLanguage.page4job2locale}
                description={selectedLanguage.page4job2description}
                backgroundColor="#FCA7D1"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title={selectedLanguage.page4job3title}
                date={selectedLanguage.page4job3date}
                locale={selectedLanguage.page4job3locale}
                description={selectedLanguage.page4job3description}
                backgroundColor="#FCB3A7"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title={selectedLanguage.page4job4title}
                date={selectedLanguage.page4job4date}
                locale={selectedLanguage.page4job4locale}
                description={selectedLanguage.page4job4description}
                backgroundColor="#C0FCC0"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title={selectedLanguage.page4job5title}
                date={selectedLanguage.page4job5date}
                locale={selectedLanguage.page4job5locale}
                description={selectedLanguage.page4job5description}
                backgroundColor="#D9E5FC"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title={selectedLanguage.page4job6title}
                date={selectedLanguage.page4job6date}
                locale={selectedLanguage.page4job6locale}
                description={selectedLanguage.page4job6description}
                backgroundColor="#D9E5FC"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
