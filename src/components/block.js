import './block.css';

function Block({ value, onClick }) {
  return (
    <button className="block" onClick={onClick}>
      {value}
    </button>
  );
}

function renderBlock(idx, renderParam) {
   const { blocks, setBlocks, setIsXNext, winner, nextSymbol, isXNext } = renderParam;
  return (
    <Block
      value={blocks[idx]}
      onClick={() => {
        if (blocks[idx] != null || winner != null) {
          return;
        }
        const nextBlocks = blocks.slice();
        nextBlocks[idx] = nextSymbol;
        setBlocks(nextBlocks);

        setIsXNext(!isXNext);
      }}
    />
  );
}

export default renderBlock;
