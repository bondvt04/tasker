/// <reference path="typings/angular2/angular2.d.ts" />

'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _angular2Angular2 = require('angular2/angular2');

// Annotation section
(0, _angular2Angular2.Component)({
    selector: 'my-app'
});

(0, _angular2Angular2.View)({
    template: '<h1>Hello {{ name }}</h1>'
});
// Component controller

var MyAppComponent =
//name: string;

function MyAppComponent() {
    _classCallCheck(this, MyAppComponent);

    this.name = 'Alice';
};

(0, _angular2Angular2.bootstrap)(MyAppComponent);

//# sourceMappingURL=111app.js.map