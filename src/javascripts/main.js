import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

import projectCards from './components/projectCard/projectCard';
import bio from './components/bio/bio';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  projectCards.createProjectCards();
  bio.createBio();
};

init();
