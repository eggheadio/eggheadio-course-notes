require('dotenv').config()
var cloudinary = require('cloudinary')
var _ = require('lodash')
var fs = require('fs-extra')

var parseImageData = function() {
  fs.readFile('output/imageData.json', 'utf8', function(err, data) {
    if (err) throw err

    var imageData = JSON.parse(data)
    findLessonFolder(imageData)
  })
}


var findLessonFolder = function(imageData) {
  fs.readdir('output', function(err, files) {
    if (err) throw err
    var transcriptFolder = _.find(files, function(file) { return !file.includes('.')})
    var filePath = `output/${transcriptFolder}/lessons`

    parseLessonFolder(imageData, filePath)
  });
}

var parseLessonFolder = function(imageData, filePath) {
  fs.readdir(filePath, function(err, files) {
    if (err) throw err
    fs.remove(`${filePath}/.DS_Store`, function(err) {
      if (err) throw err;

      files.forEach(function(file) {
        var lessonPath = `${filePath}/${file}`

        fs.readFile(lessonPath, 'utf8', function(err, data) {
          fs.writeFile(lessonPath, replaceLessonImages(imageData, data), function(err) {
            if (err) throw err
            console.log(`REPLACED IMAGES IN ${file}`)
          })
        })
      })
    })
  })
}

var replaceLessonImages = function(imageData, file) {
  imageData.forEach(function(image) {
    var replaceOriginalImage = new RegExp(`../images/${image.title}.png`, "g")
    file = file.replace(replaceOriginalImage, image.url)
  })
  return file
}



parseImageData()

