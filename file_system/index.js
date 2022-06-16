var fs = require('fs');

//create a new txt file using fs module
fs.writeFileSync('text/test.txt', 'Hello World!');
console.log('File created.');

//create a copy of the newly created txt file 
fs.copyFileSync('text/test.txt', 'text/test2.txt');
console.log('File copied.');

//rename one of the files using the fs module
fs.renameSync('text/test2.txt', 'text/test3.txt');
console.log('File renamed.');

//get a list of all the files names of the current directory
fs.readdirSync('./').forEach(file => {
    console.log(file);
}
);

//get the size of the file in bytes
const size = fs.statSync('text/test3.txt').size;
console.log(`File size: ${size} bytes`);
