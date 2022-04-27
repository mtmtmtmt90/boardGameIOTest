import {Client} from 'boardgame.io/client';
import { Example } from './Game';
import { SocketIO } from 'boardgame.io/multiplayer';
// import { resolve } from 'parcel-bundler/lib/utils/localRequire';


function getUser(rootElement) {
  return new Promise(resolve => {
    const CreateButton = (playerID) => {
      const button = document.createElement('button');
      button.textContent = 'Player ' + playerID;
      button.onclick = () => resolve(playerID);
      rootElement.append(button);
    } 
    rootElement.innerHTML = `<p> Choose Player </p>`;
    const playerIDs = ['0', '1'];
    playerIDs.forEach(CreateButton);
  })
}
class ExampleClient {
    constructor(rootElement, { playerID, matchID = 'some' } = {} ) {
      this.client = Client({ game: Example, multiplayer: SocketIO({ server: 'localhost:8000' }), playerID, matchID });
      console.log(this.client);
      this.connected = false;  
      this.client.start();
        this.rootElement = rootElement;
        this.client.subscribe(state => this.update(state));
    }

    onConnecting () {
      this.showConnecting();
    }

    onWait () {
      this.connected = true;
      this.rootElement.innerHTML = '<p> Waiting to second player... </p>';
    }

    onConnected() {
      this.createBoard();
        this.attachListeners();
    }

    showConnecting () {
      this.rootElement.innerHTML = '<p> Connecting ... </p>';
    }

    createBoard() {
        // Create cells in rows for the Tic-Tac-Toe board.
    const rows = [];
    for (let i = 0; i < 3; i++) {
      const cells = [];
      for (let j = 0; j < 3; j++) {
        const id = 3 * i + j;
        cells.push(`<td class="cell" data-id="${id}"></td>`);
      }
      rows.push(`<tr>${cells.join('')}</tr>`);
    }

    // Add the HTML to our app <div>.
    // We’ll use the empty <p> to display the game winner later.
    this.rootElement.innerHTML = `
      <table>${rows.join('')}</table>
      <p class="winner"></p>
    `;
    }

    attachListeners() {
          const handleCellClick = event => {
            
            const id = parseInt(event.target.dataset.id);
            this.client.moves.clickCell(id);
            // event.target.innerHTML = this.client.ctx.currentPlayer
          };
          // Attach the event listener to each of the board cells.
          const cells = this.rootElement.querySelectorAll('.cell');
          cells.forEach(cell => {
            cell.onclick = handleCellClick;
          });
    }

    update(state) {
      if (state === null) {
        this.onConnecting();
        return;
      } else if ((!this.client.matchData[0].isConnected) || (!this.client.matchData[1].isConnected)) {
        this.onWait();
        return;
      } else if (this.connected) {
        this.onConnected();
      };

      
      const cells = document.querySelectorAll('.cell');
      cells.forEach(cell => {
        
        const cellId = parseInt(cell.dataset.id);
        const cellValue = state.G.cells[cellId];
        cell.textContent = cellValue !== null ? cellValue : '';
      });
      const messageEl = document.querySelector('.winner');
      if (state.ctx.gameover) {
        messageEl.textContent = 
        state.ctx.gameover.winner !== undefined
        ? 'Winner: ' + state.ctx.gameover.winner
        : 'Draw!'
      } else {
        messageEl.textContent = '';
      }
    }
}

class App {
  constructor (rootElement) {
    this.client = getUser(rootElement).then((playerID) => {
      return new ExampleClient(rootElement, { playerID });
    })
  }
}
const appElement = document.getElementById('app');
new App(appElement);