const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 4000 });
wss.on("connection", (ws) => {
  console.log("✅ New client connected");

  // Send a welcome message
  ws.send("Hello Client 👋");
})
