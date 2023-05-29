import React from 'react';
import styled, { keyframes } from 'styled-components';
import Card from '../components/Card/Card';
import EmailIcon from '../components/Icon/EmailIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import GitHubIcon from '../components/Icon/GitHubIcon';
import Header from '../components/Titre/Header';
import Works from '../components/Works/Works';

const Main = styled.main`
  max-width: 1300px;
  width: 95%;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 55px;
  margin-bottom: 120px;
  
  >div:first-of-type {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`;

const Mes_travaux: React.FC = () => {
  return (
    <>
      <Header title={["Blampied Lucas", "Designer", "Développeur","Blampied Lucas", "Designer", "Développeur"]} />
      <Main>
        <div>
          <Card icon={EmailIcon} label="Email" href="mailto:lucas.blampied@lucas-blampied.fr" target="_blank"/>
          <Card icon={InstagramIcon} label="Instagram" href="https://www.instagram.com/lucas_blampied/" target="_blank"/>
          <Card icon={GitHubIcon} label="GitHub" href="https://github.com/Lulublamp" target="_blank"/>
        </div>
        <Works />
      </Main>
    </>
  );
}

export default Mes_travaux;
