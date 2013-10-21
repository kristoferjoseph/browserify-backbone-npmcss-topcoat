var Backbone = require('shimsham').Backbone
,   Track    = require('./track')
,   Playlist = Backbone.Collection.extend({model:Track})


module.exports = new Playlist([
    {"artist":"Art Tatum", 
     "title":"Little Man You've Had a Busy Day", 
     "mp3":"http://ia700204.us.archive.org/21/items/ArtTatum-LittleManYouveHadABusyDay/ArtTatum-LittleManYouveHadABusyDay.mp3", 
     "jpg":"",
     "attribution":"http://archive.org/details/ArtTatum-LittleManYouveHadABusyDay"},

    {"artist":"Louis Armstrong", 
     "title":"Drop That Sack 1926", 
     "mp3":"http://archive.org/download/LouisArmstrong-DropThatSack1926/LouisArmstrong-DropThatSack1926.mp3", 
     "jpg":"",
     "attribution":"http://archive.org/details/LouisArmstrong-DropThatSack1926"},

    {"artist":"Duke Ellington", 
     "title":"I'm Gonna Hang Around My Sugar 1925", 
     "mp3":"http://archive.org/download/1920s-dukeEllington-01-09/DukeEllington-ImGonnaHangAroundMySugar1925.mp3", 
     "jpg":"",
     "attribution":"http://archive.org/details/1920s-dukeEllington-01-09"},

    {"artist":"Benny Goodman", 
     "title":"Sing Sing Sing With a Swing", 
     "mp3":"http://archive.org/download/BennyGoodman-TheCollectionII/SingSingSingWithASwing.mp3", 
     "jpg":"",
     "attribution":"http://archive.org/details/BennyGoodman-TheCollectionII"}
    ])
