import './App.css';
import React, { Component } from 'react'
import TodoItems from './TodoItems.js';
import './TodoList.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  
  addItem(e){
    if(this._inputElement.value !== ""){
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) =>{
        return { items: prevState.items.concat(newItem) };
      })
      console.log(this.state.items.length);
      this._inputElement.value = ""
    }       
    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(item => {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    })
  }

  

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Enter Task"/>
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem}/>
      </div>
    )
  }
}


export default App;
