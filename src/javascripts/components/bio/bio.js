import util from '../../helpers/utils/utils';
import photograph from '../../../screenshots/IMG_5486.jpg';

const createBio = () => {
  let domString = '';
  domString += '<div id = "bioPage">';
  domString += `<img class = "myPhoto" src="${photograph}" alt="black and white selfie">`;
  domString += '<p>Hello!!!  My name is Michele Rawlins.  Welcome to my page.</p>';
  domString += '<p> I have worked in manufacturing and the food industry for the last 32 years.</p>';
  domString += '<p> I will bring a unique perspective to your company.  I have a deep understanding of most areas of business</p>';
  domString += '<p> My love of coding started when I was tasked with creating a soccer website for the club where my daughter played soccer, a few years ago.</p>';
  domString += '<p> I started looking at a four year degree at Austin Peay when a friend told me about Nashville Software School.</p>';
  domString += '<p>I signed up for a Jumpstart class and I was hooked.  I started coding and struggling and have never looked back.</p>';
  domString += '<p> Your compass brought you here.  Let me lead you to the next destination.</p>';
  domString += '</div>';
  util.printToDom('bio-photo', domString);
};

export default { createBio };
