import FillTextActionTypes from './fillText.types';

const INITIAL_STATE = {
  fillTextData: null,
  isFetching: false,
  errorMessage: undefined,
};

const fillTextReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FillTextActionTypes.FETCH_FILL_TEXT_DATA_START:
      return {
        ...state,
        isFetching: true,
      };
    case FillTextActionTypes.FETCH_FILL_TEXT_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        fillTextData: action.payload,
      };
    case FillTextActionTypes.FETCH_FILL_TEXT_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default fillTextReducer;
