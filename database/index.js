console.log('sdflksdjflj')
const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const randomGenerator = require('../randomGenerator.js');

const connection = mysql.createConnection(mysqlConfig);

console.log(randomGenerator.allData.length);
for( var i = 0; i < randomGenerator.allData.length; i++ ) {
    let currentData = randomGenerator.allData[i];
    let queryString = 'INSERT INTO relatedPlaces (type, city, price, rating, votes, img) VALUES ( ?, ?, ?, ?, ?, ?)'
        connection.query(queryString, 
            [currentData.type, currentData.city, currentData.price, currentData.rating, currentData.votes, currentData.img]
            )
}

module.exports = {

  };