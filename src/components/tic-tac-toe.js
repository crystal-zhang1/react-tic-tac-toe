import React, { useState } from "react";
import "./tic-tac-toe.css";
import renderRestartButton from "./restart";
import renderBlock from "./block";
import { calculateWinner, getStatus } from "../utils/common";

function TicTacToe() {
  const [blocks, setBlocks] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const nextSymbol = isXNext ? "X" : "O";
  const winner = calculateWinner(blocks);

  const renderParam = {
    blocks,
    setBlocks,
    setIsXNext,
    winner,
    nextSymbol,
    isXNext,
  };

  return (
    <div className="outer">
      <h1 className="title">TIC TAC TOE</h1>
      <div className="container">
        <div className="game">
          <div className="game-board">
            <div className="board-row">
              {renderBlock(0, renderParam)}
              {renderBlock(1, renderParam)}
              {renderBlock(2, renderParam)}
            </div>
            <div className="board-row">
              {renderBlock(3, renderParam)}
              {renderBlock(4, renderParam)}
              {renderBlock(5, renderParam)}
            </div>
            <div className="board-row">
              {renderBlock(6, renderParam)}
              {renderBlock(7, renderParam)}
              {renderBlock(8, renderParam)}
            </div>
          </div>
          <div className="game-info">
            {getStatus({ winner, blocks, nextSymbol })}
          </div>
          <div className="restart-button">
            {renderRestartButton(setBlocks, setIsXNext)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
