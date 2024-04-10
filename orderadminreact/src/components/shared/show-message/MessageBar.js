import React, { Component } from 'react';

class MessageBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: !!props.message,
      messageType: props.messageType || 'success'
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.message !== this.props.message || prevProps.messageType !== this.props.messageType) {
      this.setState({ visible: !!this.props.message, messageType: this.props.messageType });
      setTimeout(() => {
        this.setState({ visible: false });
      }, 5000);
    }
  }

  render() {
    const { message } = this.props;
    const { visible, messageType } = this.state;

    let _backgroundColor;
    switch (messageType) {
      case 'success':
        _backgroundColor = '#4CAF50';
        break;
      case 'warning':
        _backgroundColor = '#ff9800';
        break;
      case 'error':
        _backgroundColor = '#f44336';
        break;
      default:
        _backgroundColor = '#4CAF50';
    }

    return (
      <div className='messageBar'
        style={{
          backgroundColor: _backgroundColor,
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
