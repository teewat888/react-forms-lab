import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
  }
  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }
  calculateCharsLeft() {
    return this.props.maxChars - this.state.name.length;
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={e => this.handleChange(e)} value={this.state.name} maxLength={this.props.maxChars} /> {this.calculateCharsLeft()} remaining characters
      </div>
    );
  }
}

export default TwitterMessage;
