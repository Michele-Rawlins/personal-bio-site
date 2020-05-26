import firebase from 'firebase/app';
import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';

import projectCards from './components/projectCard/projectCard';

import bio from './components/bio/bio';
import tech from './components/technologies/technologies';
import myNavbar from './components/myNavbar/myNavbar';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.myNavbar();
  bio.createBio();
  projectCards.createProjectCards();
  tech.technologies();
};

init();
