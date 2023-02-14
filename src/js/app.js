import GameGoblin from './goblinGame/goblinGame';

document.addEventListener('DOMContentLoaded', () => {
  const goblin = new GameGoblin(document.querySelector('.wrapper'));

  goblin.randCell();
  goblin.startGame(1000);
});
