var shim     = require('shimsham')
,   Backbone = shim.Backbone
,   $        = shim.$
,   _        = shim._
,   template = require('./nav.ejs.html')

module.exports = Backbone.View.extend({
    
    events:{
        'click':'tap'     
    },

    initialize: function() {
        this.render()
    },

    template:template,

    render: function() {
        this.$el.html(template({collection:this.collection}))
        return this
    },

    tap: function(e) {
        this.model.play(e.target.id)
    }
})

