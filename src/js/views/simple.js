var shim     = require('./../shim')
,   Backbone = shim.Backbone
,   $        = shim.$
,   _        = shim._
,   simple   = require('./simple.ejs.html')

module.exports = Backbone.View.extend({
    
    el: 'body',

    initialize: function() {
        this.render()
    },

    template:simple,

    render: function() {
        $(this.el).html(this.template({text:'fuck ya'}))
    }
})

