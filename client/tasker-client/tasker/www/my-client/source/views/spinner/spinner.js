RAD.view("view.spinner", RAD.Blanks.View.extend({
    url: 'source/views/spinner/spinner.html',
    
    isSpinnerInited : false,

    onEndAttach: function () {
        'use strict';
        if(!this.isSpinnerInited) {
            this.showSpinner();
            this.isSpinnerInited = true;
        }
    },

    showSpinner: function () {
        var spinner = new Spinner({
            lines: 13, // The number of lines to draw
            length: 20, // The length of each line
            width: 10, // The line thickness
            radius: 30, // The radius of the inner circle
            corners: 1, // Corner roundness (0..1)
            rotate: 0, // The rotation offset
            direction: 1, // 1: clockwise, -1: counterclockwise
            color: '#ccc',//'#027dce', // #rgb or #rrggbb or array of colors
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 'auto', // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
        }).spin(document.getElementById('spinner'));
    }
}));
