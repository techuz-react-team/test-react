import React from 'react';
import Board from './Board';

const calculateWinner = (squares) => {
  // Operation
  const winPosibility = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
  let i = 0;
  for (const [a, b, c] of winPosibility) {
      // console.log('squares[a]',squares[a])
      // console.log('squares[b]',squares[b])
      // console.log('squares[c]',squares[c])
      const winnerRow = winPosibility[i];
      if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
          //return squares[a];
        //   const winner = state.xIsNext ? '0' : 'X';
        //  console.log('winner',winner)
        //  console.log('winnerRow',squares)
          return { winner: squares[a], winnerRow: winnerRow };
      }
      i++;
  }

  return { winner: null, winnerRow: null };
  
};

const initialState = {
  history: [
    {
      squares: Array(9).fill(null),
    },
  ],
  currentStepNumber: 0,
  xIsNext: true,
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  // handleClick(i){
  //   const { history } = this.state;
  //   const timeInHistory = history.slice(0, this.state.currentStepNumber + 1);
  //   const current = timeInHistory[this.state.currentStepNumber];
  //   console.log('current',current)
  //   const squares = {...current};
  //   console.log('squares',[...timeInHistory, squares])
  //   squares['squares'][i] = this.state.xIsNext ? 'X' : 'O';
  //   const { winner } = calculateWinner(current.squares);
  //   //console.log('winner',winner)
    
  //   this.setState(
  //     {
  //       squares: [...timeInHistory, squares],
  //       currentStepNumber: timeInHistory.length - 1,
  //       xIsNext: !this.state.xIsNext,
  //     });
  //     if (winner) {
  //       return;
  //     }
      
  //   console.log('history',history )    
  // }

  handleClick(i) {
    // Operation
    console.log('innn')
    
    const squares = this.state.history.slice();
    const { history } = this.state;
    console.log('squares',this.state.currentStepNumber)
    //|| squares[i]
    const current = history[this.state.currentStepNumber];
    //console.log('current',current);
    const { winner } = calculateWinner(current.squares);
    //console.log('winner',winner)
    if (winner) {
      return;
    }
    squares[this.state.currentStepNumber]['squares'][i] = this.state.xIsNext ? 'X' : 'O';
    const temp = this.state.history.slice(); 
    temp[this.state.currentStepNumber]  = squares[this.state.currentStepNumber];
    temp.push(squares[this.state.currentStepNumber])
    //this.state.currentStepNumber++;  
    console.log('squares',temp)
    this.setState({
          'squares': temp,
          xIsNext: !this.state.xIsNext,
      });
      
  } 

  jumpTo(step) {
    // Operation
  }

  sortMoves() {
    // Operation
  }

  reset() {
    // Operation
    this.setState({
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      currentStepNumber: 0,
      xIsNext: true,
    });
  }



  render() {
    
    const { history } = this.state;
    const current = history[this.state.currentStepNumber];
    const { winner, winnerRow } = calculateWinner(current.squares);
    console.log('history',history)
    const moves = history.map((step, move) => {
    const currentLocation = step.currentLocation ? `(${step.currentLocation})` : '';
    const desc = step.stepNumber ? `Go to move #${step.stepNumber}` : 'Go to game start';
    const classButton = move === this.state.currentStepNumber ? 'button--green' : '';

      return (
        <li key={move}>
          <button className={`${classButton} button`} onClick={() => this.jumpTo(move)}>
            {`${desc} ${currentLocation}`}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner ${winner}`;
    } else if (history.length === 10) {
      status = 'Draw. No one won.';
    } else {
      status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            winnerSquares={winnerRow}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button className="button" onClick={() => this.sortMoves()}>
            Sort moves
          </button>
          <button className="button button--new-game" onClick={() => this.reset()}>
            New game
          </button>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;