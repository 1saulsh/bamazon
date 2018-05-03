**MySQL-Node-Bamazon**

**Overview**

Amazon-like storefront using MySQL and Node.js. It is comprised of an app for customer orders. 

The database is called 'amazon_db' with a Table called 'products'. Schema is attached in the schemasql.sql file.


This Bamazon requires 3 node modules: inquirer, mysql, and easy-table.

![bamazon_dbschema](https://user-images.githubusercontent.com/32534351/39560306-32d1e0ce-4e5a-11e8-90df-a5cfa4465438.PNG)
'amazon_db'
![producttable](https://user-images.githubusercontent.com/32534351/39560308-365f86ce-4e5a-11e8-9fcc-45a0f3ec6582.PNG)
'Prduct table'




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

