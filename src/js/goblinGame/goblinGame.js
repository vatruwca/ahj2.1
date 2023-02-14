export default class GameGoblin {
  constructor(element) {
    this.element = element;
    this.activeCell = '';
  }

  randCell() {
    const arr = this.element.querySelectorAll('.cell');
    const rand = Math.floor(Math.random() * arr.length);
    if (this.activeCell !== arr[rand]) {
      this.activeCell = arr[rand];
      return this.activeCell;
    } return this.randCell();
  }

  deactivateCell(activeCell) {
    this.activeCell.className = 'cell';
  }

  activateCell(activeCell) {
    this.activeCell.className = 'cell cell_goblin';
  }

  startGame(interval) {
    this.intervalId = setInterval(() => {
      this.deactivateCell();
      this.randCell();
      this.activateCell();
    }, interval);
  }

  stopGame() {
    clearInterval(this.intervalId);
  }
}
