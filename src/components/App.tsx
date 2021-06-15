// React components are small, reusable pieces of code that return a React element to be rendered to the page


import React from 'react';
import '../../src/App.css';

import CharacterList from '../containers/CharacterList';

const App: React.SFC<{}> = () => {
  return (
    <>
    <h1>The Force Awakens</h1>
    <CharacterList />
    </>
  );
};

export default App;
