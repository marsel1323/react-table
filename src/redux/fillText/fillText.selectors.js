import { createSelector } from 'reselect';

const selectFillTextData = (state) => state.fillText;

export const selectFillTextDatas = createSelector(
  [selectFillTextData],
  (fillText) => fillText.fillTextData,
);
