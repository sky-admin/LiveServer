'use strict';
var crypto = require('crypto');

module.exports = function(Live) {

  Live.observe('before save', function (ctx, next) {
    // console.log('Save a Live instance: ' + ctx.instance.clientId);
    // var clientId = ctx.instance.clientId;
    var data = new Date().getTime();
    var id = crypto.createHash('md5').update(ctx.instance.name + data).digest('hex');
    ctx.instance.rtmpStream = 'rtmp://push.lihuanyu.com/live/' + id;
    next();
  })
};
