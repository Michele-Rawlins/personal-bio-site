import util from '../../helpers/utils/utils';
import projects from '../../helpers/data/projectData';

const createProjectCards = () => {
  const projectsList = projects.getProjects();
  let domString = '';
  projectsList.forEach((finishedProjects) => {
    domString += '<div class="card-group d-flex row-wrap">';
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    domString += `<img src="${finishedProjects.screenshot}" class="card-img-top" alt="Picture of candy product cards">`;
    domString += `<h5 class="card-title">${finishedProjects.title}</h5>`;
    domString += `<p class="card-text">${finishedProjects.description}</p>`;
    domString += `<p class = "card-technology">${finishedProjects.technologiesUsed}</p>`;
    domString += `<p>${finishedProjects.url}</p>`;
    domString += `<p>${finishedProjects.githubUrl}</p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '<div class="card-footer">';
  });
  util.printToDom('projects', domString);
};

export default { createProjectCards };
