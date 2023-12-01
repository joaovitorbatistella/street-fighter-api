import express from 'express';
import { createServer } from 'node:http';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Server } from 'socket.io';

import robot from 'robotjs'

const app = express();
const server = createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  console.log('an user connected');

  socket.on('click_up', (msg) => {
    robot.keyTap("up");
    console.log('key \'up\' clicked')
  });

  socket.on('click_a', (msg) => {
    robot.keyTap("a");
    console.log('key \'a\' clicked')
  });

  socket.on('click_s', (msg) => {
    robot.keyTap("s");
    console.log('key \'s\' clicked')
  });
});

// Pressione Baixo, pressione Avançar, solte Baixo, pressione Qualquer Soco. Tudo em um movimento sucessivo.

// Manter os dois botões direcionais pressionados juntos em um ponto durante o movimento fornece a entrada diagonal necessária para um quarto de círculo à frente.

// Se você entrar no modo de prática

server.listen(6001, () => {
  console.log('server running at http://localhost:6001');
});