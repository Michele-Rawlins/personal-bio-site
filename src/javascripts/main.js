
import '../styles/main.scss';
import util from './helpers/utils/utils';
import photograph from '../screenshots/IMG_5486.jpg';
import projectCards from './components/projectCard/projectCard';


console.error('hi');

const createBio = () => {
  let domString = '';
  domString += '<div>';
  domString += `<img src="${photograph}" alt="black and white selfie">`;
  domString += '<p>Hello!!!  My name is Michele Rawlins.  Welcome to my page.</p>';
  domString += '<p> I have worked in manufacturing and the food industry for the last 32 years.</p>';


  util.printToDom('bio-photo', domString);
};


const init = () => {
  projectCards.createProjectCards();
  createBio();
};

init();
