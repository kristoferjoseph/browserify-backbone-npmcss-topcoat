var shim     = require('shimsham')
,   Backbone = shim.Backbone
,   $        = shim.$
,   _        = shim._
,   template = require('./app.ejs.html')
,   TitleBar = require('./title')
,   NavMenu  = require('./nav')
,   Controls = require('./controls')
,   playlist = require('./../models/playlist')
,   player   = require('./../models/player')

module.exports = Backbone.View.extend({
    
    el: 'body',
    
    template:template,

    initialize: function() {
        $(this.el).html(this.template())
        this.render()
    },

    render: function() {
        this.title    = new TitleBar({el:'#title'})
        this.nav      = new NavMenu({el:'#navmenu', model:player, collection:playlist})
        this.controls = new Controls({el:'#controls', model:player, collection:playlist})
        return this
    }
})

