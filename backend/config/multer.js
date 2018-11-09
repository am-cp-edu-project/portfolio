const multer = require('multer')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  }
})

var upload = multer({
  storage: storage,
  limits: { filesize: 15 * 1024 * 1024 }
}).array('files', 12)

module.exports = upload
