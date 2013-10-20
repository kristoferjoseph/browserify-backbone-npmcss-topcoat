var shim       = require('shimsham')
,   $          = shim.$
,   Backbone   = shim.Backbone
,   Router     = require('./routes')

$(function() {
    new Router
    Backbone.history.start({pushState:true})
})

