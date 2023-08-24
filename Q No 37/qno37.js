"use strict";
function make_shirt(size = 'large', message = 'I love TypeScript') {
    console.log(`A T_shirt with a ${size}-sized shirt with the message: "${message}"`);
}
// Making a large shirt with the default message
make_shirt();
// Making a medium shirt with the default message
make_shirt('medium');
// Making a small shirt with a custom message
make_shirt('small', 'I Love Pakistan');
