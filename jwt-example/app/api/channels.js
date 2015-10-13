var Channel  = require('../models/channel');

exports.getList = function(req, res) {
    if(!req.decoded){
        return res.json({error: 'true'});
    }else{
        Channel.find({
            userId: req.decoded._id
        }, function(err, channels) {
            return res.json(channels);
        });
    }
};

exports.postChannel =  function(req, res) {
    Channel.findOne({
        link: req.body.link,
        userId: req.decoded._id
    }, function(err, channel) {
        if (err) throw err;
        if (!channel) {
            var channel = new Channel({
                link: req.body.link,
                name: req.body.name,
                userId: req.decoded._id
            });
            //save
            channel.save(function(err) {
                if (err) throw err;
                res.json({ success: true, message: 'Channel added.' });
            });
        } else {
            return res.json({ success: false , message: 'Failed. This Channel already exist.' });
        }
    });
};

exports.getChannelId =  function(req, res) {
    Channel.findOne({
        _id: req.params.id,
        userId: req.decoded._id
    }, function(err, channel) {
        if (err) throw err;
        if (channel) {
            return res.json({ success: true , channel: channel });
        } else {
            return res.json({ success: false , message: 'Failed. There is no channel with this id.' });
        }
    });
};

exports.deleteChannelId =  function(req, res) {
    Channel.findOne({_id: req.params.id}, function(err, channel) {
        if (err) throw err;
        channel.remove(function (err) {
            if (!err) {
                return res.send({ success: true , message: 'Channel has been removed' });
            } else {
                return res.send({ success: false , message: 'Failed. Can\'t remove channel.' });
            }
        });
    });
};