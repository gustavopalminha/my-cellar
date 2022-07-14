# My Cellar APP

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### UI
![UI My Cellar](https://github.com/gustavopalminha/my-cellar/blob/main/frontend.PNG)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Architecture considerations

Part of this CSS was adapted from previous work I did while learning React so I din't write all of it.

I've used context provider because I wanted a centralized place for context management and for this simple app this is enough.

This version is not saving data in a database by calling APIs. When implementing this, I would create a centralizes component client to handle all the API calls, GET, POST, ...

Considering the 4h limit I've skipped unit tests but I would use Jest with react testing library to create them.
