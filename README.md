# App built in Live <3

# :construction_worker: Installation

**You need to install [Node.js](https://nodejs.org/en/download/), [Npm](https://www.npmjs.com/), [Expo-cli](https://expo.io/learn) first, then in order to clone the project via HTTPS, run this command:**

`git clone https://github.com/jeanmolossi/covid-app.git`

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

`git clone git@github.com:jeanmolossi/covid-app.git`

**Install dependencies**

`npm install`

Create your enviroment variables based on the examples of config files in `src/config/`

`firebase.example.ts` && `api.example.ts`

After copying the examples, make sure to fill the variables with new values.

**Setup the API**

The interface needs to interact with the server to receive and register data.

Make sure to go to the [Rapid API](https://rapidapi.com/Gramzivi/api/covid-19-data) repository and follow the instructions in order to get it running in your machine.

# :runner: Getting Started

Run the following command in order to start the application in a development environment:

`expo start`

**If run on Mobile You need to install the [Expo](https://expo.io/) app available on the PlayStore for Android and AppStore for IOS ,You can run on iOS Emulator and Android Emulator.**
