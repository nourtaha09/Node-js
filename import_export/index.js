// 1. Import allows you to import an entire module, while require allows you to import a specific part of a module.

// 2. You can enable using the import syntax using node js by adding the --harmony flag to the node command.

// 3. Two node.js environment variables that are not available when using the import syntax are __filename and __dirname.

// 4. Export/import syntax functions:

export function add(x, y) {
return x + y;
}

export function subtract(x, y) {
return x - y;
}

export function multiply(x, y) {
return x * y;
}


// 5. Import the file system module using the import syntax:

import fs from 'fs';