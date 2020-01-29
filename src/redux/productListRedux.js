/* selectors */

/* action name creator */
const reducerName = 'productList';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_SORT_METHOD = createActionName('CHANGE_SORT_METHOD');

/* action creators */
export const changeSortMethod = payload => ({ type: CHANGE_SORT_METHOD, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  console.log(action.type);
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
