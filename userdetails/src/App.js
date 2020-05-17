import React,{ Component } from 'react';
import axios from 'axios';
import './App.css';
import Loading from './Loading';

class App extends Component {

  constructor(props) {
    super(props);

    //create state
    this.state = {
      users: [],
      loading: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getUserDetails () {
    this.setState({
      loading: true
    })
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then(response =>
              this.setState({
                users: [...this.state.users, ...response.data.results],
                loading: false  
              })
          );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.getUserDetails();
  }

  componentWillMount() {
    this.getUserDetails();
  }

  render() {
    const { loading, users} = this.state
    return ( 
              <div className="App">

                <form style={{paddingTop : '10px'}} onSubmit= {this.handleSubmit}>
                      <input style={{color : 'blue'}} type="submit" value="LoadUser"></input>
                </form>

                { !loading  
                  ? users.map(user => 
                  <div key={user.id.value                             }> 
                    <h3 style={{color:'red'}}>{user.name.first} {user.name.last} {user.name.title}</h3>
                    <h5>{user.cell}</h5> 
                    <h5>{user.email}</h5>
                    <h5>{user.gender}</h5>  
                    <hr />
                  </div>
                  ) : <Loading message="Hey it's Loading"/>
                }
              </div>
    );
  }
}

export default App;
