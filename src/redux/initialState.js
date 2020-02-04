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
      subcategory: 'saleoff',
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: 10,
      stars: 1,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: true,
      image: image2,
      subcategory: 'saleoff',
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
      subcategory: 'saleoff',
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
      subcategory: 'saleoff',
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
      subcategory: 'saleoff',
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 30,
      oldPrice: 20,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image6,
      subcategory: 'saleoff',
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      overview:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis mauris sed quam cursus, vitae luctus nibh scelerisque. Aliquam fringilla, magna vitae ullamcorper rutrum, nibh risus suscipit eros, eu ornare velit tellus quis leo. Suspendisse rhoncus mauris in auctor ornare. Aliquam facilisis aliquet sagittis.',
      price: 65,
      oldPrice: 100,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      rated: false,
      image: image7,
      subcategory: 'featured',
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
      subcategory: 'featured',
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
      subcategory: 'featured',
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
      subcategory: 'featured',
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
      subcategory: 'topseller',
      oldPrice: 22.99,
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
      subcategory: 'topseller',
      oldPrice: 12.99,
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
      subcategory: 'topseller',
      oldPrice: 9.99,
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
      subcategory: 'topseller',
      oldPrice: 2.99,
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
      subcategory: 'toprated',
      oldPrice: 5.99,
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
      subcategory: 'toprated',
      oldPrice: 15.99,
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
      subcategory: 'toprated',
      oldPrice: 25.99,
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
      subcategory: 'toprated',
      oldPrice: 5,
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
      subcategory: 'toprated',
      oldPrice: 5,
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
      subcategory: 'saleoff',
      oldPrice: 10,
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
      subcategory: 'saleoff',
      oldPrice: 15,
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
      subcategory: 'toprated',
      oldPrice: 5,
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
      subcategory: 'toprated',
      oldPrice: 5,
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
  blogs: [
    {
      id: 0,
      image: image14,
      imageName: 'image',
      date: '18 Nov 2018',
      title: 'Top-selling furniture 2000:',
      author: 'FutnitureeGeekkX',
      comments: [
        {
          id: 0,
          author: 'janek123',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 1,
          author: 'kasia99',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          author: 'pawel45',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
      sampleText:
        'Wherry Cat onine tails draft league line Jack Ketch Nelsons folly Sink me lanyard case shot. Gabion bowsprit bring a spring upon her cable port pink hardtack yawl gunwalls starboard ahoy. Execution dock dead men tell no tales barkadeer yo-ho-ho poop deck barque weigh anchor sheet maroon bilge water.',
      fullText: `Nulla facilisi. Sed eget urna diam. Nam purus leo, tincidunt ac commodo vitae, vehicula ut purus. Sed laoreet, elit aliquet euismod ultrices, libero turpis laoreet orci, sed ornare sem nisl ut enim. Mauris tristique erat enim, sed pellentesque ipsum pharetra sit amet. Sed molestie placerat nisi, et accumsan eros venenatis et. Praesent id blandit diam. <br/><br/>
      Sed volutpat congue lectus, ut interdum est auctor non. Vivamus vel dolor id dui iaculis viverra. Maecenas mollis metus ac vulputate placerat. Mauris cursus fringilla arcu, eget porttitor nulla imperdiet sed. Fusce sagittis pretium aliquet. In vitae cursus ligula, id lacinia arcu. Cras semper venenatis consequat. Vivamus at nisi pulvinar, fringilla mauris et, commodo odio. In eget cursus magna, sed suscipit arcu. Aliquam id nisl elementum, feugiat mi vel, porttitor enim. Suspendisse venenatis tortor eu consequat sagittis. Nam tristique dictum lobortis. Praesent pretium vel metus sed tristique.<br/><br/>
      Morbi consectetur ultrices augue quis vestibulum. Phasellus malesuada ex in diam sodales, eu bibendum ipsum luctus. Phasellus nisi lectus, eleifend sed lobortis placerat, consectetur vel felis. Integer eget turpis purus. Fusce lacinia semper erat at bibendum. Praesent ut iaculis nisi. In quis laoreet purus. Suspendisse lectus ante, ornare laoreet malesuada sed, elementum nec neque. Nulla auctor consectetur turpis eget congue. Ut maximus venenatis velit vel vulputate. Duis tellus turpis, tempor ullamcorper aliquet placerat, ornare eget urna. Nulla facilisi.`,
    },
    {
      id: 1,
      image: image20,
      imageName: 'image',
      date: '12 Dec 2017',
      title: 'Guide to furniture composition',
      author: 'SofaKing',
      comments: [
        {
          id: 0,
          author: 'marcin321',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 1,
          author: 'kaja12',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          author: 'kajetan15',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
      sampleText:
        'Splice the main brace yu Shiver me timbers Jack Ketch long clothes poop deck scuttle Sail ho schooner. Salmagundi holystone log hulk skysail lugsail cutlass Admiral of the Black gangplank long clothes. Pressgang hogshead Gold Road scuttle heave down jack loot spyglass clipper rutters sheet maroon bilge.',
      fullText: `Aliquam vel sodales metus, ut facilisis justo. Donec imperdiet urna vel sem porttitor rutrum. Praesent nec lorem porta, pellentesque augue ac, blandit erat. Praesent ac orci erat. Aliquam erat volutpat. Integer eget arcu ut arcu commodo pharetra non nec dui. Aliquam venenatis pharetra libero, varius vulputate erat. Morbi eleifend, lorem sed iaculis vehicula, nibh enim tincidunt massa, ut pretium urna enim ut quam. Donec eu nibh lectus. Nullam a elementum velit, vel iaculis velit.<br/><br/>
        Integer non luctus est, vitae accumsan lorem. Sed diam ante, vehicula ac dolor et, aliquet rutrum purus. Suspendisse potenti. In placerat eu nulla id iaculis. Mauris non fermentum ipsum, in dapibus diam. Aenean dapibus eu libero eu lacinia. Sed facilisis viverra leo nec commodo. Aenean sit amet elit gravida, ultrices mi nec, elementum tortor. Proin et odio non ligula porttitor bibendum quis eu felis. Vivamus nec nunc non sapien egestas scelerisque in in dui. Aenean vel pulvinar velit.<br/><br/>
        Nunc ornare interdum massa ac posuere. Quisque rutrum convallis volutpat. Sed tristique lorem nisl, et fermentum nisi vestibulum vel. Etiam viverra gravida ante. Ut magna urna, rutrum sed lorem accumsan, sagittis auctor tortor. Vivamus tortor magna, tempus sed maximus id, dapibus ac libero. Integer pellentesque, risus blandit sagittis viverra, dolor orci finibus lectus, a viverra ligula urna eu massa. Maecenas fringilla lectus diam, sed sodales massa aliquet id. In semper nunc eu blandit lacinia. Maecenas ut nisl vel urna pharetra sagittis. Ut accumsan odio a scelerisque laoreet. Donec tristique leo id pulvinar vulputate. Maecenas malesuada sollicitudin ex, vel varius risus vulputate sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    },
    {
      id: 2,
      image: image18,
      imageName: 'image',
      date: '12 Jan 2020',
      title: 'Modern furniture design',
      author: 'ChairMan',
      comments: [
        {
          id: 0,
          author: 'maria88',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 1,
          author: 'karola5',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 2,
          author: 'ula567',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
      ],
      sampleText:
        'Starboard hempen bilge gally no prey, no pay mutiny deadlights dance the hempen jig Arr nipperkin. Square-rigged jury mast rigging grog blossom Arr cackle fruit nipper weigh anchor sutler hardtack. Swab hearties cackle fruit cutlass grog blossom man-of-war barkadeer dead men tell no tales schooner cog. ',
      fullText: `Donec id dictum diam. Proin turpis est, faucibus et fringilla elementum, aliquet sit amet est. Nulla facilisi. Vivamus nulla nibh, suscipit id nunc non, finibus fringilla turpis. Donec ullamcorper, nunc eget convallis mattis, risus ipsum ornare diam, quis rhoncus magna tortor in tortor. Etiam lectus mi, iaculis vel leo ut, lobortis consequat magna. Phasellus vulputate vehicula ante vitae vestibulum. Ut non ante velit. Fusce sagittis lacus vel nisi faucibus, porta maximus justo tincidunt. Nunc accumsan egestas leo eget ultrices. Integer ullamcorper sed velit a molestie. Pellentesque placerat, sapien pellentesque commodo blandit, neque arcu eleifend sapien, a tincidunt nulla leo in sapien. Morbi vehicula libero est.<br/><br/>
        Donec dapibus rhoncus sapien in bibendum. Quisque enim velit, tempor vitae congue sed, dictum eget magna. Sed interdum mauris at volutpat scelerisque. Aenean blandit ex vel enim interdum, sed sodales nunc euismod. Integer et risus id orci vulputate efficitur lobortis eu velit. Nullam condimentum urna eget ante sagittis vulputate. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis non mauris sit amet diam placerat maximus luctus ultricies ex. Duis ut sollicitudin elit. Vestibulum vel urna vel odio accumsan accumsan vitae sed sem. Nam sollicitudin risus nec lacus maximus, in cursus quam aliquam. Integer mollis augue a purus cursus, sed elementum ex hendrerit.<br/><br/>
        Curabitur ac lacus at nibh auctor maximus sed ut est. Nunc quis sapien aliquam, porttitor ipsum a, semper elit. Nunc eleifend odio et magna eleifend, in consectetur dolor consectetur. Nunc nec cursus ante. Morbi viverra, tellus ut blandit dictum, ex nibh sodales nunc, eget fringilla diam risus ut ante. Nam ipsum ex, auctor quis arcu ac, condimentum efficitur risus. Etiam pretium tempor neque, nec maximus augue rutrum at. Nullam elit ligula, faucibus ac nisi vitae, interdum elementum nisi. Duis malesuada metus non quam faucibus, in aliquam augue egestas. Duis sed dui ac mauris commodo laoreet. Proin interdum eget quam ac congue. Praesent mattis nulla a ipsum tincidunt, vel luctus ligula feugiat.`,
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
  promoted: [
    {
      id: 1,
      image: image9,
      imageName: 'image',
      softTitle: 'indoor',
      strongTitle: 'furniture',
      description: 'save up 50% of furniture',
      isHotDeal: true,
    },
    {
      id: 2,
      image: image15,
      imageName: 'image',
      softTitle: 'modern',
      strongTitle: 'furniture',
      description: 'extra savings on dining table',
      isHotDeal: true,
    },
    {
      id: 3,
      image: image3,
      imageName: 'image',
      softTitle: 'fabric sofa',
      strongTitle: 'sales',
      description: 'extra savings on all fabric sofas',
      isHotDeal: true,
    },
    {
      id: 4,
      image: image19,
      imageName: 'image',
      softTitle: 'indoor',
      strongTitle: 'furniture',
      description: 'save up 50% of furniture',
      isHotDeal: true,
    },
    {
      id: 5,
      image: image2,
      imageName: 'image',
      softTitle: 'indoor',
      strongTitle: 'furniture',
      description: 'save up 50% of furniture',
      isHotDeal: true,
    },
  ],
  hotDeals: [
    {
      id: 1,
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      image: image27,
      isHotDeal: true,
    },
    {
      id: 2,
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 20,
      oldPrice: 65,
      stars: 5,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      image: image19,
      isHotDeal: true,
    },
    {
      id: 3,
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 49,
      oldPrice: 95,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      image: image11,
      isHotDeal: true,
    },
  ],
  subcategories: [
    { id: 'saleoff', name: 'Sale Off' },
    { id: 'featured', name: 'Featured' },
    { id: 'topseller', name: 'Top Seller' },
    { id: 'toprated', name: 'Top Rated' },
  ],
};

export default initialState;
