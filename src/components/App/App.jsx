import React from 'react';

import STYLES from './App.scss';
import Header from './../Header';
import Body from './../Body';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const App = () => (
  <div className={getClassName('App')}>
    <Header />
    <main className={getClassName('App__main')}>
      <Body />
    </main>
  </div>
);

export default App;
