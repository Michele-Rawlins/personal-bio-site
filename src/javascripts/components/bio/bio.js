import util from '../../helpers/utils/utils';
import photograph from '../../../screenshots/thumbnail.jpg';

import './bio.scss';


const createBio = () => {
  let domString = '';
  // domString += '<div class="card cardDisplay col-md-12 col col-md-12 w-85" id="bioPage">';
  domString += '<div class="bio" id="bioPage">';
  // domString += '<p class="intro">Welcome to My Page</p>';
  domString += `<img class = "myPhoto" src="${photograph}" alt="black and white selfie">`;
  domString += '<p class="bio-text">Hello!!!  My name is Michele Rawlins.  Welcome to my page.</p>';
  domString += '<p class="bio-text"> I have worked in manufacturing and the food industry for the last 32 years.</p>';
  domString += '<p class="bio-text">Recently, I have reinvented myself.</p>';
  domString += '<p class="bio-text"> My love of coding started when I was tasked with creating a soccer website for the club where my daughter played soccer, a few years ago.</p>';
  domString += '<p class="bio-text"> I started looking at a four year degree at Austin Peay when a friend told me about Nashville Software School.</p>';
  domString += '<p class="bio-text">I signed up for a Jumpstart class and I was hooked.  I started coding and struggling and have never looked back.</p>';
  domString += '<p class="bio-text">Let us create something amazing</p>';
  domString += '</div>';
  domString += '<hr></hr>';
  util.printToDom('bio-photo', domString);
};

export default { createBio };
