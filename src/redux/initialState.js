import image1 from '../assets/images/furnitureBed1.jpg';
import image2 from '../assets/images/furnitureBed2.jpg';
import image3 from '../assets/images/furnitureBed3.jpg';
import image4 from '../assets/images/furnitureBed4.jpg';
import image5 from '../assets/images/furnitureBed5.jpg';
import image6 from '../assets/images/furnitureBed6.jpg';
import image7 from '../assets/images/furnitureBed7.jpg';
import image8 from '../assets/images/furnitureBed8.jpg';
import image9 from '../assets/images/furnitureBed9.jpg';
import image10 from '../assets/images/furnitureBed10.jpg';
import image11 from '../assets/images/furnitureBed11.jpg';
import image12 from '../assets/images/furnitureBed12.jpg';
import image13 from '../assets/images/furnitureBed13.jpg';
import image14 from '../assets/images/furnitureBed14.jpg';
import image15 from '../assets/images/furnitureBed15.jpg';
import image16 from '../assets/images/furnitureBed16.jpg';
import image17 from '../assets/images/furnitureBed17.jpg';
import image18 from '../assets/images/furnitureBed18.jpg';
import image19 from '../assets/images/furnitureBed19.jpg';
import image20 from '../assets/images/furnitureBed20.jpg';
import image21 from '../assets/images/furnitureBed21.jpg';
import image22 from '../assets/images/furnitureBed22.jpg';
import image23 from '../assets/images/furnitureBed23.jpg';
import image24 from '../assets/images/furnitureBed24.jpg';

import image25 from '../assets/images/furnitureChair1.jpg';
import image26 from '../assets/images/furnitureChair2.jpg';
import image27 from '../assets/images/furnitureChair3.jpg';
import image28 from '../assets/images/furnitureChair4.jpg';
import image29 from '../assets/images/furnitureChair5.jpg';
import image30 from '../assets/images/furnitureChair6.jpg';
import image31 from '../assets/images/furnitureChair7.jpg';
import image32 from '../assets/images/furnitureChair8.jpg';
import image33 from '../assets/images/furnitureChair9.jpg';
import image34 from '../assets/images/furnitureChair10.jpg';
import image35 from '../assets/images/furnitureChair11.jpg';
import image36 from '../assets/images/furnitureChair12.jpg';
import image37 from '../assets/images/furnitureChair13.jpg';
import image38 from '../assets/images/furnitureChair14.jpg';
import image39 from '../assets/images/furnitureChair15.jpg';
import image40 from '../assets/images/furnitureChair16.jpg';
import image41 from '../assets/images/furnitureChair17.jpg';
import image42 from '../assets/images/furnitureChair18.jpg';
import image43 from '../assets/images/furnitureChair19.jpg';

import image44 from '../assets/images/furnitureSofa1.jpg';
import image45 from '../assets/images/furnitureSofa2.jpg';
import image46 from '../assets/images/furnitureSofa3.jpg';
import image47 from '../assets/images/furnitureSofa4.jpg';
import image48 from '../assets/images/furnitureSofa5.jpg';
import image49 from '../assets/images/furnitureSofa6.jpg';
import image50 from '../assets/images/furnitureSofa7.jpg';
import image51 from '../assets/images/furnitureSofa8.jpg';
import image52 from '../assets/images/furnitureSofa9.jpg';
import image53 from '../assets/images/furnitureSofa10.jpg';
import image54 from '../assets/images/furnitureSofa11.jpg';
import image55 from '../assets/images/furnitureSofa12.jpg';
import image56 from '../assets/images/furnitureSofa13.jpg';

import image57 from '../assets/images/furnitureTable1.jpg';
import image58 from '../assets/images/furnitureTable2.jpg';
import image59 from '../assets/images/furnitureTable3.jpg';
import image60 from '../assets/images/furnitureTable4.jpg';
import image61 from '../assets/images/furnitureTable5.jpg';
import image62 from '../assets/images/furnitureTable6.jpg';
import image63 from '../assets/images/furnitureTable7.jpg';
import image64 from '../assets/images/furnitureTable8.jpg';
import image65 from '../assets/images/furnitureTable9.jpg';
import image66 from '../assets/images/furnitureTable10.jpg';
import image67 from '../assets/images/furnitureTable11.jpg';
import image68 from '../assets/images/furnitureTable12.jpg';
import image69 from '../assets/images/furnitureTable13.jpg';
import image70 from '../assets/images/furnitureTable14.jpg';
import image71 from '../assets/images/furnitureTable15.jpg';

import image72 from '../assets/images/furnitureDining1.jpg';
import image73 from '../assets/images/furnitureDining2.jpg';
import image74 from '../assets/images/furnitureDining3.jpg';
import image75 from '../assets/images/furnitureDining4.jpg';
import image76 from '../assets/images/furnitureDining5.jpg';
import image77 from '../assets/images/furnitureDining6.jpg';
import image78 from '../assets/images/furnitureDining7.jpg';
import image79 from '../assets/images/furnitureDining8.jpg';
import image80 from '../assets/images/furnitureDining9.jpg';

