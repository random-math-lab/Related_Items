var faker = require('faker');
const db = require('./index.js');


getRoomType = () => {
    let roomType = ['ENTIRE APARTMENT' , 'ENTIRE HOUSE', 'ENTIRE LOFT', 'PRIVATE ROOM',  ];
    return roomType[Math.floor(Math.random()*3)];
}

getPrice = () => {
    return Math.floor(Math.random() * 160)+20;
}

//rating must be at least 3 stars to be recommended, goes from 3 to 5 stars
getRating = () => {
    return Math.floor(Math.random()*3)+3;
}

getVotes = () => {
    return Math.floor(Math.random()*1000)+50;
}

getImages = () => {
    return faker.image.image();
}

getPostingInfo = (id) => {
    let info = {}
    info = { 
        id: id,
        type: getRoomType(),
        city: faker.address.city(),
        price: getPrice(),
        rating: getRating(),
        votes: getVotes(),
        img: `https://relatedplaces.s3-us-west-1.amazonaws.com/${id}.jpg`,
        title: faker.lorem.words(),
    }
    if( info.rating === 5 ) {
        info.type = "VERIFIED"
    }
    return info;
}


let allData = [];
for(var i = 1; i < 101; i++ ) {
    allData.push(getPostingInfo(i));
}

db.db.query('TRUNCATE TABLE relatedPlaces')
for( var i = 0; i < allData.length; i++ ) {
    let currentData = allData[i];
    let queryString = 'INSERT INTO relatedPlaces (type, title, city, price, rating, votes, img) VALUES ( ?, ?, ?, ?, ?, ?, ?)'
    db.db.query(
        queryString, 
        [currentData.type, currentData.title, currentData.city, currentData.price, currentData.rating, currentData.votes, currentData.img]
    )
}

