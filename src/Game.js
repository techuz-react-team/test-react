import React from 'react';
import Board from './Board';

const calculateWinner = (squares) => {
  // Operation
  const lines = [
    [0, 4, 2],
    [0, 4, 6],
    [2, 4, 8],
    [6, 4, 8],
  ];
  for (let i=0;i<lines.length;i++){
    let [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], winnerRow: lines[i]}
    }
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

  handleClick(i, row, col) {
    // Operation
    const {history} = this.state;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    squares[i] = this.state.xIsNext === true ? 'X' : 'O';
    const currentLocation = {
      row: row, 
      col: col
    }
    this.setState({
      history: history.concat([{squares:squares, currentLocation: currentLocation, stepNumber: history.length}]), 
      xIsNext: !this.state.xIsNext, 
      currentStepNumber: history.length
    });
  }

  jumpTo(step) {
    // Operation
    this.setState({
      currentStepNumber: step,
      xIsNext: step%2 === 0
    });
  }

  sortMoves() {
    // Operation
    const { history } = this.state;
    history.reverse();
    this.setState({
      history: history
    });
  }

  reset() {
    // Operation
    this.setState(initialState);
  }

  render() {
    const { history } = this.state;
    const current = history[this.state.currentStepNumber];
    const { winner, winnerRow } = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const currentLocation = step.currentLocation ? `(row: ${step.currentLocation.row }, col: ${step.currentLocation.col })` : '';
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
            onClick={(i, row, col)  => this.handleClick(i, row, col)}
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