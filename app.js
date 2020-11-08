const express = require('express')

const app = express()

const SERVER_PORT = process.env.SERVER_PORT || 3000


app.get('/', (req, res) =>{
    res.send('YES!')
});


app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`);
});