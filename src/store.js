import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly';
import {createLogger} from 'redux-logger';

const logger = createLogger({
    
    collapsed: true,
    diff: true
});

const initialState = {

}
const middleware = [thunk]
const store = createStore(rootReducer,initialState,composeWithDevTools(
            applyMiddleware(thunk, logger)  
        ) );

export default store;