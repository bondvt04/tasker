var CommentForm = React.createClass({

    onSubmit : function(e) {
        e.preventDefault();

        var author = React.findDOMNode(this.refs.author).value.trim();
        var text = React.findDOMNode(this.refs.text).value.trim();
        if (!text || !author) {
            return;
        }

        this.props.onCommentSubmit({
            author: author,
            text: text
        });

        React.findDOMNode(this.refs.author).value = '';
        React.findDOMNode(this.refs.text).value = '';
        return;
    },

    render: function() {
        return (
            <form className="commentForm" onSubmit={this.onSubmit}>
                <input ref="author" type="text" placeholder="Your name" />
                <input ref="text" type="text" placeholder="Say something..." />
                <input type="submit" value="Post" />
            </form>
        );
    }
});