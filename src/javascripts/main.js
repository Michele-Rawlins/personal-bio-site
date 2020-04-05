
import '../styles/main.scss';
import util from './helpers/utils/utils';
import photograph from '../screenshots/IMG_5486.jpg';
import projectCards from './components/projectCard/projectCard';


console.error('hi');

const createBio = () => {
  let domString = '';
  domString += '<div id = "bioPage">';
  domString += `<img class = "myPhoto" src="${photograph}" alt="black and white selfie">`;
  domString += '<p>Hello!!!  My name is Michele Rawlins.  Welcome to my page.</p>';
  domString += '<p> I have worked in manufacturing and the food industry for the last 32 years.</p>';
  domString += '<p> My love of coding started when I was tasked with creating a soccer website for the club where my daughter played soccer, a few years ago.</p>';
  domString += '<p> I started looking at a four year degree at Austin Peay when a friend told me about Nashville Software School.</p>';
  domString += '<p>I signed up for a Jumpstart class and I was hooked.  I started coding and struggling and have never looked back.</p>';
  util.printToDom('bio-photo', domString);
};


const init = () => {
  projectCards.createProjectCards();
  createBio();
};

init();
