/* selectors */

/* action name creator */
const reducerName = 'other';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
export const CHANGE_MODE = createActionName('CHANGE_MODE');

/* action creators */
export const changeMode = payload => ({ payload, type: CHANGE_MODE });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_MODE: {
      return {
        ...statePart,
        mode: action.payload,
      };
    }
    default:
      return statePart;
  }
}
