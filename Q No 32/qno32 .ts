const current_users: string[] = ['Danish', 'Hamad', 'Shoaib', 'Arslan', 'Ejaz'];
const new_users: string[] = ['AR', 'Hamad', 'Farooq', 'Ejaz', 'AD'];

for (const newUsername of new_users) {
    if (current_users.includes(newUsername)) {
        console.log(`Username '${newUsername}' is already taken. Please choose a different username.`);
    } else {
        console.log(`Username '${newUsername}' is available.`);
    }
}
