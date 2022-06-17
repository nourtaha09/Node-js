const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
}
);


// GET route
app.get('/numbers', (req, res) => {
    res.send('success using GET');
}
);

// POST route
app.post('/numbers', (req, res) => {
    res.send('success using POST');
});

// DELETE route
app.delete('/numbers', (req, res) => {
    res.send('success using DELETE');
}
);

