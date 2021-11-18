# Code Challenge

We'd like you to write a bit of code. We tried to keep the problem statement minimal so it shouldn't take too much time.

If you have any questions please send us an email. If the problem statement doesn't specify something, you can make any decision that you want. Your code will not be evaluated on its ability to handle anything that wasn't mentioned in the problem statement. You do not need to persist any data to disk.

Please include a README with your submission describing your approach to solving the problem. Do not include your name or any personally identifiable information in your readme.

We're looking for a solution that is representative of code that you would write on a real project, including tests. You can complete this at your convenience — there isn't a specific deadline for it.

Package your code as a tarball (tar zcvf your-code.tgz your-code-dir) or a gitbundle (GIT_DIR=your-code-dir/.git git bundle create your-code.gitbundle --all).

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

## Exceptations and Evaluation Criteria

As experienced software engineers know, there's a wide variety of solutions to any problem. Interview coding problems can be especially unclear about expectations as the tasks can range from a quick [fizz buzz](http://wiki.c2.com/?FizzBuzzTest) screening problem to fully fledged applications. Although we've given a relatively simple problem to solve, we're looking for you to implement enough code to demonstrate expertise with domain modeling and testing.

We're interested in the thought process behind your choices, so please take some time to capture that in your README. For example, you can represent your data using primitives, structs, or objects. We don't consider any one of those options better than the others. However, we expect you to make an intentional choice, implement it consistently, and communicate why you chose that approach.

In general, we're looking for a little more structure than what the problem actually necessitates. Although we understand the principle of YAGNI and the desire to keep code simple, we didn't want to add so many requirements to this exercise that it'd take a massive amount of time. Don't go overboard with this — we don't want to see a complex overabundance of abstraction. We also don't want to see all of the code in a single function, even though this problem is simple enough to reasonably implement it that way.

We'll be evaluating solutions on:

* object modeling / software design
* testing approach
* use of language idioms relative to expertise with that language
* thought process captured in the README