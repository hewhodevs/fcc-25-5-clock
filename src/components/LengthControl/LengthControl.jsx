import React from 'react';
import "./LengthControl.css";

class BreakLengthInput extends React.Component {
  constructor(props) {
    super(props);
    this.incrementLength = this.incrementLength.bind(this);
    this.decrementLength = this.decrementLength.bind(this);
  }

  incrementLength() {
    const length = this.props.value;
    if (length < 60) { 
      this.props.setLength(length + 1);
    }
  }

  decrementLength() {
    const length = this.props.value;
    if(length > 1) { 
      this.props.setLength(length - 1);
    }
  }

  render() {
    const props = this.props;
    const name = props.name;

    return (
      <div className="BreakLengthInput">
        {/* Label */}
        <h2 id={`${name}-label`} className="BreakLengthInput-title">{name} length</h2>
        <div className="BreakLengthInput-controls">
          {/* Increment Button */}
          <button className="BreakLengthInput-increment" id={`${name}-increment`} onClick={this.incrementLength} >
            &#43;
          </button>
          {/* Current Value */}
          <span className="BreakLengthInput-value" id={`${name}-length`}>
            {this.props.value}
          </span>
          {/* Decrement Button */}
          <button className="BreakLengthInput-decrement" id={`${name}-decrement`} onClick={this.decrementLength} >
            &#8722;
          </button>
        </div>

      </div>
    );
  }
}

export default BreakLengthInput;