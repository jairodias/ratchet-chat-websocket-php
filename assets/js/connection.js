
var conn = new WebSocket('ws://localhost:8080');

conn.onopen = (e) => console.log("connection established!");

conn.onmessage = (e) => showMessages('other', e.data);

// conn.send('Hewllo Worold');
