import util from '../../helpers/utils/utils';
import photograph from '../../../screenshots/IMG_5486.jpg';

import './bio.scss';


const createBio = () => {
  let domString = '';
  domString += '<div class="card cardDisplay col-md-12 col col-md-12 w-75" id="bioPage">';
  domString += '<p class="intro">Welcome to My Page</p>';
  domString += `<img class = "myPhoto" src="${photograph}" alt="black and white selfie">`;
  domString += '<p class="bio-text">Hello!!!  My name is Michele Rawlins.  Welcome to my page.</p>';
  domString += '<p class="bio-text"> I have worked in manufacturing and the food industry for the last 32 years.</p>';
  domString += '<p class="bio-text"> Motivated, goal-oriented and driven business professional.(Just completed a year long part-time Web Developemnt Bootcamp while working full-time).</p>';
  domString += '<p class="bio-text"> How is that for motivated and goal-oriented?  I am flexible and versatile and thrive in deadline driven enviroments.</p>';
  domString += '<p class="bio-text"> I will bring a unique perspective to your company.  I have a deep understanding of most areas of business</p>';
  domString += '<p class="bio-text"> My love of coding started when I was tasked with creating a soccer website for the club where my daughter played soccer, a few years ago.</p>';
  domString += '<p class="bio-text"> I started looking at a four year degree at Austin Peay when a friend told me about Nashville Software School.</p>';
  domString += '<p class="bio-text">I signed up for a Jumpstart class and I was hooked.  I started coding and struggling and have never looked back.</p>';
  domString += '</div>';
  util.printToDom('bio-photo', domString);
};

export default { createBio };
