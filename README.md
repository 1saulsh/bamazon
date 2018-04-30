MySQL-Node-Bamazon

Amazon-like storefront using MySQL and Node.js. It is comprised of an app for customer orders. 

Bamazon uses these node modules: inquirer, mysql, and easy-table.


Customer Module
The customer module lets users select a product to purchase, enter the number of items they wish to purchase, and then complete the purchase.

The complete purchase process shows how much the total cost is (based on number of items).


To run this module in the terminal:

node bamazonCustomer.js

BamazonCustomer:

displays a table with the inventory
takes a customer's order
computes the cost
depletes the stock from the store's inventory

