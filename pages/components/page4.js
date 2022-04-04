import styles from './page4.module.css';
import Card from './card';
import { RiCodeSSlashLine } from 'react-icons/ri';

const Job = ({ title, date, locale, description, backgroundColor }) => {
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

export default function Page4() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        {/* <div className={styles.imgContainer}>
          <img style={{position: "absolute", zIndex: 5}} src="/timeline.svg" alt="Me"/>
        </div> */}
        <h2>Experiência Profissional</h2>
        <p className={styles.textAbout}>
          Como profissional sou muito comprometida, motivada, responsável e
          dedicada. Sempre busco entender totalmente do negócio para entregar
          bons resultados e atender as expectativas. Gosto muito de trabalhar em
          equipe, com processos e regras. Já tive experiências de trabalho
          presencial e remoto e consegui me adaptar bem em amobos os modelos.
          Amo novos desafios e de estudar sobre a área que estou trabalhando, no
          Brasil tive a oportunidade de trabalhar na área de agropecuária e de
          pesquisa científica e na Alemanha na área de logistica. Sou totalmente
          adaptável, busco sempre muita comunicação com as pessoas que trabalho,
          pois acredito que é algo muito importante para desenvolvimento de
          qualidade, e aprendo com facilidade novas tecnologias.{' '}
          <RiCodeSSlashLine />
        </p>
        <div className={styles.jobDiv}>
          <Card
            color="#F3D9FC"
            child={
              <Job
                title="Desenvolvedor de Software - UNBIND"
                date="jul de 2021 - dez de 2021"
                locale="Colónia, Renânia do Norte-Vestfália, Alemanha"
                description="Desenvolvimento de protótipos, criação de landing page responsivas, manutenção em frontend de website e criação de novas funcionalidades. Utilização das tecnologias: ReactJs, Tailwind Css, Bootstrap, Gatsby, Storybook, Figma, Notion, Git, Github e Gitlab. "
                backgroundColor="#A7FCA8"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title="Desenvolvedor de Software - Beef System"
                date="dez de 2020 - abr de 2021"
                locale="Remoto"
                description="Criação de protótipos web e mobile com Figma,
                uso das tecnologias React Js, React Native, NodeJs, Adonis, Sql, Git e Github para controle de versão,
                desenvolvimento de aplicativos mobile para controle de gado, refatoração e criação de novas funcionalidades em website.
                "
                backgroundColor="#FCA7D1"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title="Desenvolvedor de Software - Freelance"
                date="out de 2020 - dez de 2020 "
                locale="Remoto"
                description="Criação de protótipos web e mobile com Figma,
                uso das tecnologias ReactJs, NodeJs, MongoDb, Mongoose, Git para controle de versão,
                manutenção em website e criação de páginas web."
                backgroundColor="#FCB3A7"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title="Desenvolvedor de Software - Structor"
                date="mar de 2020 - set de 2020"
                locale="Remoto"
                description="Desenvolvimentos de novas funcionalidades e manutenção em plataforma web e aplicação mobile,
                Uuo de tecnologias ReactJs, React Native, NodeJs, MongoDb, Mongoose, Git para controle de versão entre outras,
                desenvolvimento de protótipos web e mobile com Figma,
                utilização da metodologia ágil Scrum."
                backgroundColor="#C0FCC0"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title="Estágio em desenvolvimento de software - Rancho Soluções em Tecnologia"
                date="jun de 2019 - fev de 2020"
                locale="Goiânia, Goiás"
                description="Desenvolvimento de novas funcionalidades e manutenção em sistema web,
                suporte ao usuário,
              participação na criação do módulo financeiro do site da empresa,
                refatoração de código,
                integração da API de pagamento (IUGU),
                uso das tecnologias NodeJS, VueJS, MySql, Git e GitLab, com o sistema operacional Windows,
                utilização da metodologia ágil Scrum."
                backgroundColor="#D9E5FC"
              />
            }
          />
          <Card
            color="#F3D9FC"
            child={
              <Job
                title="Estágio em desenvolvimento de software - Furnas - DSB.E/DIG.E"
                date="mar de 2018 - jun de 2019 "
                locale="Goiânia, Goiás"
                description="Desenvolvimento de novas funcionalidades e manutenção em sistema web,
                suporte aos funcionários,
                uso das tecnologias PHP, HTML, CSS, JavaScript e MariaDB, com o sistema operacional Ubuntu.
                Trabalhei em conjunto com um grupo de pesquisa na área de aerodinâmica e criei um sistema de processamento e análise de dados ambientais que visa estudar o clima de determinadas áreas para criar campos para geração de energia eólica e solar."
                backgroundColor="#D9E5FC"
              />
            }
          />
        </div>
      </div>
    </div>
  );
}
