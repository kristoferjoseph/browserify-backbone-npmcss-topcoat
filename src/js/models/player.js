var shim     = require('shimsham')
,   Backbone = shim.Backbone
,   _        = shim._

var Player = Backbone.Model.extend({
    
    initialize: function() {
        this.set('playing', false)
    },

    play: function(id) {
        this.set('playing', true)
        this.set('currentTrackId', id)    
        this.trigger('play')
    },

    pause: function() {
        this.set('playing', false)
        this.trigger('pause')       
    }
})

_.extend(Player, Backbone.Events)

module.exports = new Player
