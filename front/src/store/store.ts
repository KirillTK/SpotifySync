import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './rootSaga';
import { rootReducer, history } from './rootReducer';

// Redux store
const sagaMiddleware = createSagaMiddleware();
const middleware = [routerMiddleware(history), sagaMiddleware];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// Root Saga run
sagaMiddleware.run(rootSaga);
