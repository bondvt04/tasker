"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BBorder = (function () {
    function BBorder(color, width, type) {
        _classCallCheck(this, BBorder);

        this.color = color || "black";
        this.width = width || "1px";
        this.type = type || "solid";
    }

    _createClass(BBorder, [{
        key: "toString",
        value: function toString() {
            return this.color + " " + this.width + " " + this.type;
        }
    }]);

    return BBorder;
})();

window.addEventListener("load", function () {
    document.getElementsByTagName("b")[0].style.border = new BBorder("red", "1px", "solid").toString();
    setTimeout(function (v) {
        console.log("1234");
        console.log("asdf");
        console.log("qwer");
    }, 1000);
}, false);

//# sourceMappingURL=index.js.map