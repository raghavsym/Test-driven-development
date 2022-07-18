# Test-Driven-Development

## First Steps

We’re going to start with a simple Express application that serves up an API for temperature sensor data.

Next, we’re going to install the testing frameworks we’ll use as _dev-dependencies_, meaning they won’t get installed when we run `npm install` in a production environment, but we still need them during development in order to do our work. Run the following commands to set up our test framework:

<pre>npm install --save-dev supertest
npm install --save-dev mocha chai
</pre>

Now that we have our testing framework set up, we’re going to create our first test – an integration test for our “temperature” route. 

## Create integration tests

The purpose of integration tests in this application will be to verify the API footprint our application exposes, but no more. We’re not going to be testing the functionality that these routes implement – just that the API itself returns appropriate bodies and status codes for all the scenarios we’ve handled.


## Run the integration tests and make the integration tests pass

`node_modules/.bin/mocha -u exports test/integration/*`

## Add unit tests

Now that we’ve added integration tests to verify our API does what we’d expect, let’s add some unit tests to verify that logic fails (we don’t currently return correct results). TDD means write failing tests, implement, observe passing tests!

`node_modules/.bin/mocha -u exports test/unit/*`

## how to run our tests


<pre>  "scripts" : {
    "test" : "node_modules/.bin/mocha -u exports test/**/*"
  }
</pre>

Now we can run our tests with `npm test`, rather than this long command. Notice we specify our tests in the `test/**/*` directory – meaning any file in a subdirectory of `test` will be run as a Mocha test.

Run `npm test` and our output now shows the result of running tests.
