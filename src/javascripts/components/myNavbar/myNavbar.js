import util from '../../helpers/utils/utils';
// import compass from '../../../screenshots/compass.png';
import logo from '../../../screenshots/myLogo.png';
import './myNavbar.scss';

const myNavbar = () => {
  let domString = '';
  domString += '<div class="navbar-bio" id="navbar">';
  domString += '<nav class="navbar navbar-expand-md sticky-top">';
  // domString += '<img class="navbar-brand" src="https://images.unsplash.com/photo-1565279427445-10c13a1d1f82?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"></img>';
  // domString += '<img class="navbar-brand" src="${logo}"></img>';
  domString += `<img class = "navbar-brand mylogo" src="${logo}" alt="logo">`;
  domString += ' <div class="navbar-nav">';
  domString += ' <a class="nav-item nav-link active" href="#bio-photo">Bio</a>';
  domString += ' <a class="nav-item nav-link" href="#technologies">Technologies</a>';
  domString += ' <a class="nav-item nav-link" href="#projects">Projects</a>';
  domString += '</div>';
  domString += '</nav>';

  util.printToDom('myNavbar', domString);
};

export default { myNavbar };
