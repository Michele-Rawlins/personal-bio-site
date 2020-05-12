import html from '../../../screenshots/html.png';
import css from '../../../screenshots/css.png';

import util from '../../helpers/utils/utils';


const technologies = () => {
  let domString = '';
  domString += '<div id = "technologies">';
  domString += '<h2> Technologies</h2>';
  domString += '<div class="technology-container">';
  domString += '<div class="row row-cols-4">';
  domString += `<img class="col" src="${html}"></img>`;
  domString += `<img class="col" src="${css}"></img>`;
  domString += '<div class="col">Column</div>';
  domString += '<div class="col">Column</div>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('technologies', domString);
};

export default { technologies };
