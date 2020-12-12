import React from 'react';
import ReactDOM from 'react-dom';

import Carousel from './Carousel';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      images: [
        { id: 1, class: 'samus', hidden: 'false', url: 'https://upload.wikimedia.org/wikipedia/en/d/d6/Samus_Aran.png' },
        { id: 2, class: 'zss', hidden: 'true', url: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Zero_Suit_Samus.png/220px-Zero_Suit_Samus.png' },
        { id: 3, class: 'ridley', hidden: 'true', url: 'https://upload.wikimedia.org/wikipedia/en/9/93/Ridley_Super_Smash_Bros_Ultimate.png' },
        { id: 4, class: 'dsamus', hidden: 'true', url: 'https://www.ssbwiki.com/images/thumb/a/a6/Dark_Samus_SSBU.png/1200px-Dark_Samus_SSBU.png' },
        { id: 5, class: 'ridley2', hidden: 'true', url: 'https://static.wikia.nocookie.net/metroid/images/c/c4/SSBU_Spirits_Ridley.png/revision/latest?cb=20181210175831' }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <Carousel images={this.state.images} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
