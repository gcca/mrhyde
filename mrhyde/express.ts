import { app } from 'mrhyde/interfaces/app';

import 'mrhyde/interfaces/users';


export function express_init(): Promise<void> {
    return new Promise<void>(function(resolve, reject) {
        app.listen(3000, function() {
            console.log('Listening on port 3000!');
            resolve();
        });
        // TODO: When reject?
    });
}

