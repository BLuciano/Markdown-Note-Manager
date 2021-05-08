import React, {Component} from 'react';
import 'milligram';

import Sidebar from './components/Sidebar'
import Editor from './components/Editor'
import Preview from './components/Preview'

const clearSelected = () => {
  document.querySelectorAll("li").forEach((item, i) => {
    item.classList.remove("selected");
  });
}

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
        input : "",
        list : []
    };

    this.change= this.change.bind(this);
    this.addNote = this.addNote.bind(this);
    this.selectNote = this.selectNote.bind(this);
    this.changeNote = this.changeNote.bind(this);
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
      clearSelected();

      this.setState({
        input : "",
        list : [...this.state.list, this.state.input]
      });
    }
  }

  selectNote(props){
    clearSelected();
    props.target.classList.add("selected");

    this.setState({
      input : props.target.textContent,
      list : this.state.list
    });
  }

  changeNote(props){
    let item = document.getElementsByClassName('selected')[0];
    if(item === undefined){
      alert("Please select an item to update!");
    } else {
      let text = this.state.input;
      let newList = this.state.list;
      newList[item.id] = text;
      clearSelected();

      this.setState({
        input : "",
        list : newList.filter(item => item !== "")
      });
    }
  }

  render(){
    return (
      <div className="App container">
      <h1>Markdown Note Manager</h1>
        <div className="row">
          <Sidebar addNote={this.addNote} selectNote={this.selectNote} changeNote={this.changeNote} list={this.state.list} input={this.state.input}/>
          <div>
            <Editor input={this.state.input} change={this.change} />
            <Preview input={this.state.input} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
