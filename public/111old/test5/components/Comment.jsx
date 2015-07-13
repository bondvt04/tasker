var Comment = React.createClass({

    _prefix : "lol",

    render: function() {

        var innerMarkup = this.props.children;//+this._prefix;
        //console.log(this, this._prefix);

        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>

                {innerMarkup}
            </div>
        );
    }
});