import React from 'react';
import ReactDOM from 'react-dom';

/* Make the store available to all container components in the application without passing it explicitly 
*/
import { Provider } from 'react-redux';

// Store type from Redux
import { Store } from 'redux';

// Import the Store funtion and State
import configureStore, { IAppState } from './store/Store';
import { getAllCharacters } from './actions/CharacterActions';

import './index.css';
import App from './components/App';

interface IProps {
  store: Store<IAppState>;
}

/*
Create a root component that recieves the store via props
and wraps the App component with Provider, giving props to containers
*/
const Root: React.SFC<IProps> = props => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>  
    );
}

// Generate the Store
const store = configureStore();
store.dispatch(getAllCharacters());

//Render the App
ReactDOM.render(<Root store={store} />,document.getElementById('root') as HTMLElement);


