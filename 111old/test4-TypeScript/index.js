/**
 * Created by anatoliybondar on 5/25/15.
 */
var BStyles = (function () {
    function BStyles(color, width) {
        //debugger;
        this.border = {
            color: color,
            width: width
        };
        //debugger;
    }
    return BStyles;
})();
function setBStyle(style) {
    $('b')[0].style.border = 'solid ' + style.border.width + ' ' + style.border.color;
}
window.addEventListener('load', function () {
    var style = new BStyles("red", "3px");
    setBStyle(style);
}, false);
function hello(c) {
}
hello({ a: "zlo" });
//# sourceMappingURL=index.js.map