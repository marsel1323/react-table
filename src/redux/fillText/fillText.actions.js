import FillTextActionTypes from './fillText.types';

export const fetchFillTextDataStart = () => ({
  type: FillTextActionTypes.FETCH_FILL_TEXT_DATA_START,
});

export const fetchFillTextDataSuccess = (dataMap) => ({
  type: FillTextActionTypes.FETCH_FILL_TEXT_DATA_SUCCESS,
  payload: dataMap,
});

export const fetchFillTextDataFailure = (errorMessage) => ({
  type: FillTextActionTypes.FETCH_FILL_TEXT_DATA_FAILURE,
  payload: errorMessage,
});
