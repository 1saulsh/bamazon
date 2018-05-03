**MySQL-Node-Bamazon**

**Overview**

Amazon-like storefront using MySQL and Node.js. It is comprised of an app for customer orders. 

The database is called 'amazon_db' with a Table called 'products'. Schema is attached in the schemasql.sql file.

This Bamazon requires 3 node modules: inquirer, mysql, and easy-table.

![bamazon_dbschema](https://user-images.githubusercontent.com/32534351/39560306-32d1e0ce-4e5a-11e8-90df-a5cfa4465438.PNG)
**'amazon_db'**
![producttable](https://user-images.githubusercontent.com/32534351/39560308-365f86ce-4e5a-11e8-9fcc-45a0f3ec6582.PNG)
**'Product table'**

**Customer Module**
Running the Node application called 'bamazonCustomer.js' application will first display all of the items available for sale. Include the ids, names, prices and quantities of products for sale.


Bamazon then prompts users with two messages: * The first ask them the ID of the product they would like to buy. * The second message  asks how many units of the product they would like to buy.

Once an order has been placed the application checks to see if the store has enough of the product to meet the user's request. If not, the app logs the insufficient stock and recursively ask the item ID again.

The complete purchase process shows how much the total cost is (based on number of items).

However, if the store does have enough of the product, It will fulfill the user’s order showing the total price and quantity of the order as well as updating the SQL database to reflect the new quantity.


depletes the stock from the store's inventory

