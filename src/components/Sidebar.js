import React, {Component} from 'react';

import List from './List'
class Sidebar extends Component{
  render(){
    return (
      <div className="sidebar column column-25">
        <button className="button button-clear">+ Add Note</button>
        <List />
        <p>new note... </p>
      </div>
    );
  }
}

export default Sidebar;
