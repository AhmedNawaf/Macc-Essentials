import faceMask from '/face_mask.png';
import bodySpray from '/body_spray.png';
import ultraPad from '/ultra_pad.png';
import collectionHero from '/collection-hero.png';

interface Product {
  name: string;
  imgUrl: string;
}

interface Assets {
  products: Product[];
  photos: {
    collectionHero: string;
  };
}

const assets: Assets = {
  products: [
    {
      name: 'Face Mask',
      imgUrl: faceMask,
    },
    {
      name: 'Body Spray',
      imgUrl: bodySpray,
    },
    {
      name: 'Stay Free Ultra Pad',
      imgUrl: ultraPad,
    },
  ],
  photos: {
    collectionHero,
  },
};

export default assets;
