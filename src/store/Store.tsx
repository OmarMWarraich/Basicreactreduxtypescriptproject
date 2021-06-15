// The Store is the object that brings them together

/*
    Imports from Redux:
    applyMiddleware: Applies middleware to the dispatch method of the Redux store
    combineReducers: Merges reducers into one
    createStore: Creates a Reduc store that holds the state tree
    Store: The TS Type used for the store, or state tree
*/
import { applyMiddleware, combineReducers, createStore, Store } from 'redux';
/* Thunk
Redux Thunk middleware allow you to write action creators that return a function instead of an action.
The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition
is met. The inner function recieves the store methods dispatch and getState as parameters.
*/
import thunk from 'redux-thunk';
// Import reducers and state type
import {
    characterReducer,
    ICharacterState,
} from '../reducers/characterReducer';

// Create an Interface for the application state
export interface IAppState {
    characterState: ICharacterState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
    characterState: characterReducer,
});

// Create a configure store function of type 'IAppState'
export default function configureStore(): Store<IAppState, any> {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}