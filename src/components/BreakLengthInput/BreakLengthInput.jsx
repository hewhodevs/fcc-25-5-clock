import React from 'react';
import "./BreakLengthInput.css";

class BreakLengthInput extends React.Component {
  render() {
    const props = this.props;
    const name = props.name;

    return (
      <div className="BreakLengthInput">
        {/* Label */}
        <h2 id={`${name}-label`} className="BreakLengthInput-title">{name} length</h2>
        <div className="BreakLengthInput-controls">
          {/* Increment Button */}
          <button className="BreakLengthInput-increment" id={`${name}-increment`} onClick={props.incrementInterval}>
            &#43;
          </button>
          {/* Current Value */}
          <span className="BreakLengthInput-value" id={`${name}-length`}>
            {props.value}
          </span>
          {/* Decrement Button */}
          <button className="BreakLengthInput-decrement" id={`${name}-decrement`} onClick={props.decrementInterval}>
            &#8722;
          </button>
        </div>

      </div>
    );
  }
}

export default BreakLengthInput;