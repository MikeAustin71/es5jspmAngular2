var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('zone.js');
require('reflect-metadata');
require('es6-shim');
var angular2_1 = require('angular2/angular2');
var TestApp = (function () {
    function TestApp() {
        var _this = this;
        this.name = 'Angular2';
        setTimeout(function () {
            _this.name = 'Angular2!!!';
        }, 1500);
    }
    TestApp = __decorate([
        angular2_1.Component({
            selector: 'test-app'
        }),
        angular2_1.View({
            template: '<h4>Hello {{name}}</h4>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestApp);
    return TestApp;
})();
angular2_1.bootstrap(TestApp);
//# sourceMappingURL=main.js.map