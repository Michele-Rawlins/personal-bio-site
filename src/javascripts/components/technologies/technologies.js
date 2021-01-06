import html from '../../../screenshots/html.png';
import css from '../../../screenshots/css.png';
import bootstrap from '../../../screenshots/bootstrap.png';
import git from '../../../screenshots/git.png';
import github from '../../../screenshots/github.png';
import sass from '../../../screenshots/Sass.png';
import webpack from '../../../screenshots/webpackpng.png';
import js from '../../../screenshots/javascript.png';
import jquery from '../../../screenshots/jquery.png';
import axios from '../../../screenshots/axios.png';
import util from '../../helpers/utils/utils';
import aspnet from '../../../screenshots/aspnetMVC.png';
import csharp from '../../../screenshots/csharp.png';
import dotnetcore from '../../../screenshots/dotnetcore.png';
import eslint from '../../../screenshots/eslint.png';
import firebase from '../../../screenshots/firebase.png';
import npm from '../../../screenshots/npm.png';
import reactLogo from '../../../screenshots/react.png';
import sqlserver from '../../../screenshots/sqlserver.png';
import visualStudio from '../../../screenshots/visualstudio.png';
import vsc from '../../../screenshots/vsc.png';
import postman from '../../../screenshots/postman.png';
import moqups from '../../../screenshots/moqup.png';


import './technologies.scss';


const technologies = () => {
  let domString = '';
  domString += '<div class="technologies" id="techPage">';
  // domString += '<div class="card cardDisplay"  id="techPage">';
  domString += '<h2 class="tech-header"> Technologies</h2>';
  domString += '<div class="row row-cols-12" id="tech-icon">';
  domString += `<img class="tech-icon" src="${html}"></img>`;
  domString += `<img class="tech-icon" src="${css}"></img>`;
  domString += `<img class="tech-icon" src="${bootstrap}"></img>`;
  domString += `<img class="tech-icon" src="${git}"></img>`;
  domString += `<img class="tech-icon" src="${github}"></img>`;
  domString += `<img class="tech-icon" src="${sass}"></img>`;
  domString += `<img class="tech-icon" src="${js}"></img>`;
  domString += `<img class="tech-icon" src="${jquery}"></img>`;
  domString += `<img class="tech-icon" src="${webpack}"></img>`;
  domString += `<img class="tech-icon" src="${axios}"></img>`;
  domString += `<img class="tech-icon" src="${aspnet}"></img>`;
  domString += `<img class="tech-icon" src="${csharp}"></img>`;
  domString += `<img class="tech-icon" src="${dotnetcore}"></img>`;
  domString += `<img class="tech-icon" src="${eslint}"></img>`;
  domString += `<img class="tech-icon" src="${firebase}"></img>`;
  domString += `<img class="tech-icon" src="${npm}"></img>`;
  domString += `<img class="tech-icon" src="${reactLogo}"></img>`;
  domString += `<img class="tech-icon" src="${sqlserver}"></img>`;
  domString += `<img class="tech-icon" src="${visualStudio}"></img>`;
  domString += `<img class="tech-icon" src="${vsc}"></img>`;
  domString += `<img class="tech-icon" src="${postman}"></img>`;
  domString += `<img class="tech-icon" src="${moqups}"></img>`;
  domString += '</div>';
  domString += '</div>';
  util.printToDom('technologies', domString);
};

export default { technologies };
