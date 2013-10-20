/**
 * RATIONAL
 *
 * This file isolates the clientside madness so you can just require
 * an underscore (character), dollarsign, or Backbone without actually
 * worrying about the underlying abstraction gynastics. Order is not
 * significant. 
 *`
 * USAGE
 *
 * var shim     = require('./shim')
 * ,   Backbone = shim.Backbone
 * ,   $        = shim.$
 * ,   _        = shim._
 * 
 */

// these could be swapped with whatever
var $        = require('zepto-browserify').$
,   _        = require('lodash/dist/lodash.underscore')
,   Backbone = require('backbone')

// explicitly set to avoid load issues
Backbone.$ = $

// share the love
module.exports = { Backbone:Backbone
                 ,        $:$
                 ,        _:_
                 }