# raghav-tdd

This project has two directory as my-app(client) and server(API). And each folder has it's own README file with all information to run it. 
Steps to satrt server
`npm install`
`npm run build`
`npm start`

# Run test cases
`npm test`

# Start client application
`npm start`

Question 1: What is sensor?
Assumption  - It's a temperature detector, which gives temperature information in json format.
Storing this json data in a file as sensorData.

Question 2: How we will notify to client ?
Assumption - There will be a service which will update a client on temperature change. 
Using websocket to update client.

Question 2: What will be notification ?
Assumption - There will be screen that will be updating in real time with temperature of beers. 

# For real time notification 
Using a sensor data generator that will update temperatue of each beer from range (-2 to 2) 

Thank You 