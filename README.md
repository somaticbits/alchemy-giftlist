# Gift List

To get started with the repository, clone it and then run `npm install` in the top-level directory to install the dependencies.

## How it works
The frontend will generate a MerkleTree from the list of gifts, and send the proof with the name to the backend. The backend then checks the proof against the MerkleRoot and returns the result.

## Running the app

You can run the app in development mode by running `npm dev` in the client directory.
It is composed of a React frontend and a Node.js backend. If you want to build the frontend, use `npm build` in the client directory.
And deploy the backend on the hosting service of your choice (don't forget to set the `serverUrl` variable in the client folder).

## Using the app

Just type your name in the input box, and you'll be able to see if you've been naughty or nice this year!