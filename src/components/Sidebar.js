import React, {Component} from 'react';

import List from './List'
class Sidebar extends Component{
  render(){
    return (
      <div className="sidebar column column-25">
        <button onClick={this.props.addNote} className="button button-clear">+ Add Note</button>
        <button onClick={this.props.changeNote} className="button button-clear">- Edit Note</button>
        <List selectNote={this.props.selectNote} list={this.props.list}/>
      </div>
    );
  }
}

export default Sidebar;
