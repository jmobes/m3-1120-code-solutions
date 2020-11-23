import React from 'react';
import ReactDOM from 'react-dom';

import HotButton from './HotButton';

const App = () => {
  return (
    <div className="container">
      <HotButton />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
