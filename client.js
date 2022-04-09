const WebSocket = require('ws');

const serverUrl = 'ws://127.0.0.1:3004';

const ws = new WebSocket(serverUrl);


ws.on('open', function() {
    const data = {
            "id": "acct_1293ijwjw",
            "firstName": "Charles",
            "lastName": "Darwin",
            "company": "Tesla, Inc.",
            "ticker": "TSLA",
            "gain": "$200.57"
        }

    ws.send('Hey server, I just connected: ' + JSON.stringify(data.gain));
});

ws.on('message', function(msg) {
   
    console.log('Message form the server: ' + msg);

})


