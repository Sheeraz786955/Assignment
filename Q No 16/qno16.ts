// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

const guest = [
    "Shoaib", "Hamad", "Ijaz"
];

for (const name of guest) {
    console.log(`Hi my friend ${name} you are invited for Dinner today at 9:00 PM in my home`);
};

console.log(guest[2] + " is not want to appear in dinner due to busy in work");

guest.splice(2, 1, "AR");

for (const nameupdate of guest) {
    console.log(`Hi my friend ${nameupdate} you are invited for Dinner today at 9:00 PM in my home`);
};

console.log("Hi guys i have found a bigger dinner table so i want to invite more three frieds");

guest.unshift('Farooq')
guest.push('Baber')
guest.splice(3 ,0 , "Danish")

for (const name of guest) {
    console.log(`Hi my friend ${name} you are invited for Dinner today at 9:00 PM in my home`);
};
