


import { useState } from "react";


function Square({ value, OnSquareClick }) {
  return <button className="square" onClick={OnSquareClick}>{ value}</button>

}
  

function handleClick() {

  setValue('X');

  return (<button className="square">
    
    onClick={handleClick}
    {value}</button>
  );

}




// choose X and O

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    if (squares[i] || DeclareWinner(squares)) {
      return;
    }
  
    const nextSquares = squares.slice();
    
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {

      if (setXIsNext) {
        nextSquares[i] = "O"
      }

      setSquares(nextSquares);
      setXIsNext(!xIsNext);

    }

  // Declare and chenck the winner
    function DeclareWinner(squares) {

      const lines = [

        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

      ];

      for (let i = 0; i < lines.length; i++) {

        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {

          return squares[a];

        }
      }
      return null;
    }



    // Check winner status

    const winner = DeclareWinner(squares);
    let status;
    if (winner) {
      status = "Winner" + winner;

    } else {
      status = "Next player:" + (xIsNext ? "X" : "O")
    }


    return (
      <>
     
        < div className="status">{ status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />


          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(0)} />

        </div>

        <div className="board-row">

          <Square value={squares[3]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(0)} />

        </div>

        <div className="board-row">

          <Square value={squares[6]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(0)} />

        </div>

      </>
    );
  }
}