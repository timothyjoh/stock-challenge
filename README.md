# Setup and Dependencies
1. `npm install` to get all the dependencies
2. `npm test` will run the test suite with `tape`

## To run the program
You will be able to run the program by typing the following
in your shell prompt

`./stock.ts example1.txt`

# Design and Structure

First we are starting off with the executable file at the root of the project, for easy access. It doesn't do much in this file, but processes the commandline args and passes them into an `extract` function. All the main source code lives in the `src` directory.

I set up the code path to behave like this:
1. First we `extract` the data from the file
2. Then the data is sent to `process` the file, line by line
3. Each line goes through a different kind of processing, which those functions are broken out in the `processing` folder under their names.
4. At each line of processing, the lines are reduced into a singular State object. Each line returns a new state object
5. Once the processing is done, this state object is passed to a report function that generates the appropriate report. State is preserved so we can run more reports and do more in time.
6. This report is output to the terminal as required, but the `output` function could be replaced by something else when needed.

There are some private functions in the `process.ts` and the `customerOrderReport.ts` files that are not exported and not tested directly in the test suite. I would sometimes write some tests for these while working on the implementation, but then we can throw it away if the main unit tests cover enough of the cases (it's a rough
judgment call on this at any given time).

This was a fun exercise, seemingly straightforward, but pretty deep. Thanks for the opportunity!