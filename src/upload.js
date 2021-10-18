//Script is probably broken with the move. This script is also not used much any more if at all because of the move away from enhanced transcripts.

require('dotenv').config()
var cloudinary = require('cloudinary')
var _ = require('lodash')
var fs = require('fs-extra')
const Input = require('prompt-input')

cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.CLOUDINARY_API_KEY}`,
  api_secret: `${process.env.CLOUDINARY_API_SECRET}`
});

const writeImageDataToFile = image => {
  fs.readFile('output/imageData.json')
  .then(data => {
    var data = JSON.parse(data);

    data.push({
      title: image.original_filename,
      url: image.url
    });

    fs.writeFile('output/imageData.json', JSON.stringify(data, null, 4))
    .catch(err => {
      throw err
    })
  })
  .catch(err => {
    throw err;
  })
};

const uploadImage = file => {
  cloudinary.v2.uploader.upload(
    file,
    { format: "jpg", crop: "limit", width: 1600 },
    (err, result) => {
      if (err) throw err

      console.log(`UPLOADED ${result.original_filename}`)
      writeImageDataToFile(result)
    })
};

const uploadImages = slug => {
  fs.readdir(`output/${slug}/images`).then(images => {
    fs.writeFile('output/imageData.json', '[]');
    images.filter(file => file !== '.DS_Store').forEach(image => {
      uploadImage(`output/${slug}/images/${image}`)
    })
  })
}

const input = new Input({
  name: 'slug',
  message: 'Enter course slug:'
})

input.ask(slug => {
  uploadImages(slug)
})