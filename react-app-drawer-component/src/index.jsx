import React from 'react';
import ReactDOM from 'react-dom';

import AppDrawer from './AppDrawer';

const App = () => {
  return (
    <div className="app">
      <AppDrawer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
