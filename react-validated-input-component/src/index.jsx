import React from 'react';
import ReactDOM from 'react-dom';

import ValidatedInput from './ValidatedInput';

const App = () => {
  return (
    <div>
      <ValidatedInput />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
