const Gameboard = (() => {
  const gameboard = ['1', 'O', 'X', 'O', 'X', 'O', 'X', 'O', '9'];

  const renderArrayToWebpage = () => {
    const gameBoxes = document.querySelectorAll('[data-game-box]');

    gameBoxes.forEach(box => {
      box.textContent = gameboard[0];
    });
  };

  return { renderArrayToWebpage };
})();

const displayController = (() => {

})();

const Players = () => {

};

Gameboard.renderArrayToWebpage();