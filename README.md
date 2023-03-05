## BovControl - Milk Hiring

This repository belongs to the challenge of an interview requested by [BovControl](https://platform.bovcontrol.com/).

### The Result

You can see the result on the video below and click on it to see the full video or click [here](https://www.youtube.com/watch?v=WaWhjrJtyUQ)

[![Challenge Preview](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjg0ZDk1YzY5ZGYxYTcwZjlmMTVkNjI0NTk1Zjk2YWUwYzAzZTdjNyZjdD1n/PGjvy2k4IgpyPOZ2oL/giphy.gif)](https://www.youtube.com/watch?v=WaWhjrJtyUQ)

### Summary

The app was created on the provided [requirements](https://github.com/bovcontrol/milk-hiring/blob/master/desafio-frondedn-v2.md) from BovControl, and I made a Figma design to get on the final result above. If you are interested in seeing Figma, [click here](https://www.figma.com/file/0DqYlaPyY7oId5BBIXhqR6/BovControl-Milk-Hiring?node-id=0%3A1&t=uZt9dXhYYHhkaEDw-1).

### What tools and tech were used?

- typescript - To get more consistent on development.
- expo - Tool very useful to create React Native projects.
- realmdb - To create a local database to work in offline mode.
- styled-components - To create beautiful components with CSS syntax.
- react-navigation - To create navigation between screens.
- react-hook-form - To easily create forms and validate them.
- date-fns - To easily manipulate date object on Javascript.
- vector-icons - To get icons from the big community.
- axios - To send http requests.

### The project structure

All code of the project is in `src` folder, that contains the following folders:

- `assets/` - Contains images and font files.
- `components/` - Contain all of the general components of the application.
- `helpers/` - All helpers functions can be inside that folder.
- `hooks/` - All hooks function with certain logic of data.
- `navigation/` - The navigation and route files.
- `screens/` - All screen files.
- `services/` - All services that the application needs, `api` and `realm` are the services in this case.
- `theme/` - To provide an easy way to change the theme of the application, like colors and typography.

### How to start the project?

You can clone this repository and follow the steps below:

1. `yarn install` or `npm install` to install dependencies.
2. `cd ios/ && pod install` for iOS only.
2. `yarn ios` to start on iOS and `yarn android` to start on connected Android devices.