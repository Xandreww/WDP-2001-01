/* selectors */
export const getAll = ({ cart }) => cart.products;
export const getCount = ({ cart }) => cart.products.length;

/* action name creator */
const reducerName = 'productList';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_SORT_METHOD = createActionName('CHANGE_SORT_METHOD');

/* action creators */
export const changeSortMethod = payload => ({ payload, type: CHANGE_SORT_METHOD });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_SORT_METHOD: {
      return {
        ...statePart,
        sortBy: action.payload,
      };
    }
    default:
      return statePart;
  }
}
