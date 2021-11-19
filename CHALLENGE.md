## Problem Statement

Lets write some code to track how much customers spent with us and available inventory in our warehouse.

The code will process an input file. You can either choose to accept the input via stdin (e.g. if you're using Ruby cat input.txt | ruby yourcode.rb), or as a file name given on the command line (e.g. ruby yourcode.rb input.txt). You can use any programming language that you want. Please choose a language that allows you to best demonstrate your programming ability.

Each line in the input file will start with a command. There are three possible commands.

The first command is `register`, which will register a product and it's price with our system.

`register hats $20.50`

The second command is `checkin`, which will checkin a quantity of a product into our warehouse.

`checkin hats 100`

The third command is `order`, which will place an order from a customer. It takes a customer name, a product, and a quantity as arguments.

`order kate hats 20`

Ignore any orders for products that either are not in the warehouse or we do not have enough of to fulfill the order.

Please generate a report showing how much each customer spent on each product along with their average order value. An example input and output set is below.

## Example Input

```
register hats $20.50
register socks $3.45
register keychain $5.57
checkin hats 100
order kate hats 20
checkin socks 30
order dan socks 35
order kate socks 10
```

## Example Output

```
Dan: n/a
Kate: hats - $410.00, socks - $34.50 | Average Order Value: $222.25
```

