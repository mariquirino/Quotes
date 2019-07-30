import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as data from './quotes.json';
const {quotes} = data;

class App extends React.Component{
  constructor(props){
    super(props)
    let pos = Math.floor(Math.random() * quotes.length);
    console.log(pos);
    this.state = {
      quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
      author: quotes[pos].author
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let pos = Math.floor(Math.random() * quotes.length);
    this.setState({
      quote: quotes[pos].quote,
      author: quotes[pos].author
    })
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.quote}
          </p>
          <p>
            {this.state.author}
          </p>
          <button onClick={this.handleClick}>New quote</button>
        </header>
      </div>
    );
  }
}

export {App};
