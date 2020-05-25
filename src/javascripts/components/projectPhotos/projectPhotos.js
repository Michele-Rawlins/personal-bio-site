import productCardPhoto from '../../../screenshots/productCards.png';
import PetAdoption from '../../../screenshots/PetAdoption2.png';
import BearWatcher from '../../../screenshots/BearWatcher.png';
import Nautilus from '../../../screenshots/Nautilus.png';


const buildProjectPhotos = [
  {
    name: 'Product Cards',
    image: `${productCardPhoto}`,
  },
  {
    name: 'Pet Adoption',
    image: `${PetAdoption}`,
  },
  {
    name: 'Bear Watcher',
    image: `${BearWatcher}`,
  },
  {
    name: 'Nautilus',
    image: `${Nautilus}`,
  },

];

const projectPhotos = (photo) => {
  let domString = '';
  buildProjectPhotos.forEach(photo);
  domString += '<div class="col-md-4 col-sm-12 mb-2">';
  domString += `<img src="${photo.image}" class="eventImg card-img-top" alt="...">`;
  return domString;
};

export default { projectPhotos };
