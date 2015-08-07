define([
    "react"
], function(React) {
    return React.createClass({
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
                        <button onClick={this.toggleLiked} className={buttonClass} >
                            like button ♥
                        </button>
                        <span>asdf</span>
                    </div>
                </div>
            );
        }
    });
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