var fs = require('fs')
var dir = process.argv[2]
var type = ".".concat(process.argv[3])


fs.readdir(dir, function(err,contents){
  contents.filter(function(file) {
    lastChars = file.substr(file.length-type.length)
    if (lastChars === type)
      console.log(file)
  })
})

