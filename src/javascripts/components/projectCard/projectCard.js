import util from '../../helpers/utils/utils';
import 'bootstrap';

import projects from '../../helpers/data/projectsData';

const createProjectCards = () => {
  // let domString = '';
  projects.getProjects()
    .then((projectsList) => {
      let domString = '<div class="d-flex flex-wrap project container">';
      console.error('hello', projectsList);
      projectsList.forEach((finishedProjects) => {
        if (finishedProjects.available === true) {
          domString += '<div class="col-md-12">';
          // domString += '<div class="card">';
          domString += '<div class="card-body col-md-12">';
          // domString += '<div class="row">';
          domString += `<h5 class="project-title card-title">${finishedProjects.title}</h5>`;
          domString += `<img class="card-img-top project-screenshot" src="${finishedProjects.screenshot}">`;
          domString += `<p class="project-text card-text">${finishedProjects.description}</p>`;
          domString += `<p class="card-technology project-text">${finishedProjects.technologiesUsed}</p>`;
          domString += `<a class="project-text" href =${finishedProjects.url}><span class="text-target">url:<span>${finishedProjects.url}</a>`;
          domString += '<div></div>';
          domString += `<a class="project-text" href =${finishedProjects.githubUrl}>GitHub: ${finishedProjects.githubUrl}</a>`;
          domString += '</div>';
          domString += '</div>';
          // domString += '</div>';
          // domString += '</div>';
          domString += '<div class="card-footer">';
          domString += '</div>';
        }
        util.printToDom('projects', domString);
      })
        .catch((err) => console.error('getProjects broke', err));
    });
};
  // domString += '<h2 class="project-title">Projects</h2>';
  // domString += '<h6 class="project-title">(Project photos are clickable links within carousel)</h6>';
  // domString += '<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">';
  // domString += '<ol class="carousel-indicators">';
  // domString += '<li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>';
  // domString += '<li data-target="#carouselExampleCaptions" data-slide-to="1"></li>';
  // domString += '<li data-target="#carouselExampleCaptions" data-slide-to="2"></li>';
  // domString += '<li data-target="#carouselExampleCaptions" data-slide-to="3"></li>';
  // domString += '</ol>';
  // domString += '<div class="carousel-inner">';
  // domString += '<div class="carousel-item card-display col-md-6 active">';
  // domString += '<h5>Project Cards</h5>';
  // domString += '<p class="carousel-paragraph">My very first project.  This project was an introduction to Html,CSS, Vanilla Javascript and version control on Github.</p>';
  // domString += '<a href="https://github.com/Michele-Rawlins/product-cards"><img class="carousel-image" src="https://live.staticflickr.com/65535/49932153253_f0e8db529b_c.jpg" class="d-block w-100" alt="Product cards of candy"></a>';
  // domString += '<div class="carousel-caption d-none d-md-block">';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '<div class="carousel-item card-display col-md-6">';
  // domString += '<h5>Pet Adopt</h5>';
  // domString += '<p class="carousel-paragraph">This project utilized, HTML, CSS, Javascript and Github version control.</p>';
  // domString += '<a href="https://github.com/Michele-Rawlins/pet-adoption2"><img class="carousel-image"src="https://live.staticflickr.com/65535/49932974957_43d1d5a63d_c.jpg" class="d-block w-100" alt="Card of animals"></a>';
  // domString += '<div class="carousel-caption d-none d-md-block">';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '<div class="carousel-item card-display col-md-6">';
  // domString += '<h5>Bear Watcher</h5>';
  // domString += '<p class="carousel-paragraph">Technologies used are HTML, CSS, Javascript and Github version control.</p>';
  // domString += '<a href="https://github.com/Michele-Rawlins/bearWatcher"><img class="carousel-image"src="https://live.staticflickr.com/65535/49932975682_ec93f6c9fa_c.jpg" class="d-block w-100" alt="..."></a>';
  // domString += '<div class="carousel-caption d-none d-md-block">';
  // domString += '<div class="p-carousel">';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '<div class="carousel-item card-display col-md-6">';
  // domString += '<h5>Nautilus</h5>';
  // domString += '<p class="carousel-paragraph">This project involved full Crud.  We used HTML, CSS, Javascript, JQuery, Sass, Json and version control in Github.   We worked in teams and had to coordinate the project with each individual responsiblie for a certain page and section and worked through gitcidents. </p>';
  // domString += '<a href="https://nautilus-explorer.web.app"><img class="carousel-image"src="https://live.staticflickr.com/65535/49932152628_a2fcda80d3_c.jpg" class="d-block w-100" alt="..."></a>';
  // domString += '<div class="carousel-caption d-none d-md-block">';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '<div class="carousel-item card-display col-md-6">';
  // domString += '<h5>Mushroom Picker</h5>';
  // domString += '<p class="carousel-paragraph">I used HTML, CSS, Javascript, JQuery, Sass, Json, React and version control in Github.</p>';
  // domString += '<a href="https://github.com/Michele-Rawlins/mushroom-picker"><img class="carousel-image"src="<a data-flickr-embed="true" href="https://www.flickr.com/photos/188592701@N03/49961042687/in/dateposted-public/" title="Mushroom Picker"><img src="https://live.staticflickr.com/65535/49961042687_89d802ba12_c.jpg" class="d-block w-100" alt="..."></a>';
  // domString += '<div class="carousel-caption d-none d-md-block">';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '</div>';
  // domString += '<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">';
  // domString += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>';
  // domString += '<span class="sr-only">Previous</span>';
  // domString += '</a>';
  // domString += '<a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">';
  // domString += '<span class="carousel-control-next-icon" aria-hidden="true"></span>';
  // domString += '<span class="sr-only">Next</span>';
  // domString += '</a>';
  // domString += '</div>';
  // }
  // util.printToDom('projects', domString);
  // })
  // .catch((err) => console.error('getProjects broke', err));
  // });
// };


export default { createProjectCards };
