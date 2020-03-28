
import '../styles/main.scss';
import util from './helpers/utils/utils';
import projects from './helpers/data/projectData';
import photograph from '../screenshots/IMG_5486.jpg';


console.error('hi');

const createBio = () => {
  let domString = '';
  domString += '<div>';
  domString += `<img src="${photograph}" alt="black and white selfie">`;
  domString += '<p>Hello!!!  My name is Michele Rawlins.  Welcome to my page.</p>';
  domString += '<p> I have worked in manufacturing and the food industry for the last 32 years.</p>';


  util.printToDom('bio-photo', domString);
};

const createProjectCards = () => {
  const projectsList = projects.getProjects();
  let domString = '';
  projectsList.forEach((finishedProjects) => {
    domString += `<div id ="title">${finishedProjects.title}`;
    domString += `<img src = ${finishedProjects.screenshot}>`;
    domString += `<p>${finishedProjects.description}</p>`;
    domString += `<p>${finishedProjects.technologiesUsed}</p>`;
    domString += `<p>${finishedProjects.url}</p>`;
    domString += `<p>${finishedProjects.githubUrl}</p>`;
  });
  util.printToDom('projects', domString);
};
const init = () => {
  createProjectCards();
  createBio();
};

init();
