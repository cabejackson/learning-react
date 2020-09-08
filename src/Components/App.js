import React from 'react';
import Message from './Message';
import Counter from './Counter';
import Characters from './Characters';

export default class App extends React.Component {
  render() {
    return (
      <main className='App'>
        <p>TEST</p>
        <Message />
        <Counter />
        <Characters name="Bob" job="Builder">
          <h3>Can We Fix It?!</h3>
        </Characters>
        <Characters name="Mario" job="Plumber">
          <p>Hi I'm Children!</p>
          </Characters>
        <Characters name="Dora" job="Explorer">
        <button>Swiper, no swiping!</button>
        </Characters>
      </main>
    );

  }
  
}

