import React from 'react';
import Message from './Message';
import Counter from './Counter';
import Characters from './Characters';
import EventHandlerPractice from './EventHandlerPractice';
import ApiPractice from './ApiPractice';
import { Route, Switch, Link } from 'react-router-dom';
import HomePage from './Routes/HomePage';
import About from './Routes/About';
import Blog from './Routes/Blog';

const baseURL = `https://jsonplaceholder.typicode.com/users`

export default class App extends React.Component {

  state = {
    isLoaded: false,
    items: []
  }

  componentDidMount() {
    fetch(baseURL)
    .then(res => res.json())
    .then(data => {
      this.setState({
        isLoaded:true,
        items: data
      })
    })
  }




 




  render() {

    const { isLoaded, items } = this.state

    if(!isLoaded) {
      return <h1>LOADING...</h1>
    }else {
      return (
        <>
        <h1>This is the App Component</h1>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/blog" component={Blog}></Route>
        </Switch>

        <div>
          <Link to="/">Home</Link>
        </div>

        <div>
          <Link to="/about">About</Link>
        </div>
        
        <div>
          <Link to="/blog">Blog</Link>
        </div>


        <main className='App'>
          <p>DATA HAS LOADED</p>
          <ul>
            {items.map(item => (
              <li key={item.id}>Name:{item.name} || Email:{item.email}</li>
            ))}
          </ul>
          <div>
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
          <EventHandlerPractice />
          </div>
         
        

        </main>
        </>
      );

    }
      

    }
    



    

  }
  


