# LavaCord-tracks

Gets tracks from lavacord

### Installation

```bash
npm install @dada513/lavacord-tracks # or yarn add @dada513/lavacord-tracks
```

### Usage

```js
const { Manager } = require("lavacord");
const tracks = require("@dada513/lavacord-tracks");
const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", async () => {
  const nodes = [
    { id: "1", host: "localhost", port: 2333, password: "youshallnotpass" },
  ];
  const manager = new Manager(client, nodes);
  await manager.connect();
  await tracks.getSongs("ytsearch: hello there"); // Array<>
});

client.login(token);
```

### API

The JSDoc can be accessed at https://dada513.github.io/lavacord-tracks/
