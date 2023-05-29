import ChessMinds_LandingPage from '../../Asset/Gif/ChessMinds_LandingPage.gif';
import ChessBoard from '../../Asset/Img/ChessMindsChessBoards.png';
import ChessBoardMobile from '../../Asset/Img/ChessMindsChessBoards_mobile.png';
import ChessMindsAi from '../../Asset/Img/ChessMindsAi.png';
import ChessMindsMenu from '../../Asset/Img/ChessMindsMainMenu.png';
import ChessMindProfil from '../../Asset/Img/ChessMindsProfil.png';
import EmotionalGamJam from '../../Asset/Img/PapyPuppy_1.png';
import EmotionalGamJamTrailer from '../../Asset/Mp4/PapyPuppyTrailer.mp4';
import ProjeCtron from '../../Asset/Img/Projet C-tron.png';
import Flamy1 from '../../Asset/Img/Flamy_1.png';
import Flamy2 from '../../Asset/Img/Flamy_2.png';
import Flamy3 from '../../Asset/Img/Flamy_3.png';
import Flamy4 from '../../Asset/Img/Flamy_4.png';
import Flamy5 from '../../Asset/Img/Flamy_5.png';
import Lbac1 from '../../Asset/Img/lbac.png';
import Lbac2 from '../../Asset/Img/lbac2.png';
import LbacVideo from '../../Asset/Mp4/lbac.mp4';
import Porftolio1 from '../../Asset/Img/Portfolio_img1.png';
import Porftolio2 from '../../Asset/Img/Portfolio_img2.png';
import IAPoem from  '../../Asset/Img/Ia_poem.png';

//Liste des projets
export const projects = [
  {
    name: 'ChessMinds',
    title: 'ChessMinds',
    date: 'Mai-2023',
    description: `ChessMinds est une application Web innovante et interactive qui offre une plateforme pour jouer aux échecs en ligne. L'application est conçue avec une combinaison avancée de technologies frontend et backend, garantissant un gameplay fluide et sans faille pour tous les utilisateurs.`,
    link: 'https://git.unistra.fr/ahashem/projet-integrateur-echecs',
    images: [ChessMinds_LandingPage, ChessBoard, ChessBoardMobile, ChessMindsAi, ChessMindsMenu, ChessMindProfil],
    backgroundColor: '#C7E1EA',
    video : null,
  },
  {
    name: 'EmotionalGameJam',
    title: 'Papy Puppy',
    date: 'Février-2023',
    description : `Jeu créé pendant 48 heures dans le cadre de l'Emotional Game Jam 2023.
    🏆 Récompense de la meilleure mécanique. 
Vous incarnez un chiot qui doit faire le travail de son grand-père pendant son absence. Votre but est de protéger une relique sacrée située dans un musée, en gardant un œil sur les animaux qui s'y déplacent.`,
    link: 'https://akume.itch.io/papy-puppy',
    images: [EmotionalGamJam],
    backgroundColor: '#C4B9A8',
    video : EmotionalGamJamTrailer,
  },
  {
    name: 'C-tron',
    title: 'Projet C-tron',
    date: 'Janvier-2022',
    description : `Projet universitaire. 🐍 Jeu de cycles légers inspiré du film Tron qui peut être joué en multijoueur sur le réseau. Il y a un serveur qui gère la logique du jeu et les clients donnent simplement des entrées et gèrent l'affichage.`,
    link : 'https://github.com/Jeusto/c-tron',
    images: [ProjeCtron],
    backgroundColor: '#E6E8E5',
    video : null,
  },
  {
    name: 'TUFRGameJam',
    title: 'Flamy',
    date: 'Mai-2020',
    description : `Jeu créé pendant 48 heures lors de la TUFR Game Jam 2020
    🏆 Récompense pour le meilleur graphisme
    🏆 Récompense de la meilleure mécanique
Vous incarnez Flamy. Vous ne commencez avec aucune touches, aucun fond, aucune forme. Au fur et à mesure de votre progression, vous obtenez des compétences qui vous permettront de continuer à avancer. Jusqu'où vous mènera cette grotte ?`
    ,
    link: 'https://akume.itch.io/flamy',
    images: [Flamy1, Flamy2, Flamy3, Flamy4, Flamy5],
    backgroundColor: '#F2E9E4',
    video : null,
  },
  {
    name: 'LBAC',
    title: 'La bourse aux convoyages',
    date: '2019',
    description : `🚗 Application web. Un moyen simple et efficace d'annoncer vos convoyages`,
    link: 'https://www.la-bourse-aux-convoyages.eu',
    images: [Lbac1, Lbac2],
    backgroundColor: '#E5BA9C',
    video : LbacVideo,
  },
  {
    name: 'Portfolio',
    title: 'Portfolio',
    date: 'Mai-2023',
    description : `📝 Création de mon portfolio`,
    link: 'https://github.com/Lulublamp/Portfolio.git',
    images: [Porftolio1, Porftolio2],
    backgroundColor: '#C7E1EA',
    video : null,
  },
  {
    name: 'IaPoem',
    title: 'Intelligence Artificielle Poétique',
    date: '2019',
    description : `Génération de poèmes avec un réseau de neurones récurrents (RNN) et les chaînes de Markov. Entraînée sur des centaines de poèmes (Victor Hugo, Rimbaud, Baudelaire...) pour générer de nouveaux vers dans le style des poèmes qui lui sont donnés en entrée. Les chaînes de Markov sont utilisées pour écrire les phrases, tandis que le réseau de neurones récurrents est utilisé pour prédire la structure du vers suivant comme par exemple les rimes, les différentes syllabes mais aussi le sens que peut avoir le vers. Cette méthode est efficace pour faire des vers qui riment et qui ont du sens à court terme (une strophe) mais il n’y a pas vraiment de sens global au poème.
Réalisé en python avec Tensorflow.  
  `,
    link: '',
    images: [IAPoem],
    backgroundColor: '#C7E1EA',
    video : null,
  }
];
