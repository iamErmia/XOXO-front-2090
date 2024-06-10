import { useState } from "react";
import Square from "../components/Square.jsx";

export default function GameBoard() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function checkWinner(squares) {
    const winStats = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winStats.length; i++) {
      const [a, b, c] = winStats[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  function handleClick(i) {
    if (squares[i] || checkWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  const winner = checkWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "It's " + (xIsNext ? "X" : "O") + " turn!";
  }

  return (
    <>
      <div className="body">
        <h1 className="headTxt">Tic-Tac-Toe</h1>
        <div className="status">{status}</div>
        <div className="board-row">
            <Square value={squares[0]} squareClick={() => handleClick(0)} />
            <Square value={squares[1]} squareClick={() => handleClick(1)} />
            <Square value={squares[2]} squareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} squareClick={() => handleClick(3)} />
            <Square value={squares[4]} squareClick={() => handleClick(4)} />
            <Square value={squares[5]} squareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} squareClick={() => handleClick(6)} />
            <Square value={squares[7]} squareClick={() => handleClick(7)} />
            <Square value={squares[8]} squareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}
