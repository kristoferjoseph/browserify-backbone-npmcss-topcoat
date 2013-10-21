var shim     = require('shimsham')
,   $        = shim.$
,   _        = shim._
,   Backbone = shim.Backbone
,   App      = require('./views/app')


module.exports = Backbone.Router.extend({

    routes: {
        '/':'home',
        "home":"home",      // #help
        "audio/:id":"audio" // #audio/1
    },

    initialize: function() {
        new App
    },

    home: function() {
    },

    audio: function(id) {

    }
})
