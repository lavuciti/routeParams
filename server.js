const express = require('express');
const data = require('./data.json');
const fs = require('fs');

const app = express();

app.use(express.static(__dirname + "/public"))

app.get('/get_data/:id', (req, res) => {
    let id = req.params.id;

    let oneElephant = data.filter(el=>{
        return el.id == id;
    })[0];
    oneElephant.visited++;

    fs.writeFile(__dirname + '/data.json',JSON.stringify(data), (err) =>{
        if (err) throw err;
        res.send(oneElephant);
    })
})

app.listen(3000, () =>{
    console.log('Listening on port 3000');
})
