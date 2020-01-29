/* selectors */

/* action name creator */
const reducerName = 'productList';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_SORT_METHOD = createActionName('CHANGE_SORT_METHOD');

/* action creators */
export const changeSortMethod = payload => {
  console.log('payload', payload);
  return {
    type: CHANGE_SORT_METHOD,
    payload,
  };
};

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
