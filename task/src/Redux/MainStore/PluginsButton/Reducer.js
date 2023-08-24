// Create a reducer
import {TOGGLE_CHECKED} from './Types'
export const isCheckedReducer = (state = true, action) => {
    switch (action.type) {
      case TOGGLE_CHECKED:
        return !state;
      default:
        return state;
    }
  };
  

  export const toggleChecked = () => ({
    type: TOGGLE_CHECKED,
  });
  