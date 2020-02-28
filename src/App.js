import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor() {
    super();
    this.signs = ["Rock", "Scissors", "Paper"];
    this.state={
      playerOne: "Rock",
      playerTwo: "Paper",
    }
  }

  //this is where my methods live

  playGame = () => {
    this.setState({
      playerOne: this.signs[Math.floor(Math.random()*3)],
      playerTwo: this.signs[Math.floor(Math.random()*3)],
    })
  }

  decideWinner = () => {
    const playerOne = this.state.playerOne;
    const playerTwo = this.state.playerTwo;
      if(playerOne === playerTwo) {
        return "It's a tie";
      }else if((playerOne === "Rock" && playerTwo === "Scissors") ||
      (playerOne === "Scissors" && playerTwo === "Paper") ||
      (playerOne === "Paper" && playerTwo === "Rock")){
        return "Player 1 wins!";
      } else{
        return "Player 2 wins!"
      }
  }

  render() {
    return (
      <div className="container">
        <div>
          <PlayerCard sign={this.state.playerOne}/>
          <PlayerCard sign={this.state.playerTwo}/>
        </div>
        <div className="winner">This is the winner!</div>
        <button type="button" onClick={this.playGame}>Play the Game</button>
      </div>
    )
  }
};

export default Game;
