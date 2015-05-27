class BBorder {
    constructor(color, width, type) {
        this.color = color || "black";
        this.width = width || "1px";
        this.type = type || "solid";
    }

    toString() {
        return this.color+' '+this.width+' '+this.type;
    }
}

window.addEventListener('load', function() {
    document.getElementsByTagName('b')[0].style.border = (new BBorder("red", "1px", "solid")).toString();
    setTimeout(v => {
        console.log("1234");
        console.log("asdf");
        console.log("qwer");
    }, 1000);
}, false);
