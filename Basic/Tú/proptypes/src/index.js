import React from 'react'; 
import ReactDOM from 'react-dom'; 
import PropTypes from 'prop-types';

let todoCounter = 1;

class App extends React.Component {
  state = {
    list: [],
    item: ""
  };

  handleInputChange = event => {
    this.setState({ item: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const item = {
      id: todoCounter++,
      value: this.state.item.slice()
    };
    this.setState({
      list: this.state.list.concat(item),
      item: ""
    });
  };

  handleRemove = id => {
    this.setState({
      list: this.state.list.filter(c => c.id !== id)
    });
  };

  render() {
    return (
      <React.Fragment>
        <h2>Add Todo</h2>
        <div>
          <input
            type="text"
            value={this.state.item}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>
            Add
          </button>
        </div>
        <div>
          <h3>Lists</h3>
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <Todo {...item} removeTodo={this.handleRemove} />
                </li>
              );
            })}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}


class Todo extends React.Component {
  deleteTodo = id => {
    this.props.removeTodo(id);
  };
  render() {
    return (
      <div>
        {this.props.value}
        <button onClick={() => this.deleteTodo(this.props.id)}>X</button>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));