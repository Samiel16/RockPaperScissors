import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component {
  constructor() {
    super();
    this.signs = ["rock", "scissors", "paper"];
    this.state={
      playerOne: "rock",
      playerTwo: "paper",
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
    const playerone = this.state.playerOne;
    const playertwo = this.state.playerTwo;
      if(playerone === playertwo) {
        return "It's a tie";
      }else if((playerone === "rock" && playertwo === "scissors") ||
      (playerone === "scissors" && playertwo === "paper") ||
      (playerone === "paper" && playertwo === "rock")){
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
        <div className="winner">{this.decideWinner()}</div>
        <button type="button" onClick={this.playGame}>Play the Game</button>
      </div>
    )
  }
};

export default Game;
