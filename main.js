(()=>{"use strict";class e{constructor(e){this.element=e,this.activeCell=""}randCell(){const e=this.element.querySelectorAll(".cell"),t=Math.floor(Math.random()*e.length);return this.activeCell!==e[t]?(this.activeCell=e[t],this.activeCell):this.randCell()}deactivateCell(e){this.activeCell.className="cell"}activateCell(e){this.activeCell.className="cell cell_goblin"}startGame(e){this.intervalId=setInterval((()=>{this.deactivateCell(),this.randCell(),this.activateCell()}),e)}stopGame(){clearInterval(this.intervalId)}}document.addEventListener("DOMContentLoaded",(()=>{const t=new e(document.querySelector(".wrapper"));t.randCell(),t.startGame(1e3)}))})();