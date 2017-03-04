import { express_init } from './mrhyde/express';
import { mongoose_init } from './mrhyde/mongoose';


Promise.all([express_init(), mongoose_init()])
    .then(function() {
        console.log('MrHyde running');
    });

