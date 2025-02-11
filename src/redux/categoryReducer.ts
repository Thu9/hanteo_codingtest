import { SET_CATEGORY } from './action';

const initialState = {
  activeCategory: 0,
};

const categoryReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };
    default:
      return state;
  }
};

export default categoryReducer;
