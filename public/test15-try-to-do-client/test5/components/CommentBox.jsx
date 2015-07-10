var CommentBox = React.createClass({

    getInitialState: function() {
        return {data: [
            {"author": "Pete Hunt 1", "text": "This is one comment"},
            {"author": "Pete Hunt 1", "text": "This is one comment"},
        ]};
    },

    onCommentSubmit: function(comment) {

        console.log(comment);
        console.log(this.state.data.push(comment));
        console.log(this.state.data);

        this.setState({
            data: this.state.data
        });
        //this.setState({
        //    data: [
        //        {"author": "Pete Hunt 3", "text": "This is one comment"},
        //    ]//this.state.data.push(comment)
        //});
        // TODO: submit to the server and refresh the list
    },

    componentDidMount: function() {
        this.setState({data: this.state.data.concat([
            {"author": "Pete Hunt 2", "text": "This is one comment"},
            {"author": "Jordan Walke", "text": "This is *another* comment"}
        ])});

        //$.ajax({
        //    url: this.props.url,
        //    dataType: 'json',
        //    cache: false,
        //    success: function(data) {
        //        this.setState({data: data});
        //    }.bind(this),
        //    error: function(xhr, status, err) {
        //        console.error(this.props.url, status, err.toString());
        //    }.bind(this)
        //});
    },

    render: function() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.state.data} />
                <CommentForm onCommentSubmit={this.onCommentSubmit} />
            </div>
        );
    }
});