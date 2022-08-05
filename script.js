const Gameboard = (() => {
  const gameboard = ['0', 'O', 'X', 'O', 'X', 'O', 'X', 'O', '8'];

  return { gameboard };
})();

const displayController = (() => {
  const renderArrayToWebpage = () => {
    const gamebox0 = document.querySelector('[data-game-box-0]');
    const gamebox1 = document.querySelector('[data-game-box-1]');
    const gamebox2 = document.querySelector('[data-game-box-2]');
    const gamebox3 = document.querySelector('[data-game-box-3]');
    const gamebox4 = document.querySelector('[data-game-box-4]');
    const gamebox5 = document.querySelector('[data-game-box-5]');
    const gamebox6 = document.querySelector('[data-game-box-6]');
    const gamebox7 = document.querySelector('[data-game-box-7]');
    const gamebox8 = document.querySelector('[data-game-box-8]');

    for (let i = 0; i < Gameboard.gameboard.length; i++) {
      // console.log(Gameboard.gameboard[i]);
      gamebox0.textContent = Gameboard.gameboard[0];
      gamebox1.textContent = Gameboard.gameboard[1];
      gamebox2.textContent = Gameboard.gameboard[2];
      gamebox3.textContent = Gameboard.gameboard[3];
      gamebox4.textContent = Gameboard.gameboard[4];
      gamebox5.textContent = Gameboard.gameboard[5];
      gamebox6.textContent = Gameboard.gameboard[6];
      gamebox7.textContent = Gameboard.gameboard[7];
      gamebox8.textContent = Gameboard.gameboard[8];
    }
  };
  return { renderArrayToWebpage };
})();

const Players = () => {

};

displayController.renderArrayToWebpage();