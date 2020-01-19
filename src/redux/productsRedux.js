/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;

export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
/* isFavourite */
export const ADD_TO_FAV = createActionName('ADD_TO_FAV');
export const REMOVE_FROM_FAV = createActionName('REMOVE_FROM_FAV');
/* compare */
export const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');
export const REMOVE_FROM_COMPARE = createActionName('REMOVE_FROM_COMPARE');

/* action creators */
export const addToFav = payload => ({ payload, type: ADD_TO_FAV });
export const removeFromFav = payload => ({ payload, type: REMOVE_FROM_FAV });

export const addToCompare = payload => ({ payload, type: ADD_TO_COMPARE });
export const removeFromCompare = payload => ({ payload, type: REMOVE_FROM_COMPARE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_FAV: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          return {
            ...product,
            isFavorite: true,
          };
        } else {
          return product;
        }
      });
    }
    case REMOVE_FROM_FAV: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          return {
            ...product,
            isFavorite: false,
          };
        } else {
          return product;
        }
      });
    }
    case ADD_TO_COMPARE: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          return {
            ...product,
            toCompare: true,
          };
        } else {
          return product;
        }
      });
    }
    case REMOVE_FROM_COMPARE: {
      return statePart.map(product => {
        if (product.id === action.payload) {
          return {
            ...product,
            toCompare: false,
          };
        } else {
          return product;
        }
      });
    }
    default:
      return statePart;
  }
}
