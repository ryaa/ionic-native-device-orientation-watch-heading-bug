# Prerequisities
* [Git](http://git-scm.com/) and [Source Tree](https://www.sourcetreeapp.com/) to manage sources - see the installation instructions on the site
* [Node.js](http://nodejs.org/) - install the latest LTS node version (for example, node 12.18.4 - see the installation instructions on the site)   
NOTE: It is recommended to install and use nvm (see https://github.com/creationix/nvm) and install node 12.18.4 by issuing `nvm install v12.18.4`
* Switch to node 12.18.4 by issuing nvm use 12.18.4
* [Ionic CLI](http://ionicframework.com/docs/cli/install.html) - install the latest stable ionic cli version
* Install Capacitor Required Dependencies for Android Development (see https://capacitor.ionicframework.com/docs/getting-started/dependencies/)

# Instructions
## Initial setup
1. clone the source code repository
2. change to project repository directory (the directory where you cloned the repo)
3. execute the command `npm install`
4. execute the command `ionic build`
5. run `npx cap sync` to copy the build from www to the native projects and sync native plugins and then `npx cap open android` to open projects in Android Studio or XCode, then build from there