import React from 'react';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <span >
      <button onClick={this.handleClick} name={this.props.name} id={this.props.id}>        
        {this.state.isToggleOn ? 'o': 'n'}
      </button>
      </span>
    );
  }
}
export default Toggle;