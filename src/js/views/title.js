var shim     = require('./../shim')
,   Backbone = shim.Backbone
,   $        = shim.$
,   _        = shim._
,   template = require('./title.ejs.html')

module.exports = Backbone.View.extend({
    
    el: '#title',

    initialize: function() {
        this.render()
    },

    template:template,

    render: function() {
        return this.template({title:'Ya Jazz Archive'})
    }
})

