import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

import projectCards from './components/projectCard/projectCard';

import bio from './components/bio/bio';
import tech from './components/technologies/technologies';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  bio.createBio();
  projectCards.createProjectCards();
  tech.technologies();
};

init();
