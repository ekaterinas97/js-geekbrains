"use strict";
//Задание 1
for (let i = 0; i <= 10; i++) {
    if (i == 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 == 0) {
        console.log(`${i} - четное число`);
    } else {
        console.log(`${i} - нечетное число`);

    }
}
// Задание 2
const post = {
    author: "John",
    postId: 23,
    comments: [{
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2
            }
        },
        {
            userId: 5,
            userName: "Jane",
            text: "lorem ipsum 2",
            rating: {
                likes: 3,
                dislikes: 1
            }
        },

    ]
};

console.log(post.author);
console.log(post["comments"][0]["rating"]["dislikes"]);
console.log(post["comments"][1]["userId"]);
console.log(post["comments"][1]["text"]);

//Задание 3
const products = [{
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(element => {
    element.price = element.price - element.price * 0.15;
});

console.log(products);

//Задание 4

const productsList = [{
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const productsWithPhotos = productsList.filter(function(product) {
    if (product.hasOwnProperty("photos") && product.photos.length > 0) {
        return true;
    }
});

productsList.sort(function(product1, product2) {
    if (product1.price < product2.price) {
        return -1;
    }
});
console.log(productsWithPhotos);
console.log(productsList);


//Задание 6 
let letter = "x";
let result = "";
for (let i = 1; i <= 20; i++) {
    result += letter;
    console.log(result);
}