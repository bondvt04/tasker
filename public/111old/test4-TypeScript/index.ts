/**
 * Created by anatoliybondar on 5/25/15.
 */

declare var $;

class BStyles {
    border : {
        color : string;
        width : string;
    };

    constructor(color: string, width: string) {
        //debugger;
        this.border = {
            color : color,
            width : width
        };
        //debugger;
    }
}

function setBStyle(style : BStyles) {

    $('b')[0].style.border = 'solid '+style.border.width + ' ' + style.border.color;
}

window.addEventListener('load', function() {

    var style = new BStyles("red", "3px");

    setBStyle(style);
}, false );


interface Lol {
    a : string;
    b ?: string;
}

function hello(c : Lol) {

}

hello({a:"zlo"});