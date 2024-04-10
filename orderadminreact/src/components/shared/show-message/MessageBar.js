import React, { Component } from 'react';

class MessageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: !!props.message
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.message !== this.props.message) {
      this.setState({ visible: !!this.props.message });
      setTimeout(() => {
        this.setState({ visible: false });
      }, 5000);
    }
  }

  render() {
    const { message } = this.props;
    const { visible } = this.state;

    return (
      <div
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px',
          display: visible ? 'block' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      >
        {message}
      </div>
    );
  }
}

export default MessageBar;
