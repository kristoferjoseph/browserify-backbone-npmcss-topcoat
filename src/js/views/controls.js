var shim     = require('shimsham')
,   Backbone = shim.Backbone
,   $        = shim.$
,   _        = shim._
,   template = require('./controls.ejs.html')

module.exports = Backbone.View.extend({
    
    
    events: {
        'click': 'buttonClicked'
    },

    initialize: function() {
        // draw yourself
        this.render()
        
        var self = this, player = this.model
        
        player.on('play', function() {
            console.log('current track: ' + player.get('currentTrackId'))
            self.play()
        })
        
        player.on('pause', function() {
            console.log('pausing track: ' + player.get('currentTrackId'))
            self.pause()
        })

        $('#controls audio').on('timeupdate', function(e) {
            $('#seekbar').attr("value", this.currentTime / this.duration);
        })
    },

    template:template,

    render: function() {
        this.$el.html(this.template())
        return this
    },

    play: function() {
        var button = $('#controls button')    
        ,   audio  = $('#controls audio')
        button.html('Pause')      
        audio.attr('src', this.model.get('currentTrackId')) 
        audio.attr('autoplay', true) 
    },

    pause: function() {
        var button = $('#controls button')    
        ,   audio  = $('#controls audio')
        button.html('Play')      
        audio[0].pause() 
    },

    buttonClicked: function() {
        if (this.model.get('playing')) {
            this.model.pause() 
        }
        else {
            this.model.play(this.model.get('currentTrackId'))
        }
    }
})

