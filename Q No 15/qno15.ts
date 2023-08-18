// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

const guest = [
    "Shoaibo", "Hamad", "Ijaz"
];

for (const name of guest) {
    console.log(`Hi my friend ${name} you are invited for Dinner today at 9:00 PM in my home`);
};

console.log(guest[2] + " is not want to appear in dinner due to busy in work");

const guestupdate = guest.splice(2, 1, "AR");

for (const nameupdate of guest) {
    console.log(`Hi my friend ${nameupdate} you are invited for Dinner today at 9:00 PM in my home`);
};
