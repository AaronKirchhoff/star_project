// instead of importing all imges individually here in seedgallery where im buildin gput my objects, I imported them in one line from another file called images.js. It keeps this seed gallery more organized but im still importing in images.js for every picture... want to improve this.
// import IMAGES from "../pictures/SpaceGalleryPhotos/images.js";


// leave note, still no way to import multiple images at once
import Milky_Way_Galaxy2048 from "../pictures/SpaceGalleryPhotos/Galaxies/2048px-Milky_Way_Galaxy.jpg";
import A_menagerie_of_galaxies from "../pictures/SpaceGalleryPhotos/Galaxies/A_menagerie_of_galaxies.jpg";
import AbellHubble from "../pictures/SpaceGalleryPhotos/Galaxies/Abell-2744-Hubble-Frontier-Field-sq.jpeg";
import Andromeda from "../pictures/SpaceGalleryPhotos/Galaxies/Andromeda.jpg";
import andromeda2 from "../pictures/SpaceGalleryPhotos/Galaxies/andromeda2.jpg";

// require.context('../pictures/SpaceGalleryPhotos/Galaxies', false, /\.(png|jpe?g|svg)$/)

// function importAll(r) {
//   let images = {};
//   r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
//   return images;
// }

// const images = importAll(require.context('../pictures/SpaceGalleryPhotos', true, /\.(png|jpe?g|svg)$/));


// images["2048px-Milky_Way_Galaxy.jpg"]


const seedGallery = [
  {
    galleryName: "Galaxies",
    id: "galaxies",
    emoji: "🌌",
    photos: [
      {name: "Galaxy1", pic: Milky_Way_Galaxy2048 },
      {name: "Galaxy2", pic: A_menagerie_of_galaxies},
      {name: "Galaxy3", pic: AbellHubble},
      {name: "Galaxy4", pic: Andromeda},
      {name: "Galaxy5", pic: andromeda2 },
      // {name: "Galaxy6", pic:"artists-illustration-of-a-spiral-galaxy.jpg"},
      // {name: "Galaxy7", pic:"darkrift-orig_full.jpg"},
      // {name: "Galaxy8", pic:"galaxy-trees.jpg"},
      // {name: "Galaxy9", pic:"galaxy2.jpg"},
      // {name: "Galaxy10", pic:"galaxy3.jpg"},
      // {name: "Galaxy11", pic:"galaxy4.jpg"},
      // {name: "Galaxy12", pic:"GettyImages-galaxy.jpg"},
      // {name: "Galaxy13", pic:"iStock-513298210-feature.jpg"},
      // {name: "Galaxy14", pic:"lots-of-galaxies.jpg"},
      // {name: "Galaxy15", pic:"man-stand-on-a-background-of-a-milky-way.png"},
      // {name: "Galaxy16", pic:"Milkomeda_collison.jpg"},
      // {name: "Galaxy17", pic:"Milky-Way-1200x800.jpg"},
      // {name: "Galaxy18", pic:"oldest-galaxy-in-the-Universe.jpg"},
      // {name: "Galaxy19", pic:"potw1922a-1280x720.jpg"},
    ]
  },




]

export default seedGallery;