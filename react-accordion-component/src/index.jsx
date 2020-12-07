import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './Accordion';

const App = () => {
  return (
    <div className="app">
      <Accordion />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
