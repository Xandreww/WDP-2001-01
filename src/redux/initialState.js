import image1 from '../assets/images/furniture1.jpg';
import image2 from '../assets/images/furniture2.jpg';
import image3 from '../assets/images/furniture3.jpg';
import image4 from '../assets/images/furniture4.jpg';
import image5 from '../assets/images/furniture5.jpg';
import image6 from '../assets/images/furniture6.jpg';
import image7 from '../assets/images/furniture7.jpg';
import image8 from '../assets/images/furniture8.jpg';
import image9 from '../assets/images/furniture9.jpg';
import image10 from '../assets/images/furniture10.jpg';
import image11 from '../assets/images/furniture11.jpg';
import image12 from '../assets/images/furniture12.jpg';
import image13 from '../assets/images/furniture13.jpg';
import image14 from '../assets/images/furniture14.jpg';
import image15 from '../assets/images/furniture15.jpg';
import image16 from '../assets/images/furniture16.jpg';
import image17 from '../assets/images/furniture17.jpg';
import image18 from '../assets/images/furniture18.jpg';
import image19 from '../assets/images/furniture19.jpg';
import image20 from '../assets/images/furniture20.jpg';
import image21 from '../assets/images/furniture21.jpg';
import image22 from '../assets/images/furniture22.jpg';
import image23 from '../assets/images/furniture23.jpg';
import image24 from '../assets/images/furniture24.jpg';

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
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image1,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: true,
      image: image2,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      oldPrice: 55,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: true,
      image: image3,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      oldPrice: 75,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: true,
      toCompare: false,
      image: image4,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: 60,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image5,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image6,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      oldPrice: null,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image7,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: 55,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image8,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image9,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image10,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image11,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image12,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image13,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image14,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image15,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image16,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image17,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image18,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image19,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image20,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image21,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image22,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image23,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      isFavorite: false,
      toCompare: false,
      image: image24,
    },
  ],
  sampleBrands: [
    sampleBrand1,
    sampleBrand2,
    sampleBrand3,
    sampleBrand4,
    sampleBrand5,
    sampleBrand6,
    sampleBrand7,
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
};

export default initialState;
