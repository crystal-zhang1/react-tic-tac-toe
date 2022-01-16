
function calculateWinner(blocks) {
    const possibleLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // go over all possibly winning lines and check if they consist of only X's/only O's
    for (let i = 0; i < possibleLines.length; i++) {
      const [a, b, c] = possibleLines[i];
      if (blocks[a] && blocks[a] === blocks[b] && blocks[a] === blocks[c]) {
        return blocks[a];
      }
    }
    return null;
  }
  
  function isBoardFull(blocks) {
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i] == null) {
        return false;
      }
    }
    return true;
  }

  function getStatus({ winner, blocks, nextSymbol }) {
    if (winner) {
      return "Winner: " + winner;
    } else if (isBoardFull(blocks)) {
      return "Draw!";
    } else {
      return "Current Player: " + nextSymbol;
    }
  }


  export {calculateWinner, isBoardFull, getStatus};