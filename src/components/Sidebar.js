import React, {Component} from 'react';

import List from './List'
class Sidebar extends Component{
  render(){
    return (
      <div className="sidebar column column-25">
        <button onClick={this.props.addNote} className="button button-clear">+ Add Note</button>
        <List editNote={this.props.editNote} list={this.props.list}/>
      </div>
    );
  }
}

export default Sidebar;
