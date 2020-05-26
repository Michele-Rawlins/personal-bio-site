import util from '../../helpers/utils/utils';
import compass from '../../../screenshots/compass.png';

const myNavbar = () => {
  let domString = '';
  domString += '<div id=navbar">';
  domString += '<nav class="navbar navbar-expand-lg navbar-light bg-light">';
  domString += `<img class="navbar-brand">${compass}</img>`;
  domString += ' <div class="navbar-nav">';
  domString += ' <a class="nav-item nav-link active" href="#bio-photo">Bio</a>';
  domString += ' <a class="nav-item nav-link" href="#technologies">Technologies</a>';
  domString += ' <a class="nav-item nav-link" href="#projects">Projects</a>';
  domString += '</div>';
  domString += '</nav>';

  util.printToDom('myNavbar', domString);
};

export default { myNavbar };
