var shim     = require('shimsham')
,   Backbone = shim.Backbone
,   $        = shim.$
,   _        = shim._
,   app      = require('./app.ejs.html')
,   TitleBar = require('./title')


module.exports = Backbone.View.extend({
    
    el: 'body',

    initialize: function() {
        this.title = new TitleBar
        this.render()
    },

    template:app,

    render: function() {
        $(this.el).html(this.template({text:'sweet'}))
        $(this.el).append(this.title.render())
    }
})

