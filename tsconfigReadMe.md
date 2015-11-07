# Configure tsconfig.json for ES5
**Note: Adjust relative directories and File specs as needed.**

### Complier Options
* Modify "compilerOptions" as needed.

* Note: If you change these parameters, be sure to coordinate with options specified in the config.js file.


          "compilerOptions": {
            "emitDecoratorMetadata": true,
            "experimentalDecorators": true,
            "target": "es5",
            "module": "system",
            "declaration": false,
            "noLib": false,
            "isolatedModules": false,
            "diagnostics": true,
            "noImplicitAny": false,
            "removeComments": true,
            "preserveConstEnums": true,
            "suppressImplicitAnyIndexErrors": true,
            "sourceMap": true,
            "version": true
        },

### Atom Editor Requires the 'filesGlob' parameter.
* Adjust relative directory paths as necessary.
* Modify file specs as needed.


        "filesGlob": [
            "./src/**/*.ts",
            "./src/**/*.tsx",
            "./lib/npm/angular2@2.0.0-alpha.45/bundles/typings/angular2/angular2.d.ts",
            "./lib/npm/angular2@2.0.0-alpha.45/bundles/typings/es6-shim/es6-shim.d.ts",
            "!./node_modules/**"
        ],

### Files Parameter
* Adjust relative directory paths as necessary.
* Modify file specs as needed.


        "files": [
            "./src/main.ts",
            "./src/todoInput.ts",
            "./lib/npm/angular2@2.0.0-alpha.45/bundles/typings/angular2/angular2.d.ts",
            "./lib/npm/angular2@2.0.0-alpha.45/bundles/typings/es6-shim/es6-shim.d.ts"
        ],

### Exclude Parameter
* Exclude jspm_packages folder: jspm_packages or alternative folder.
* This controls 'Project' compile in WebStorm.


    "exclude": [
            "node_modules",
            "lib"
        ]

###Typescript docs
[tsconfig Docs](https://github.com/Microsoft/TypeScript/wiki/tsconfig.json)


[TypeScript Docs](https://github.com/Microsoft/TypeScript)


[TypeScript Home](http://www.typescriptlang.org/)
