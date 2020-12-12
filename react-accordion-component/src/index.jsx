import React from 'react';
import ReactDOM from 'react-dom';

import Accordion from './Accordion';

const topics = [
  {
    id: 1,
    title: 'Hypertext Markup Language',
    content: 'Hypertext Markup Language (HTML) is the standard markup languagefor creating web pages and web applications. With Cascading StyleSheets(CSS) and JavaScript, it forms a triad of cornerstonetechnologies for the World Wide Web.',
    class: { main: 'html', header: 'headerHTML' }
  },
  {
    id: 2,
    title: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets (CSS) is a style sheet language used fordescribing the presentation of a document written in a markup languagelike HTML. CSS is a cornerstone technology of the World Wide Web alongsideHTML and JavaScript.',
    class: { main: 'css', header: 'headerCSS' }
  },
  {
    id: 3,
    title: 'JavaScript',
    content: 'JavaScript, often abbreviated JS, is a high-level, interpreted programminglanguage that conforms to the ECMAScript specification. JavaScript hascurly-bracket syntax, dynamic typing, prototype-based object-orientation andfirst-class functions.',
    class: { main: 'js', header: 'headerJS' }
  }
];

const App = () => {
  return (
    <div className="app">
      <Accordion topics={topics} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
