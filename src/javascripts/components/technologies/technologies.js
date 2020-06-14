import html from '../../../screenshots/html.png';
import css from '../../../screenshots/css.png';
import bootstrap from '../../../screenshots/bootstrap.png';
import git from '../../../screenshots/git.png';
import github from '../../../screenshots/github.png';
import sass from '../../../screenshots/Sass.png';
import webpack from '../../../screenshots/webpackpng.png';
import react from '../../../screenshots/lightReact.png';
import js from '../../../screenshots/javascript.png';
import jquery from '../../../screenshots/jquery.png';
import axios from '../../../screenshots/axios.png';
import util from '../../helpers/utils/utils';


const technologies = () => {
  let domString = '';
  // domString += '<div id="technologies">';
  domString += '<div class="card cardDisplay cols-12" id="techPage">';
  domString += '<h2 class="tech-header"> Technologies</h2>';
  domString += '<div class="row row-cols-10" id="tech-icon">';
  domString += `<img class="tech-icon" src="${html}"></img>`;
  domString += `<img class="tech-icon" src="${css}"></img>`;
  domString += `<img class="tech-icon" src="${bootstrap}"></img>`;
  domString += `<img class="tech-icon" src="${git}"></img>`;
  domString += `<img class="tech-icon" src="${github}"></img>`;
  domString += `<img class="tech-icon" src="${sass}"></img>`;
  domString += `<img class="tech-icon" src="${js}"></img>`;
  domString += `<img class="tech-icon" src="${jquery}"></img>`;
  domString += `<img class="tech-icon" src="${react}"></img>`;
  domString += `<img class="tech-icon" src="${webpack}"></img>`;
  domString += `<img class="tech-icon" src="${axios}"></img>`;
  domString += '</div>';
  domString += '</div>';
  util.printToDom('technologies', domString);
};

export default { technologies };
