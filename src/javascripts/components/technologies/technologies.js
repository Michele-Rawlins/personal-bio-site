import html from '../../../screenshots/html.png';
import css from '../../../screenshots/css.png';
import bootstrap from '../../../screenshots/bootstrap.png';
import git from '../../../screenshots/git.png';
import github from '../../../screenshots/github.png';
import sass from '../../../screenshots/Sass.png';
import webpack from '../../../screenshots/webpackpng.png';
import react from '../../../screenshots/react.png';
import util from '../../helpers/utils/utils';


const technologies = () => {
  let domString = '';
  domString += '<div id="technologies">';
  domString += '<h2 class="tech-header"> Technologies</h2>';
  domString += '<div class="technology-container">';
  domString += '<div class="row row-cols-4 tech-icon">';
  domString += `<img class="col tech-icon" src="${html}"></img>`;
  domString += `<img class="col tech-icon" src="${css}"></img>`;
  domString += `<img class="col tech-icon" src="${bootstrap}"></img>`;
  domString += `<img class="col tech-icon" src="${git}"></img>`;
  domString += `<img class="col tech-icon" src="${github}"></img>`;
  domString += `<img class="col tech-icon" src="${sass}"></img>`;
  domString += `<img class="col tech-icon" src="${webpack}"></img>`;
  domString += `<img class="col tech-icon" src="${react}"></img>`;
  domString += '</div>';
  domString += '</div>';
  util.printToDom('technologies', domString);
};

export default { technologies };
