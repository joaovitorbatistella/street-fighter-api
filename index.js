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

  socket.on('click_w', (msg) => {
    robot.keyTap("w");
    console.log('key \'w\' clicked')
  });

  socket.on('click_i', (msg) => {
    robot.keyTap("i");
    console.log('key \'i\' clicked')
  });

  socket.on('click_h', (msg) => {
    setTimeout(() => {
        setTimeout(() => {
            robot.keyTap("s");
            console.log('key \'s\' clicked')
        }, 50)
    
        setTimeout(() => {
            robot.keyTap("d");
            console.log('key \'d\' clicked')
        }, 350)
    
        setTimeout(() => {
            robot.keyTap("i");
            console.log('key \'i\' clicked')
        }, 850)
    }, 1300)
  });
});

// Pressione Baixo, pressione Avançar, solte Baixo, pressione Qualquer Soco. Tudo em um movimento sucessivo.

// Manter os dois botões direcionais pressionados juntos em um ponto durante o movimento fornece a entrada diagonal necessária para um quarto de círculo à frente.

// Se você entrar no modo de prática

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});