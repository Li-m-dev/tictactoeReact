import React, { Component } from 'react';
import './App.css';
import Status from './components/Status';


class App extends Component {

  constructor() {
    super();
    this.state = {
      board: Array(9).fill(''),
      player: null,
      winner: null
    }
  }

  checkWinner () {
    let winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for( let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      const {board} = this.state;
        if(board[a] !== '' && board[a] === board[b] && board[b] === this.state.board[c]) {
          // alert(`${this.state.player} won`)
          this.setState({
            winner: this.state.player
          })
      
      }
    }
  }
  handleClick = (i) => {
    if(this.state.player && !this.state.winner) {
      let newBoard = this.state.board;
      if(this.state.board[i] === '' && !this.state.winner ) {
        newBoard[i] = this.state.player;
        this.setState({
          board : newBoard,
          player: this.state.player === 'X' ? 'O' : 'X'
        })
      }
  
      this.checkWinner();
    }
  }

  setPlayer = (player) => {
    console.log('player: ', player);
    this.setState({
      player:player
    })
  }

  displayBox = () => {
    return this.state.board.map((box, i) => 
    <div className="box"
    key={i}
    onClick={() => this.handleClick(i)}>
    {box}
    </div> 
    )
  }
  reset = () => {
    this.setState({
      board: Array(9).fill(''),
      player: null,
      winner: null
    })
  }
  
  render() {
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <button onClick={this.reset}>Reset</button>
        <Status 
        player={this.state.player} 
        setPlayer={this.setPlayer} 
        winner={this.state.winner}
        />
        <div className="board">
        {this.displayBox()}
        </div>
      </div>
    );
  }
}

export default App;