import clientPhoto1 from '../assets/images/clientPhoto1.jpg';
import clientPhoto2 from '../assets/images/clientPhoto2.jpg';
import clientPhoto3 from '../assets/images/clientPhoto3.jpg';
import clientPhoto4 from '../assets/images/clientPhoto4.jpg';

import sampleBrand1 from '../assets/images/sampleBrand1.jpg';
import sampleBrand2 from '../assets/images/sampleBrand2.jpg';
import sampleBrand3 from '../assets/images/sampleBrand3.jpg';
import sampleBrand4 from '../assets/images/sampleBrand4.jpg';
import sampleBrand5 from '../assets/images/sampleBrand5.jpg';
import sampleBrand6 from '../assets/images/sampleBrand6.jpg';
import sampleBrand7 from '../assets/images/sampleBrand7.jpg';

const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: 45,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: true,
      image: image1,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: null,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: true,
      image: image2,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: 55,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: false,
      rated: false,
      image: image3,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: false,
      rated: false,
      image: image4,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: 60,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image5,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image6,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image7,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: 55,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image8,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image9,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image10,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image11,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image12,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image13,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image14,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image15,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image16,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image17,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image18,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image19,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image20,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image21,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image22,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image23,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image24,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 25',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image25,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 26',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image26,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 27',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image27,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 28',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image28,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 29',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image29,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 30',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image30,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 31',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image31,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 32',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image32,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 33',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image33,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 34',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image34,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 35',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image35,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 36',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image36,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 37',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image37,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 38',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image38,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 39',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image39,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 40',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image40,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 41',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image41,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 42',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image42,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 43',
      category: 'chair',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 15,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image43,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 44',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image44,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 45',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image45,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 46',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image46,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 47',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image47,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 48',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image48,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 49',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image49,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 50',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image50,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 51',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image51,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 52',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image52,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 53',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image53,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 54',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image54,
    },
    {
      id: 'aenean-ru-bristique-55',
      name: 'Aenean Ru Bristique 55',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image55,
    },
    {
      id: 'aenean-ru-bristique-56',
      name: 'Aenean Ru Bristique 56',
      category: 'sofa',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image56,
    },
    {
      id: 'aenean-ru-bristique-57',
      name: 'Aenean Ru Bristique 57',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image57,
    },
    {
      id: 'aenean-ru-bristique-58',
      name: 'Aenean Ru Bristique 58',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image58,
    },
    {
      id: 'aenean-ru-bristique-59',
      name: 'Aenean Ru Bristique 59',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image59,
    },
    {
      id: 'aenean-ru-bristique-60',
      name: 'Aenean Ru Bristique 60',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image60,
    },
    {
      id: 'aenean-ru-bristique-61',
      name: 'Aenean Ru Bristique 61',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image61,
    },
    {
      id: 'aenean-ru-bristique-62',
      name: 'Aenean Ru Bristique 62',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image62,
    },
    {
      id: 'aenean-ru-bristique-63',
      name: 'Aenean Ru Bristique 63',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image63,
    },
    {
      id: 'aenean-ru-bristique-64',
      name: 'Aenean Ru Bristique 64',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image64,
    },
    {
      id: 'aenean-ru-bristique-65',
      name: 'Aenean Ru Bristique 65',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image65,
    },
    {
      id: 'aenean-ru-bristique-66',
      name: 'Aenean Ru Bristique 66',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image66,
    },
    {
      id: 'aenean-ru-bristique-67',
      name: 'Aenean Ru Bristique 67',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image67,
    },
    {
      id: 'aenean-ru-bristique-68',
      name: 'Aenean Ru Bristique 68',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image68,
    },
    {
      id: 'aenean-ru-bristique-69',
      name: 'Aenean Ru Bristique 69',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image69,
    },
    {
      id: 'aenean-ru-bristique-70',
      name: 'Aenean Ru Bristique 70',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image70,
    },
    {
      id: 'aenean-ru-bristique-71',
      name: 'Aenean Ru Bristique 71',
      category: 'table',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image71,
    },
    {
      id: 'aenean-ru-bristique-72',
      name: 'Aenean Ru Bristique 72',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image72,
    },
    {
      id: 'aenean-ru-bristique-73',
      name: 'Aenean Ru Bristique 73',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image73,
    },
    {
      id: 'aenean-ru-bristique-74',
      name: 'Aenean Ru Bristique 74',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image74,
    },
    {
      id: 'aenean-ru-bristique-75',
      name: 'Aenean Ru Bristique 75',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image75,
    },
    {
      id: 'aenean-ru-bristique-76',
      name: 'Aenean Ru Bristique 76',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image76,
    },
    {
      id: 'aenean-ru-bristique-77',
      name: 'Aenean Ru Bristique 77',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image77,
    },
    {
      id: 'aenean-ru-bristique-78',
      name: 'Aenean Ru Bristique 78',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image78,
    },
    {
      id: 'aenean-ru-bristique-79',
      name: 'Aenean Ru Bristique 79',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image79,
    },
    {
      id: 'aenean-ru-bristique-80',
      name: 'Aenean Ru Bristique 80',
      category: 'dining',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image80,
    },
  ],
  sampleBrands: [
    { id: 1, image: sampleBrand1 },
    { id: 2, image: sampleBrand2 },
    { id: 3, image: sampleBrand3 },
    { id: 4, image: sampleBrand4 },
    { id: 5, image: sampleBrand5 },
    { id: 6, image: sampleBrand6 },
    { id: 7, image: sampleBrand7 },
  ],
  cart: {
    products: [],
  },
  other: {
    mode: '',
  },

  sale: {
    leftBox: {
      title: 'Guest room',
      subTitle: 'Sofa',
      sale: '-20%',
      bgc: image10,
    },
    rightTopBox: {
      boldTitle: 'office',
      title: 'chair',
      subTitle: 'collection',
      price: '$200.00',
      bgc: image11,
    },
    rightBottomBox: {
      boldTitle: 'special',
      title: 'colection',
      subTitle: 'save up 45% of furniture',
      bgc: image12,
    },
  },
  feedbacks: [
    {
      id: 1,
      name: 'John Smith',
      text:
        'Vestibulum vulputate nisl sed lacus porttitor, sed mollis nibh tempus. Morbi a nisi sit amet est cursus rhoncus. Integer faucibus magna sapien, ut auctor mi hendrerit ut. Mauris fermentum placerat risus, a aliquam mi blandit a. Vivamus sit amet feugiat.',
      image: clientPhoto1,
    },
    {
      id: 2,
      name: 'Andrew Doe',
      text:
        'Aenean vestibulum leo magna. Nam in sodales ex. Integer cursus condimentum diam at sagittis. Fusce non nulla dolor. Curabitur mauris arcu, scelerisque sed aliquet ut, tristique non massa. Nunc porttitor vel enim tincidunt dictum. Vestibulum vitae pretium enim. Maecenas suscipit.',
      image: clientPhoto2,
    },
    {
      id: 3,
      name: 'Simon Simson',
      text:
        'Nullam tincidunt vel est vel convallis. Donec viverra lacus eget consectetur feugiat. Cras odio neque, imperdiet ac risus sed, efficitur condimentum quam. Donec gravida ante id felis laoreet tristique. Vestibulum commodo efficitur neque a vehicula. Suspendisse quis sagittis tortor, in.',
      image: clientPhoto3,
    },
    {
      id: 4,
      name: 'Cain Velasquez',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      image: clientPhoto4,
    },
  ],
  blogBox1: {
    image: image14,
    imageName: 'image',
    date: '18 Nov 2018',
    comments: ' 5 Comments',
    text:
      'Wherry Cat onine tails draft league line Jack Ketch Nelsons folly Sink me lanyard case shot. Gabion bowsprit bring a spring upon her cable port pink hardtack yawl gunwalls starboard ahoy. Execution dock dead men tell no tales barkadeer yo-ho-ho poop deck barque weigh anchor sheet maroon bilge water.',
  },
  blogBox2: {
    image: image20,
    imageName: 'image',
    date: '12 Dec 2017',
    comments: ' 6 Comments',
    text:
      'Splice the main brace yu Shiver me timbers Jack Ketch long clothes poop deck scuttle Sail ho schooner. Salmagundi holystone log hulk skysail lugsail cutlass Admiral of the Black gangplank long clothes. Pressgang hogshead Gold Road scuttle heave down jack loot spyglass clipper rutters sheet maroon bilge.',
  },
  blogBox3: {
    image: image18,
    imageName: 'image',
    date: '12 Jan 2020',
    comments: ' 4 Comments',
    text:
      'Starboard hempen bilge gally no prey, no pay mutiny deadlights dance the hempen jig Arr nipperkin. Square-rigged jury mast rigging grog blossom Arr cackle fruit nipper weigh anchor sutler hardtack. Swab hearties cackle fruit cutlass grog blossom man-of-war barkadeer dead men tell no tales schooner cog. ',
  },
  blog: [
    {
      id: 1,
      image: image1,
      title: 'Comfortable beds',
      author: 'John Doe',
      date: '18 Nov 2018',
      sampleText:
        'Wherry Cat onine tails draft league line Jack Ketch Nelsons folly Sink me lanyard case shot. Gabion bowsprit bring a spring upon her cable port pink hardtack yawl gunwalls starboard ahoy. Execution dock dead men tell no tales barkadeer yo-ho-ho poop deck barque weigh anchor sheet maroon bilge water.',
      fullText: `Curabitur sodales a dolor id commodo. Donec finibus tincidunt eros sit amet rutrum. Curabitur varius odio id commodo pulvinar. Donec ac sollicitudin metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque quis sagittis libero. Maecenas vehicula ornare facilisis. Aenean lobortis, augue gravida laoreet tincidunt, libero tortor dapibus risus, vel suscipit orci tortor vel nisi. Nam congue turpis vitae mi porttitor pretium. Pellentesque rutrum eros eget sapien mollis consectetur. Fusce hendrerit fermentum purus. Aenean scelerisque lacus risus, ac tincidunt urna euismod in. Morbi vestibulum velit non lorem feugiat, sed laoreet elit molestie.

      Cras sodales condimentum nunc, vel ullamcorper elit egestas vel. Vestibulum fermentum magna a elit scelerisque, at finibus mauris cursus. Praesent eu sagittis diam. Quisque luctus lorem tincidunt, feugiat erat sed, pellentesque turpis. Nulla commodo arcu nec interdum varius. Ut ultricies, turpis et viverra euismod, sapien sem interdum velit, eu euismod lorem arcu in erat. Suspendisse potenti. Maecenas maximus ex ipsum, vitae dapibus turpis dignissim quis. Proin lobortis ultrices augue id imperdiet. Pellentesque pretium enim eget est vestibulum luctus.
      
      Sed maximus consequat nisi, quis porta turpis viverra sit amet. Aliquam faucibus non urna id tempus. Proin a porta urna. Morbi suscipit pellentesque magna. Etiam interdum non nulla nec vestibulum. Vivamus vitae mauris nec purus iaculis consectetur non eu odio. Sed eu luctus eros. Nam sodales, nisl id ornare ullamcorper, erat massa semper quam, vel consequat neque mauris sit amet urna. Phasellus a suscipit sapien. Nullam consectetur dui quis pretium auctor. Vivamus luctus dolor at ex finibus, nec finibus enim varius.
      
      Etiam pharetra tellus et mauris dignissim vestibulum ac ac ex. Vestibulum cursus, augue a commodo aliquet, leo purus tristique ligula, ac imperdiet mi nisl eu nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus tristique eros eu lectus lacinia, et posuere arcu feugiat. Nullam pharetra, mauris vitae rhoncus blandit, libero ligula pulvinar ante, et vehicula elit enim ac neque. Praesent vel mattis sem. Vestibulum rhoncus, nisl imperdiet suscipit vehicula, magna diam lobortis quam, a congue est turpis vel dolor. Integer at sem at diam ornare sagittis.
      
      In laoreet, ex in tincidunt dapibus, nisl massa volutpat felis, eu accumsan nibh quam at sapien. Phasellus sollicitudin, mi et sollicitudin varius, mi enim cursus arcu, et vulputate mi diam quis odio. Morbi eget tortor vitae nunc porta tempus ac sed nulla. Pellentesque nec erat finibus neque fringilla imperdiet ac eu risus. Ut id mauris et purus posuere sagittis sed vel quam. Vestibulum condimentum cursus ex sit amet gravida. Donec hendrerit magna metus, non euismod neque finibus et. Suspendisse potenti. Maecenas in odio a nisl viverra pretium ac et turpis. Morbi eleifend volutpat augue molestie tincidunt.`,
      comments: [
        {
          comment1:
            'Suspendisse imperdiet in magna lacinia hendrerit. Proin tincidunt molestie tincidunt.',
        },
        { comment2: 'Sed a est lectus. Donec facilisis odio ligula, vel aliquam.' },
        {
          comment3:
            'Aliquam erat volutpat. Nullam sollicitudin dui id nunc cursus faucibus.',
        },
        {
          comment4:
            'Cras convallis cursus felis, eget consequat dolor. Aliquam vel tempus. ',
        },
        {
          comment5:
            'Sed pulvinar, lectus id imperdiet eleifend, odio metus finibus massa.',
        },
      ],
      commentAuthors: [
        { author1: 'Andy Brown' },
        { author2: 'Julian Twain' },
        { author3: 'Mark Markovsky' },
        { author4: 'Dan Povavin' },
      ],
    },
  ],
  promotedProductBox: {
    image: image9,
    imageName: 'image',
    softTitle: 'indoor',
    strongTitle: 'furniture',
    description: 'save up 50% of furniture',
  },
  hotDealsProductBox: {
    id: 'aenean-ru-bristique-1',
    name: 'Aenean Ru Bristique 1',
    category: 'bed',
    price: 30,
    oldPrice: 45,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    toCompare: false,
    image: image20,
  },
};

export default initialState;
