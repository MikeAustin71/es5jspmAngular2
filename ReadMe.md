# Getting Started With JSPM, Typescript and Angular 2
This is a setup script for an empty or skeleton project. This setup
is configured for use with ES5, jspm, Typescript and Angular2 versions
as follows:

 * [`jspm Version 0.16.4`](http://jspm.io/)
 * [`Typescript 1.6.2`](http://www.typescriptlang.org/)
 * [`Angular2 2.0.0-alpha.45`](https://github.com/angular/angular)

### Works In Chrome, Firefox, Edge and IE

## Setup
1. mkdir fantasticAppDir && cd fantasticAppDir

2. Create package.json
    * npm init

3. Install jspm globally:
    * __npm install -g jspm__

4. If you plan to install your jspm packages in a directory other than
    'jspm_packages', it is recommended that you create your alternate directory
    now. (Example directory: 'lib').

5. Install jspm locally:
    * __npm install jspm__
    * This allows you to control and lock the version of
        the local jspm installation.
    * Make a note of the local installed jspm version:  jspm -v

6. Run: __jspm init__  - Take the defaults except as follows:

    * Take 'Typescript' transpiler option

    * If alternate package installation directory is desired, input new directory as per # 5 above.
      Enter jspm packages folder (.\jspm_packages): RESPOND-> ./lib <ENTER>

    * NOTE: If something goes wrong you can always re-run: jspm init -p
    * If you receive an error related to inabililty to access a certificate at
        Program Files\Git\mingw64\libexec\ssl\certs\ca-bundle.crt,
        you may find the certificate at C:\Program Files\Git\mingw64\ssl\certs.
        Just copy the 'ssl' directory to the 'libexec' path.

    * Source: [jspm getting-started](https://github.com/jspm/jspm-cli/blob/master/docs/getting-started.md)


7. install dependencies
    * a. You may be asked for GitHub Credentials
    * b. **If you run [CmdrX](./CmdrXReadMe.md) to install these items, skip to step-10**:
    * c. Install the following packages:
        * jspm dl-loader --edge
        * jspm install typescript
        * jspm install npm:tsd
        * jspm install angular2 reflect-metadata zone.js es6-shim
        * (optional) jspm install jquery
        * (optional) jspm install lodash
        * (optional) jspm install bootstrap

8. Run: tsd init -> setup typings directory

9. Create the tsconfig.json file. run "tsc --init" in the project root directory.

10. Modify config.js (ES5 Version)
    [config js modifications](./configjsReadMe.md)

11. Modify the tsconfig.json file. [Configure tsconfig.json](./tsconfigReadMe.md)

12. Code and configure your index.html file.

13. Code and Compile typescript files. You should receive zero errors.

14. Run the app in your browser. (See below) When run
        in the browser, you should only see two warnings in the Chrome Console
        related to 'Zone'. No errors.


## Set Up A Server And Run The Application
Choose a server.

### jspm-server
 * make sure jspm-server is installed globally.
__jspm install -g jspm-server__

 * To display index.html in the Browser->
Run: __jspm-server__<ENTER>

### http-server
 * To display index.html in the Browser npm install -g http-server
 * (if port 8080 it taken, pick any port that is free)
 * Run: __http-server -p 8080__<ENTER>

### OR - Any of a half-dozen other servers


## Clone This Repo And Run The Demo App
1. Clone the repo to local directory
2. cd localDirectory
3. Run: npm install
4. Run: jspm install
5. See the Section Above: **Set Up A Server And Run The Application**


## Resources

jspm home: [https://jspm.io](https://jspm.io)

jspm and typescript [using-jspm-with-typescript](http://stackoverflow.com/questions/28339100/using-jspm-with-typescript)

typescript angular and jspm samples [Microsoft TypeScriptSamples](https://github.com/Microsoft/TypeScriptSamples)
