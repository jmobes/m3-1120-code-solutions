/* eslint-disable no-console */
import React from 'react';
import ReactDOM from 'react-dom';

import NewsLetterForm from './NewsLetterForm';

const App = () => {
  return (
    <div>
      <NewsLetterForm />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
