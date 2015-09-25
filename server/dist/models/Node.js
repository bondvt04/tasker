/**
 * Created by anatoliybondar on 8/21/15.
 */



var mongoose = require('../db/index');

var nodeSchema = mongoose.Schema({
    //types: [{
    //    typeName: String
    //}],
    content: String
});

// NOTE: methods must be added to the schema before compiling it with mongoose.model()
/*nodeSchema.methods.getTypes = function () {
    //var greeting = this.name
    //    ? "Meow name is " + this.name
    //    : "I don't have a name";
    logger.log(this.types);
}*/

var Node = mongoose.model('Node', nodeSchema);

module.exports = Node;
//# sourceMappingURL=../models/Node.js.map