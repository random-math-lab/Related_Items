const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../database/index.js')

const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static( 'client/dist' ) );

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allows-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })

app.get('/api/relatedPlaces/:id', (req, res) => {
    db.grabRandomPlaces( (err, data) => {
        if(err) {console.log(err); return; }
        res.send(data) 
    });

})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });