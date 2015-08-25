var Lol = React.createClass({

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
    },

    render: function() {
        return (
            <div>
                {(function() {
                    console.log(this);
                    return "kkk__"
                }).bind(this)()}
                asdfasdfsadfl
            </div>
        );
    }
});

