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

//logs wether you are connected or not and what is your connection id
connection.connect();
    
    //displays our initial function
    displayTable();
    
//quering data from mySQL
function displayTable() {
    connection.query("Select * FROM products", function(error, results) { 
        if (error) throw error;
    //testing connectivity to mysql database
    //console.log("Connection successful!");
    
    var t = new Table

    //creating columns and quering data and inputting data into table (info retrieved from easy-table npm documentation)
    // this data will be displayed in a table on the command line
    results.forEach(function(product) {
        t.cell("Item", product.id);
        t.cell("Product", product.productName);
        t.cell("Department", product.departmentName);
        t.cell("Price", product.price, Table.number(2));
        t.cell("Quantity", product.stockQuantity)
        t.newRow();
    });
    console.log(t.toString());
})     
    inquirer.prompt([{
        name:"id",
        type: "input",
        message: "What is the ID of the item you would like to buy?"
    }, {

        name:"quanity",
        type: "input",
        message: "Please input the quantity of the item you would like to buy."
    }]).then(function(answers){

        //connect input to database functinality not working. I need a refresher on CRUD
        connection.query("SELECT * FROM products WHERE id = " + answers.id, function(error, results) {
            try {
                let price = results[0].price;
                var total = (answers.stockQuantity * price).toFixed(2)

                if(results[0].stockQuantity < answers.stockQuantity) {
                    console.log("Sorry, not enough inventory on hand");
                    displayTable();
                } else {
                    connection.query("Update products stockQuantity - stockQuantity" + answers.stockQuantity + "where id" + answers.id, function(error, results) {
                        console.log("Inventory updated!");
                        console.log("Your total is: $ " + total);
                        console.log("Thank you for your business! Enjoy your new products!");
                    });
                }
            }catch(e){
                console.log("there was an error with your request: ", e.message);
                exitProgram();
            }
        })
    })
}
function exitProgram(){
    connection.end();
}



