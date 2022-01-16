
function renderRestartButton(setBlocks, setIsXNext) {
    return (
      <Restart
        onClick={() => {
          setBlocks(Array(9).fill(null));
          setIsXNext(true);
        }}
      />
    );
  }

  function Restart({ onClick }) {

    return (
      <button className="restart" onClick={onClick}>
        Play again
      </button>
    );
  }

  export default renderRestartButton;
