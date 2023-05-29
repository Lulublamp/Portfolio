import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card/Card';
import EmailIcon from '../components/Icon/EmailIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import GitHubIcon from '../components/Icon/GitHubIcon';
import Header from '../components/Titre/Header';
import ProfileInfo from '../components/Profile/ProfileInfo';
import ImageProfil from '../Asset/Img/photo_profil.jpg';
import ProfileCard from '../components/Profile/ProfileCard';
import Toque_etudeIcon from '../components/Icon/Toque_etudeIcon';
import TropheIcon from '../components/Icon/TropheIcon';
import SkiIcon from '../components/Icon/SkiIcon';
import ArcheryIcon from '../components/Icon/ArcheryIcon';
import LoveSection from '../components/Profile/LoveSection';

const Main = styled.main`
  max-width: 1300px;
  width: 95%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 55px;
  
  >div:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  .profil {
    width: 100%;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 200px;
  }

  .profil>div:nth-of-type(2),
  .profil>div:nth-of-type(4) {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 40px;
  }

  .profil>div:nth-of-type(2) span,
  .profil>div:nth-of-type(4) span {
    font-size: 32px;
    color: var(--main-color);
    margin-left: 10px;
  }

  .profil > div:nth-of-type(5) svg path{
    fill: var(--main-color);
  }
`;

const Profile: React.FC = () => {
  return (
    <>
      <Header title={["Blampied Lucas", "Designer", "Développeur", "Blampied Lucas", "Designer", "Développeur"]} />
      <Main>
        <div>
          <Card icon={EmailIcon} label="Email" href="mailto:lucas.blampied@lucas-blampied.fr" target="_blank" />
          <Card icon={InstagramIcon} label="Instagram" href="https://www.instagram.com/lucas_blampied/" target="_blank" />
          <Card icon={GitHubIcon} label="GitHub" href="https://github.com/Lulublamp" target="_blank" />
        </div>
        <section className='profil'>
          <ProfileInfo
            imageUrl={ImageProfil}
            altText="Photo de profil BLAMPIED LUCAS"
            description="Je suis Lucas BLAMPIED, un passionné d'intelligence artificielle, de mathématiques et de conception de jeux vidéo. Mon parcours autodidacte, enrichi par mes études à l'UFR de Strasbourg, m'a doté de compétences solides en développement logiciel et web. Avec plus de 3 ans d'expérience en freelance, j'ai prouvé ma capacité à relever des défis complexes, tout en maintenant un focus constant sur l'esthétique. Que ce soit pour de l'algorithmique complexe ou la création de sites web accrocheurs, j'apporte une passion indéfectible et une curiosité insatiable à chaque projet."
          />
          <div>
            <svg width="22" height="7" viewBox="0 0 22 7" fill="none">
              <line y1="0.5" x2="22" y2="0.5" stroke="#141937" />
              <line y1="6.5" x2="22" y2="6.5" stroke="#141937" />
            </svg>
            <span>Diplome et récompenses</span>
          </div>
          <div>
            <ProfileCard year='2023' title='Licence d’informatique à Strasbourg' svgIcon={Toque_etudeIcon} />
            <ProfileCard year='2023' title='The emotional Game Jam 2023' svgIcon={TropheIcon} />
            <ProfileCard year='2022' title='OpenAI Codex Challenge' svgIcon={TropheIcon} />
            <ProfileCard year='2020' title='the TUFR Game Jam 2020' svgIcon={TropheIcon} />
          </div>
          <div>
            <svg width="22" height="7" viewBox="0 0 22 7" fill="none">
              <line y1="0.5" x2="22" y2="0.5" stroke="#141937" />
              <line y1="6.5" x2="22" y2="6.5" stroke="#141937" />
            </svg>
            <span>Passions</span>
          </div>
          <div>
            <ProfileCard year='2022-...' title='Moniteur de ski (Suaps de Strasbourg)' svgIcon={SkiIcon} />
            <ProfileCard year='2021-...' title='Moniteur de tir à l’arc (Suaps de Strasbourg)' svgIcon={ArcheryIcon} />
          </div>
          <LoveSection />
        </section>
      </Main>
    </>
  );
}

export default Profile;
