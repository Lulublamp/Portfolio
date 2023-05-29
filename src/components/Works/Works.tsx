import React from 'react';
import './Works.css';
import WorkCard from './WorkCard';
import ChessMinds from '../../Asset/Img/0_1.png';
import EmotionalGamJam from '../../Asset/Img/0_2.png';
import ProjetCtron from '../../Asset/Img/0_4.png';
import GamJam2021 from '../../Asset/Img/0_6.png';
import LBAC from '../../Asset/Img/0_7.png';
import Porfolio from '../../Asset/Img/0_5.png';
import IAPoem from '../../Asset/Img/0_8.png';

const Works: React.FC = () => {
  return (
    <section className="works">
      <div>
        <svg width="22" height="7" viewBox="0 0 22 7" fill="none">
          <line y1="0.5" x2="22" y2="0.5" stroke="#141937" />
          <line y1="6.5" x2="22" y2="6.5" stroke="#141937" />
        </svg>
        <span>Mes travaux</span>
      </div>
      <div>
        <WorkCard
          year="2023"
          title="Portfolio"
          tags={["Design", "React", "TypeScript"]}
          imagePath={Porfolio}
          href='/works/Portfolio'
        />
        <WorkCard
          year="2023"
          title="ChessMinds"
          tags={["Design", "React", "NestJS", "TypeScript", "AI", "Socket", "Electron"]}
          imagePath={ChessMinds}
          href='/works/ChessMinds'
        />
        <WorkCard
          year="2023"
          title="The emotional Game Jam 2023"
          tags={["Game Development", "Unity", "C#", "Game Jam"]}
          imagePath={EmotionalGamJam}
          href='/works/EmotionalGameJam'
        />
        <WorkCard
          year="2022"
          title="Projet C-tron"
          tags={["Multijoueur", "Socket", "C"]}
          imagePath={ProjetCtron}
          href='/works/C-tron'
        />
        <WorkCard
          year="2020"
          title="the TUFR Game Jam 2020"
          tags={["Game Development", "Unity", "C#", "Game Jam"]}
          imagePath={GamJam2021}
          href='/works/TUFRGameJam '
        />
        <WorkCard
          year="2019"
          title="LBAC"
          tags={["Web Development", "Vue.js", "Php", "Design"]}
          imagePath={LBAC}
          href='/works/LBAC'
        />
        <WorkCard
          year="2018"
          title="Ia poem"
          tags={["Artificial Intelligence", "Python"]}
          imagePath={IAPoem}
          href='/works/IaPoem'
        />
      </div>
    </section>
  );
}

export default Works;