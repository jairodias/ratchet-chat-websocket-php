var conn = new WebSocket('ws://localhost:8080');

conn.onopen = (e) => console.log("connection established!");

// conn.onmessage = (e) => console.log(e.data);

// conn.send('Hewllo Worold');
