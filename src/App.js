import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()

    this.state = {
      item: '',
      items: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.addItem = this.addItem.bind(this)

  }

  handleInputChange(event) {
    let name = event.target.name
    let value = event.target.value

    this.setState({[name]:value})
  }

  addItem(event) {
    let item = this.state.item
    let items = this.state.items
    items.push(item)
    this.setState({items:items})
  }

  render(){
    return (
      <div className="App">
        <h1>To Do List App</h1>
        <input type="text" name="item" onChange={this.handleInputChange}></input>
        <button onClick={this.addItem}>Add Item</button>
        {this.state.items.map((item) => {
          return (
            <p>{item}</p>
          )
        })}
      </div>
    );
  }
}

export default App;
