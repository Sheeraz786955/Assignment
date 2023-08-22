"use strict";
const usernames = ['Admin', 'Danish', 'Shoaib', 'Hamad', 'Sheeraz'];
for (const a of usernames) {
    if (a === 'Admin') {
        console.log(`Hello admin, would you like to see a status report`);
    }
    else {
        console.log(`Hello ${a}, thank you for logging in again!`);
    }
}
// for (var i of usernames) {
//     if (i == 'Admin') {
//         console.log(` Hello admin, would you like to see a status report`)
//     }
//     if (i == 'Danis') {
//         console.log(` Hello Danish, thank you for logging in again`)
//     }
//     if (i == 'Shoaib') {
//         console.log(` Hello Shoaib, thank you for logging in again`)
//     }
//     if (i == 'Hamad') {
//         console.log(` Hello Hamad, thank you for logging in again`)
//     }
//     if (i == 'Sheeraz') {
//         console.log(` Hello Sheeraz, thank you for logging in again`)
//     }
