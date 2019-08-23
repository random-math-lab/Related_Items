let API_KEY = 'b795c3ed52c5b1785dd4c255c50382b7';
var faker = require('faker');

getRoomType = () => {
    let roomType = ['ENTIRE APARTMENT' , 'ENTIRE HOUSE', 'ENTIRE LOEFT', 'PRIVATE ROOM', ];
    return roomType[Math.floor(Math.random()*3)];
}

getPrice = () => {
    return Math.floor(Math.random() * 160);
}

//rating must be at least 3 stars to be recommended, goes from 3 to 5 stars
getRating = () => {
    return Math.floor(Math.random()*3)+3;
}

getVotes = () => {
    return Math.floor(Math.random()*1000)+50;
}

getImages = () => {
    return faker.image.avatar();
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
        img: getImages(),
    }
    return info;
}


let allData = [];
for(var i = 0; i < 100; i++ ) {
    allData.push(getPostingInfo(i));
}

module.exports = {
    allData,
  };