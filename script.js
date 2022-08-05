const Gameboard = (() => {
  // const gameboard = ['0', 'O', 'X', 'O', 'X', 'O', 'X', 'O', '8'];
  const gameboard = [];

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
    return { gamebox0, gamebox1, gamebox2, gamebox3, gamebox4, gamebox5, gamebox6, gamebox7, gamebox8 };
  };
  return { renderArrayToWebpage };
})();

const Players = () => {
  const placeMarker = () => {
    displayController.renderArrayToWebpage().gamebox0.addEventListener('click', () => {
      Gameboard.gameboard[0] = 'X';
      displayController.renderArrayToWebpage().gamebox0.textContent = 'X';
    });

    displayController.renderArrayToWebpage().gamebox1.addEventListener('click', () => {
      Gameboard.gameboard[1] = marker;
      displayController.renderArrayToWebpage().gamebox1.textContent = marker;
    });
    
    displayController.renderArrayToWebpage().gamebox2.addEventListener('click', () => {
      Gameboard.gameboard[2] = marker;
      displayController.renderArrayToWebpage().gamebox2.textContent = marker;
    });

    displayController.renderArrayToWebpage().gamebox3.addEventListener('click', () => {
      Gameboard.gameboard[3] = marker;
      displayController.renderArrayToWebpage().gamebox3.textContent = marker;
    });

    displayController.renderArrayToWebpage().gamebox4.addEventListener('click', () => {
      Gameboard.gameboard[4] = marker;
      displayController.renderArrayToWebpage().gamebox4.textContent = marker;
    });

    displayController.renderArrayToWebpage().gamebox5.addEventListener('click', () => {
      Gameboard.gameboard[5] = marker;
      displayController.renderArrayToWebpage().gamebox5.textContent = marker;
    });

    displayController.renderArrayToWebpage().gamebox6.addEventListener('click', () => {
      Gameboard.gameboard[6] = marker;
      displayController.renderArrayToWebpage().gamebox6.textContent = marker;
    });

    displayController.renderArrayToWebpage().gamebox7.addEventListener('click', () => {
      Gameboard.gameboard[7] = marker;
      displayController.renderArrayToWebpage().gamebox7.textContent = marker;
    });

    displayController.renderArrayToWebpage().gamebox8.addEventListener('click', () => {
      Gameboard.gameboard[8] = marker;
      displayController.renderArrayToWebpage().gamebox8.textContent = marker;
    });
  };
  return { placeMarker };
};

displayController.renderArrayToWebpage();
Players().placeMarker();