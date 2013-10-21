var shim     = require('shimsham')
,   Backbone = shim.Backbone
,   $        = shim.$
,   _        = shim._
,   template = require('./title.ejs.html')

module.exports = Backbone.View.extend({
    
    initialize: function() {
        this.render()
    },

    template:template,

    render: function() {
        this.$el.html(template({title:'Jazz Mix'}))
        return this
    }
})

