import styles from './page2.module.css'
import {GiCook, GiPaintBrush, GiSewingNeedle} from 'react-icons/gi';
import {MdCardTravel, MdMovie, MdOutlineComputer} from 'react-icons/md';
import {FaBeer, FaCoffee, FaMusic, FaPencilAlt,FaUserGraduate} from 'react-icons/fa';
import {BiHappyHeartEyes} from 'react-icons/bi';
import {RiCodeSSlashLine} from 'react-icons/ri';

const Language = ({text, percent}) => {
    return (
        <div style={{marginBottom: 16}}>
            <label className={styles.titleLanguage}>{text}</label>
            <div className={styles.languageContainer}>
                <div style={{width: percent}} className={styles.languagePercent}/>
            </div>
        </div>
    )
}

const Hobby = ({text, Icon}) => {
    return (
        <div className={styles.hobbyContainer1}>
            <div className={styles.hobbyContainer2}>
                <div className={styles.hobbyContainer3}>
                    {Icon}
                </div>
                <label>{text}</label>
            </div>
        </div>
    )
}

export default function Page2() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <div className={styles.about}>
            <div style={{width: "100%"}}>
            <h2>
                Sobre mim
            </h2>
            <p className={styles.textAbout}>
                Entrei na área de TI em 2017, no curso de graduacao de Ciência da Computação que estudei por 3 anos. Nesse período
                tive além de uma ótima carga de conhecimento, também ótimas experiencias pessoais. Fui monitora de duas matérias (Enhenharia
                de Software e Técnicas de Programacao 1), paticipei de maratonas de programacao e vários mini cursos dentro da universidade 
                e online. Em 2020 tranquei o curso pois me mudei para Alemanha e logo depois em 2021 eu comecei o curso de 
                Engenharia de Software, que estou atualmente. <FaUserGraduate/> 
            </p>
            <p className={styles.textAbout}>
            Entrei na área de TI em 2017, no curso de graduação de Ciência da Computação que estudei por 3 anos. Nesse período tive além de uma ótima carga de conhecimento, também ótimas experiências pessoais. Fui monitora de duas matérias (Engenharia de Software e Técnicas de Programação 1), participei de maratonas de programação e vários mini cursos dentro da universidade e online. Em 2020 tranquei o curso pois me mudei para Alemanha e logo depois em 2021 eu comecei o curso de Engenharia de Software, que estou atualmente.  <MdOutlineComputer/>  
            </p>
            <p className={styles.textAbout}>
            Como profissional sou muito comprometida, responsável e dedicada. Sempre busco entender totalmente do negócio para entregar bons resultados e atender as expectativas. Gosto muito de trabalhar em equipe, fazer amizades e sempre busco harmonia no meio de trabalho. <RiCodeSSlashLine/>
            </p>
            <p className={styles.textAbout}>
            Como pessoa sou bastante extrovertida, tenho muitos amigos e adoro fazer amizades. No meu tempo livre gosto de sair, ir em bares e restaurantes, viajar, pintar com aquarela ou simplesmente assistir séries em casa. Sou uma pessoa justa e com muitos ideais, sou feminista e defendo muito igualdade de genero e todas as causas sociais. Adoro estudar e me aprofundar mais nesses assuntos sociais. Esse é um resumo sobre mim. <BiHappyHeartEyes/>
            </p>
            </div>
            <div className={styles.languagesContainer}>
                <h2>
                    Línguas
                </h2>
                <Language text="Português - nativa" percent="100%"/>
                <Language text="Inglês" percent="70%"/>
                <Language text="Alemão" percent="30%"/>
                <Language text="Espanhol" percent="10%"/>
            </div>
        </div>
        <h2>
        Hobbies e interesses
                </h2>
        <div className={styles.hobbies}>
            <Hobby text="Cozinha" Icon={<GiCook/>}/>
            <Hobby text="Viagens" Icon={<MdCardTravel/>}/>
            <Hobby text="Cerveja" Icon={<FaBeer/>}/>
            <Hobby text="Música" Icon={<FaMusic/>}/>
            <Hobby text="Aquarela" Icon={<GiPaintBrush/>}/>
            <Hobby text="Cinema" Icon={<MdMovie/>}/>
            <Hobby text="Café" Icon={<FaCoffee/>}/>
            <Hobby text="Tatuagens" Icon={<FaPencilAlt/>}/>
            <Hobby text="Costura" Icon={<GiSewingNeedle/>}/>
        </div>
      </div>
    </div>
  )
}
