import React, {Component} from 'react';

class List extends Component{
  render(){
    return (
      <div>
        <ul>
          {this.props.list.map((note, index) =>
              <li value={note} className="column column-80" onClick={this.props.selectNote} key={index} id={index}>{note}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default List;
