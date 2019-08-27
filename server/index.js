const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../database/index.js')

const PORT = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static( 'client/dist' ) );


app.get('/api/relatedPlaces/:id', (req, res) => {
    db.grabRandomPlaces( (err, data) => {
        if(err) {console.log(err); return; }
        console.log(data);
        res.send(data) 
    });

})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });