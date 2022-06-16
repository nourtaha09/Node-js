const fs = require('fs');
const uniqid = require('uniqid');


const createUser = (name, email) => {

    if (!fs.existsSync('users.json')) {
        fs.writeFileSync('users.json', '[]');
    }
    
    let users = JSON.parse(fs.readFileSync('users.json'));
    const user = {
        name,
        email,
        id: uniqid()
    };
    users.push(user);
    fs.writeFileSync('users.json', JSON.stringify(users));
    return user;

}

const readUser = (id) => {
    const users = JSON.parse(fs.readFileSync('users.json'));
    const user = users.find(user => user.id === id);
    return user;
}

const updateUser = (id, name, email) => {
    const users = JSON.parse(fs.readFileSync('users.json'));
    const user = users.find(user => user.id === id);
    user.name = name;
    user.email = email;
    users.splice(users.indexOf(user), 1, user);
    fs.writeFileSync('users.json', JSON.stringify(users));
    return user;
}

const deleteUser = (id) => {
    const users = JSON.parse(fs.readFileSync('users.json'));
    const user = users.find(user => user.id === id);
    users.splice(users.indexOf(user), 1);
    fs.writeFileSync('users.json', JSON.stringify(users));
    return user;
}

const user = createUser('a', 'a@gmail.com');
console.log(user);
const user2 = readUser(user.id);
console.log(user2);
const user3 = updateUser(user.id, 'b', 'b@gmail.com');
console.log(user3);
const user4 = deleteUser(user.id);
console.log(user4);