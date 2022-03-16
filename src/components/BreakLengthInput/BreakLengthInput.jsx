import React from 'react';
import "./BreakLengthInput.css";

class BreakLengthInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      length: this.props.value
    }
    this.incrementLength = this.incrementLength.bind(this);
    this.decrementLength = this.decrementLength.bind(this);
    this.updateValue = this.updateValue.bind(this);
  }

  incrementLength() {
    if(this.state.length < 60) {
      this.setState((prevState) => ({
        length: prevState.length + 1
      }));
    }
    this.updateValue();
  }

  decrementLength() {
    if(this.state.length > 1) {
      this.setState((prevState) => ({
        length: prevState.length - 1
      }));
    }
    this.updateValue();
  }

  // pass value up to parent component state
  updateValue() {
    this.props.updateValue(this.state.length);
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
          <button className="BreakLengthInput-increment" id={`${name}-increment`} onClick={this.incrementLength}>
            &#43;
          </button>
          {/* Current Value */}
          <span className="BreakLengthInput-value" id={`${name}-length`}>
            {this.state.length}
          </span>
          {/* Decrement Button */}
          <button className="BreakLengthInput-decrement" id={`${name}-decrement`} onClick={this.decrementLength}>
            &#8722;
          </button>
        </div>

      </div>
    );
  }
}

export default BreakLengthInput;