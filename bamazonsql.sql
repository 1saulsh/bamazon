create database amazon_DB;
use amazon_DB;

CREATE TABLE products (
    id INTEGER NOT NULL AUTO_INCREMENT,
    productName VARCHAR(50) NOT NULL,
    departmentName VARCHAR(50) NOT NULL,
    price INTEGER(10) NOT NULL,
    stockQuantity INTEGER(50) NOT NULL,
    PRIMARY KEY (id)
);

insert into products(productName, departmentName, price, stockQuantity) values
("Surface pro", "technology", "1000", "20"),
("Beats Headphones", "technology", "300","5"),
("I Phone X", "technology", "200", "1"),
("Electric trashcan", "technology", "15", "100"),
("Stereo System", "technology", "425", "17"),
("Sound Bar", "technology", "190", "10"),
("DD batteries", "technology", "10", "700"),
("Hewlett Packard Monitor", "technology", "575", "28"),
("Epson Printer Ink", "technology", "45", "70"),
("Epson Printer", "technology", "190", "8")


