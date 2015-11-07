# ES5 Configuration For jspm config.js


 The config.js file is created by jspm as part of the 'jspm init' operation.
 Configure the typescript and set up options as shown below.

#### 1. Configure the 'typescriptOptions'
* Configure 'typescriptOptions' as shown below.
* This options should be coordinated with those included in tsconfig.json


        System.config({
            baseURL: "/",
            defaultJSExtensions: true,
            transpiler: "typescript",
            typescriptOptions: {
              "emitDecoratorMetadata": true,
              "experimentalDecorators": true,
              "moduleResolution": "node",
              "resolveAmbientRefs": true,
              "module": "system"
              },
              ...
          });

#### 2. Configure the 'app' item in paths.  Use correct ts file name.
    paths: {
      "npm:*": "lib/npm/*",
      "github:*": "lib/github/*",
      "app": "src/main"
    },

#### 3. Add a 'packages' component

    packages: {
       "app": {
         "main": "main",
         "defaultExtension": "ts"
       }
     },
