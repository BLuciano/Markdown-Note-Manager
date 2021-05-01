import React, {Component} from 'react';
import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Preview from './components/Preview'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        input : "New note here...",
        list : []
    };

    this.change= this.change.bind(this);
    this.addNote = this.addNote.bind(this);
  }

  change(e){
    this.setState({
      input: e,
      list : this.state.list
    });
  }

  addNote(){
    if(this.state.input === ""){
      alert("Sorry! Note cannot be empty");
    } else {
      this.setState({
        input : this.state.input,
        list : [...this.state.list, this.state.input]
      });
    }
  }

  render(){
    return (
      <div className="App container">
      <h1>Markdown Note Manager</h1>
        <div className="row">
          <Sidebar input={this.state.input} addNote={this.addNote} list={this.state.list}/>
          <div>
            <Editor change={this.change} />
            <Preview input={this.state.input} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
