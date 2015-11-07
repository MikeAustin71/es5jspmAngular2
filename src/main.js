System.register(['zone.js', 'reflect-metadata', 'es6-shim', 'angular2/angular2'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1;
    var TestApp;
    return {
        setters:[
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            }],
        execute: function() {
            TestApp = (function () {
                function TestApp() {
                    var _this = this;
                    this.name = 'Angular2';
                    setTimeout(function () {
                        _this.name = 'Angular2 - Rock and Roll!!';
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
        }
    }
});
//# sourceMappingURL=main.js.map