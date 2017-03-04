import express = require('express');

let app = express();


app.get('/', function(req, res) {
    res.send('Hello World!');
});


export function express_init(): Promise<void> {
    return new Promise<void>(function(resolve, reject) {
        app.listen(3000, function() {
            console.log('Listening on port 3000!');
            resolve();
        });
        // TODO: When reject?
    });
}

