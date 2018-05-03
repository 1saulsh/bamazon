//requiring dependcency packages
var mysql = require ("mysql");
var inquirer = require("inquirer");
var Table = require("easy-table");

//creating connection object to mySQL
var connection = mysql.createConnection({
    host:"localhost",
    port:3306,
    user: "root",
    password: "root",
    database: "amazon_db"
});

//logs wether you are connected or not and what is your connection id.    //testing connectivity to mysql database
connection.connect(function(error) {
    if (error) throw err; 
    //displays our initial function
    displayTable();
    
});
    
    
//quering data from mySQL to show the table with the products for the customer to view
function displayTable() {
    connection.query("Select * FROM products", function(error, results) { 
        if (error) throw error;
   
    
    var t = new Table

    //creating columns and quering data and inputting data into table (info retrieved from easy-table npm documentation)
    // this data will be displayed in a table on the command line
    //forEach is the way to loop through info in mySQL
    results.forEach(function(product) {
        t.cell("Item", product.id);
        t.cell("Product", product.productName);
        t.cell("Department", product.departmentName);
        t.cell("Price", product.price, Table.number(2));
        t.cell("Quantity", product.stockQuantity)
        t.newRow();
    });
    console.log(t.toString());

    pickProduct();
    })
}

//pick a procduct and how many
function pickProduct(answers) {
     inquirer.prompt([
     {
        name:"id",
        type: "input",
        message: "What is the ID of the item you would like to buy?"
    }, 
      {
        name:"quantity",
        type: "input",
        message: "Please input the quantity of the item you would like to buy."

      }
     ]).then(function(answers){

        //connect input to database functionality not working.
        connection.query("SELECT * FROM products WHERE id = " + answers.id, function(error, results) {
            
            console.log("Quantity " + answers.quantity);

            if (parseInt(answers.quantity) > results[0].stockQuantity){
           
            console.log("Sorry, there are only " + results[0].stockQuantity + " left");
            console.log("Please select a smaller quantity")
                pickProduct();
 
            }
            else {
                console.log("Your purchase of " + answers.quantity + ' ' + results[0].productName +"/s total cost is: $ " + parseInt(results[0].price) * parseInt(answers.quantity));
                console.log("Thank you for your business! Enjoy your new products!");

            var quantityLeft = results[0].stockQuantity - answers.quantity;
                console.log(quantityLeft);
                connection.query(
                    "UPDATE products SET ? WHERE?",
                    [
                        {stockQuantity: quantityLeft
                        },
                        {
                            id: answers.id
                        }
                    ],
                    function(error) {
                        if (error) throw error;
                    });
                    console.log("Inventory updated. There are " + quantityLeft + " left");
                    displayTable();
                    exitProgram();
                }

            })
        });

};
        



function exitProgram(){
    connection.end();
}
    


