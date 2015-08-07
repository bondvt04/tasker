define([
    "react"
], function(React) {

    var Photo = React.createClass({

        toggleLiked: function() {
            this.setState({
                liked: !this.state.liked
            });
        },

        getInitialState: function() {
            return {
                liked: false
            }
        },

        render: function() {
            var buttonClass = this.state.liked ? 'active' : '';

            return (
                <div className='photo'>
                    <img src="" />

                    <div className='bar'>
                        <button onClick={this.toggleLiked} className={buttonClass}>
                            Like button ♥
                        </button>
                        <span></span>
                    </div>
                </div>
            )
        }
    });

    var PhotoGallery = React.createClass({

        writeHello: function(newGreeting) {
            this.setState({
                text: newGreeting
            });
        },

        getInitialState: function() {
            return {
                text: "lol"
            }
        },

        getDataFromServer: function() {
            return [{
                url: 'http://seravo.fi/uploads/seravo/2013/06/JavaScript-logo.png',
                caption: 'New York!'
            }, {
                url: 'https://camo.githubusercontent.com/891e94cd8dda7f40f451bb27067be513c230318a/68747470733a2f2f7261772e6769746875622e636f6d2f766f6f646f6f74696b69676f642f6c6f676f2e6a732f6d61737465722f626f676a732f6a732e706e67',
                caption: 'Cows'
            }, {
                url: 'http://jscoderetreat.com/img/why-js.png',
                caption: 'Scooters'
            }];
        },

        render: function() {
            var data = this.getDataFromServer();

            var photos = data.map(function(photo) {
                return <Photo src={photo.url} caption={photo.caption} />
            });

            return (
                <div className='photo-gallery'>
                    {photos}
                    <div>{this.state.text}</div>
                </div>
            )
        }
    });

    return PhotoGallery;
});




//module.exports = React.createClass({
//    toggleLiked: function() {
//        this.setState({
//            liked: !this.state.liked
//        });
//    },
//
//    getInitialState: function() {
//        return {
//            liked: false
//        }
//    },
//
//    render: function() {
//        var buttonClass = this.state.liked ? 'active' : '';
//
//        return (
//            <div className='photo'>
//                <img src="" />
//
//                <div className='bar'>
//                    <button onClick={this.toggleLiked} className={buttonClass} >
//                    ♥
//                    </button>
//                    <span>asdf</span>
//                </div>
//            </div>
//        );
//    }
//});