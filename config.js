//const MaxTime = 60000
const MaxTime = 60000*24
const multer = require('multer'); 
module.exports.config = {

    session : {
        secret: process.env.SESSION,
        cookie :{
            maxAge : MaxTime,
            expires : MaxTime
        }
    },
    db : {
        user: process.env.MSSQL_USER,
        password: process.env.MSSQL_PASS,
        server: process.env.MSSQL_SERVER,
        database: process.env.MSSQL_DATABASE,
        encripted : true
    },
    storage : multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, 'FILES')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname)
        }
    })
}
