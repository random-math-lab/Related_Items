const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);

const grabRandomPlaces = (cb) => {
    let randomIds = [];
    for(var i = 0; i < 12; i++ ) {
        let randomId = Math.ceil(Math.random()*100);
        while( randomIds.indexOf(randomId) >= 0 ) {
            randomId = Math.ceil(Math.random()*100);
        }
        randomIds.push(randomId);       
    }
    
    let queryString = 'SELECT * FROM relatedPlaces WHERE id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=? OR id=?'
    db.query(queryString, randomIds, (err, data) => {
        cb(null, data)
    });
}

module.exports.db = db;
module.exports.grabRandomPlaces = grabRandomPlaces;