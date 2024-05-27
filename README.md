## How to use it

### Create build for MyLibrary

#### Install MyLibrary

`cd MyLibrary` `npm install`

#### Install yalc - alternative to npm link

`npm install yalc -g`

#### Create build

`npm run build`

The build is created and published into local store to be used on MyApp

### Run MyApp

#### Install MyApp

`cd MyApp`

#### Add MyLibrary from local store to MyApp

`yalc add MyLibrary`

#### Install app

`npm install`

##### Run app

`npm start`

You will see that lottie-react-native package is not working but if you run `npm install lottie-react-native` on MyApp it will work.

This is what I want to solve
