import util from '../../helpers/utils/utils';
import projects from '../../helpers/data/projectsData';

const createProjectCards = () => {
  projects.getProjects()
    .then((projectsList) => {
      let domString = '<div class="d-flex flex-wrap project container">';
      console.error('hello', projectsList);
      projectsList.forEach((finishedProjects) => {
        if (finishedProjects.available === true) {
          domString += '<div class="col-md-6 col-lg-6 card-separation">';
          // domString += '<div class="card-group d-flex flex-wrap">';
          domString += '<div class="card">';
          domString += '<div class="card-body col-6">';
          domString += '<div class="row">';
          domString += `<img class="project-screenshot" src="${finishedProjects.screenshot}" class="card-img-top" alt="Picture of candy product cards">`;
          domString += `<h5 class="project-title card-title">${finishedProjects.title}</h5>`;
          domString += `<p class="project-text card-text">${finishedProjects.description}</p>`;
          domString += `<p class = "card-technology">${finishedProjects.technologiesUsed}</p>`;
          domString += `<p>${finishedProjects.url}</p>`;
          domString += `<p>${finishedProjects.githubUrl}</p>`;
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          domString += '</div>';
          domString += '<div class="card-footer">';
          domString += '</div>';
        }

        util.printToDom('projects', domString);
      })
        .catch((err) => console.error('getProjects broke', err));
    });
};

export default { createProjectCards };
