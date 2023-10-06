import React from "react";
import Board from "./Board";
import Credits from "./Credits";

export default function MainPage() {
  const clearbuttonstyle = {
    backgroundColor: "#B61EFE",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "20px",
    margin: "4px 2px",
    cursor: "pointer",
    fontFamily: "'Outfit', sans-serif",
  };

  const solvebuttonstyle = {
    backgroundColor: "#E9D419",
    border: "none",
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "21px",
    margin: "4px 2px",
    cursor: "pointer",
    fontFamily: "'Outfit', sans-serif",
  };

  const gameBoard = Array(9).fill(Array(9).fill(0));

  const refresher = (stateChangerFunc) => {
    return () => {
      stateChangerFunc(Math.random);
    };
  };

  const clearBoard = () => {
    for (let i = 0; i < gameBoard.length; i++) {
      for (let j = 0; j < gameBoard[i].length; j++) {
        gameBoard[i][j] = null;
      }
    }
    console.log(gameBoard)
    refresher();
  };

  return (
    <div style={{ background: "#35BBF6", minHeight: "100vh" }}>
      <div style={{ fontSize: "30px", color: "white", paddingTop: "5px" }}>
        Sudoku solver
      </div>
      <Board gameBoard={gameBoard} refresher={refresher} />
      <button onClick={clearBoard} style={clearbuttonstyle}>
        Clear
      </button>
      <br />
      <button style={solvebuttonstyle}>Solve</button>
      <Credits />
    </div>
  );
}

// const boardChangeHandeller = (i,j)=>{
//     setBoard((prevBoard)=>{
//         prevBoard[i][j]==null ? prevBoard[i][j]=0:prevBoard+=1
//         return prevBoard
//     })
//     console.log("function called",i," ",j)
// }
