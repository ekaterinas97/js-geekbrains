"use strict";
// Задание 1.1
// es5
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.make25PercentDiscount = function() {
    this.price = this.price - this.price * 0.25;
};

let product1 = new Product("product1", 100);
let product2 = new Product('product2', 500);
product1.make25PercentDiscount();
product2.make25PercentDiscount();

// es6
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    make25PercentDiscount() {
        this.price = this.price - this.price * 0.25;
    }
}
let product1 = new Product("product1", 100);
let product2 = new Product('product2', 500);
product1.make25PercentDiscount();
product2.make25PercentDiscount();

// Задание 1.2
// es5
function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function(text) {
    this.text = text;
};

function AttachedPost(author, text, date, highlighted) {
    Post.call(this, author, text, date);
    this.highlighted = highlighted;

}
AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let post2 = new AttachedPost('john', 'lorem ipsum', '17.07.2021', false);
post2.makeTextHighlighted();
post2.edit('changed text');

// es6
class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }
    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date, highlighted) {
        super(author, text, date);
        this.highlighted = highlighted;
    }
    makeTextHighlighted() {
        this.highlighted = true;
    }
}
let post2 = new AttachedPost('john', 'lorem ipsum', '17.07.2021', false);
post2.makeTextHighlighted();
post2.edit('changed text');