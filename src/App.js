import React, {Component} from 'react';
import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'

class App extends Component{
  constructor(props){
    super(props);
    this.change= this.change.bind(this);
  }

  change(e){
    console.log(e);
  }

  render(){
    return (
      <div className="App container">
      <h1>Markdown Note Manager</h1>
        <div className="row">
          <Sidebar />
          <Editor change={this.change} />
        </div>
      </div>
    );
  }
}

export default App;
