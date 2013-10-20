var shim       = require('./shim')
,   $          = shim.$
,   Backbone   = shim.Backbone
,   Router     = require('./routes')

$(function() {
    new Router
    Backbone.history.start({pushState:true})
})

