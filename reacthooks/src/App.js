import React,{Component, useState, useEffect} from 'react';
import './App.css';

//  Counter App using Class Component  

class App extends Component {

    state = {
      count: 0
    };

    increment = () => {
      this.setState({
        count : this.state.count+1
      })
    };
    
// As state chanes we need to update something, in this case we would use 
// Lifecyle methods in class components.

    componentDidMount() {
      document.title = `Clicked ${this.state.count} times`;
    }
 
    componentDidUpdate() {
      document.title = `Clicked ${this.state.count} times`;
    }

  render() {
    return (
      <div>
        <h2 style={{color:'red'}}>CounterApp using Class Component</h2>
        <button onClick={this.increment}>Clicked {this.state.count} times</button>
      </div>
    );
  };
}

//-----------------------------------------------------------------------------

//  Counter App using Hooks 

const App1 = () => {

  const [hookCount,setHookCount] = useState(0);

  const increment = () => {
    setHookCount(hookCount + 1)
  };

// As state chanes we need to update something, in this case we would use 
// useEfect() in functional components.
// this method will run every time when there is a change in state.

  useEffect (() => {
    document.title = `Clicked ${hookCount} times`
      
  });

  return (
    <div>
      <h2 style={{color:'red'}}>CounterApp using Hooks</h2>
      <button onClick={increment}>Clicked {hookCount} times</button>
    </div>
  );
}
export default App1;

//export default App;
