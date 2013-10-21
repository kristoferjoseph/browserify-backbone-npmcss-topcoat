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
        
        this.button = $('#controls button')     
        this.audio  = $('#controls audio') 
        
        this.render()
        
        var self = this
        ,  player = this.model
        
        player.on('play', function() {
            console.log('current track: ' + player.get('currentTrackId'))
            self.play()
        })
        
        player.on('pause', function() {
            console.log('pausing track: ' + player.get('currentTrackId'))
            self.pause()
        })

        this.audio.on('timeupdate', function(e) {
            $('#seekbar').attr("value", this.currentTime / this.duration);
        })
    },

    template:template,

    render: function() {
        this.$el.html(this.template())
        return this
    },

    play: function() {
        this.button.html('Pause')      
        this.audio.attr('src', this.model.get('currentTrackId')) 
        this.audio.attr('autoplay', true) 
    },

    pause: function() {
        this.button.html('Play')      
        this.audio[0].pause() 
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

