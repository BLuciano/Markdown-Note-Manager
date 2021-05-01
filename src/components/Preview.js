import React, {Component} from 'react';

class Preview extends Component{
  render(){
    return (
      <div className="preview column column-75">
        <p>{this.props.input}</p>
      </div>
    );
  }
}

export default Preview;
