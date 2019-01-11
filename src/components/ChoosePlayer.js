import React, { Component } from 'react';

class choosePlayer extends Component {
  
  handleForm = (e) => {
    e.preventDefault();
    this.props.player(e.target.player.value);
  }
  render() {
    return (
        <form onSubmit={this.handleForm}>
          <label>
            Play X
            <input type="radio" name="player" value="X"/>
          </label>
          <label htmlFor="">
            Play O
            <input type="radio" name="player"value="O"/>
          </label>
          <input type="submit" value="Start"/>
        </form>
    );
  }
}

export default choosePlayer;