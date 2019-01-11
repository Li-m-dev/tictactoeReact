import React, { Component } from 'react';
import ChoosePlayer from './ChoosePlayer';
class Status extends Component {
  setPlayer = (player) => {
    this.props.setPlayer(player)
  }

  displayWinner = () => {
    if(this.props.winner) {
      return <h2>Winner is {this.props.winner}</h2>
    }else{
      return this.props.player ? 
      <h2>Next player is {this.props.player}</h2> : 
      <ChoosePlayer player={this.setPlayer}/>
    }
  }
  
  render() {
    return (<div>{this.displayWinner()}</div>)
  }
}

export default Status;