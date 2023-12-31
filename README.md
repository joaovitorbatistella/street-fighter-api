# street-fighter-api

### Game: https://github.com/joaovitorbatistella/street-fighter-css
#### créditos do jogo para https://github.com/jkneb/street-fighter-css

---

Pré-requisitos: node^14 ~ node^20

Para simular o clique, será necessário utilizar o pacote Robot.js (https://github.com/octalmage/robotjs),
veja a documentação do pacote para fazer a inatalação dos pré-requisitos.
Resumo: 

* Windows
  * windows-build-tools npm package (`npm install --global --production windows-build-tools` from an elevated PowerShell or CMD.exe)
* Mac
  * Xcode Command Line Tools.
* Linux
  * Python (v2.7 recommended, v3.x.x is not supported).
  * make.
  * A C/C++ compiler like GCC.
  * libxtst-dev and libpng++-dev (`sudo apt-get install libxtst-dev libpng++-dev`).

---

No arquivo index.js, criamos o websocket na porta 6001 com a instância do express (server)

Instanciar Websocket:
```js
// demais imports express... (consultar index.js)
import { Server } from 'socket.io';

const io = new Server(server);

server.listen(6001, () => {
  console.log('server running at http://localhost:6001');
});
```

Para escutar um evento:
```js
io.on('connection', (socket) => {
    console.log('an user connected');

    socket.on('click_up', (msg) => {
        console.log('key \'up\' clicked')
    });
})
```

Por fim, para subir o server, rode:
```sh
node ./index.js
```

### Client

Para conectar no websocket, usaremos o pacote socket.io-client, exemplo disponível no repositório https://github.com/jkneb/street-fighter-css.

```js
import { io } from "socket.io-client";

const socket = io("ws://127.0.0.1:6001", {});

socket.emit("click_a", 1)
```

Rodamos o node utiliando:
```sh
node ./app.js
```