import React, {Component} from 'react';

class List extends Component{
  render(){
    return (
      <div>
        <ul>
          {this.props.list.map((note, index) => <li key={index}>{note}</li>)}
        </ul>
      </div>
    );
  }
}

export default List;
