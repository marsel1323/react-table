import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import fillTextReducer from './fillText/fillText.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  fillText: fillTextReducer,
});

export default persistReducer(persistConfig, rootReducer);
