const exporess = require('express');
const app = exporess();
const array = [1,2,3,4,5,6,7,8,9,10];
const port = 3000;


app.listen(port, () => {
    console.log(`listening on port ${port}`);
}
);


app.get('/', (req, res) => {
    res.send(array);
})


app.post('/', (req, res) => {
    const newNumber = req.body.number;

    if (array.includes(newNumber)) {
        return res.status(400).send('Number already exists');
    }
    array.push(newNumber);
    res.send(array);
}
);


app.delete('/:number', (req, res) => {
    const number = req.params.number;

    if (!array.includes(number)) {
        return res.status(400).send('Number doesn\'t exist');
    }
    array.splice(number, 1);
    res.send(array);
}
);


app.put('/:number', (req, res) => {
    const number = req.params.number;

    if(!array.includes(number)) {
        return res.status(400).send('Number doesn\'t exist');
    }
    const newNumber = req.body.number;
    array[number] = newNumber;
    res.send(array);
}
);

