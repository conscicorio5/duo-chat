const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

app.use(express.static('public'));

// Etat garde en memoire (redemarre a zero si le serveur redemarre)
let messages = [];   // { sender, text, ts }
let game = { cells: Array(9).fill(''), turn: 'X' };

io.on('connection', (socket) => {
  // On envoie l'historique au nouvel arrivant
  socket.emit('init', { messages, game });

  socket.on('send_message', (msg) => {
    if (!msg || !msg.text || !msg.sender) return;
    const clean = {
      sender: String(msg.sender).slice(0, 20),
      text: String(msg.text).slice(0, 1000),
      ts: Date.now()
    };
    messages.push(clean);
    if (messages.length > 500) messages = messages.slice(-500);
    io.emit('new_message', clean);
  });

  socket.on('play_move', (move) => {
    if (!move || typeof move.index !== 'number') return;
    const i = move.index;
    if (i < 0 || i > 8) return;
    if (game.cells[i] || checkWinner(game.cells)) return;
    game.cells[i] = game.turn;
    game.turn = game.turn === 'X' ? 'O' : 'X';
    io.emit('game_update', game);
  });

  socket.on('reset_game', () => {
    game = { cells: Array(9).fill(''), turn: 'X' };
    io.emit('game_update', game);
  });
});

function checkWinner(c) {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (const [a,b,cc] of lines) {
    if (c[a] && c[a] === c[b] && c[a] === c[cc]) return c[a];
  }
  return null;
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log('DuoChat server running on port ' + PORT));
