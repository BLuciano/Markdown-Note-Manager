import React, {Component} from 'react';

class Sidebar extends Component{
  render(){
    return (
      <div className="sidebar column column-25">
        <button className="button button-clear">+ Add Note</button>
      </div>
    );
  }
}

export default Sidebar;
