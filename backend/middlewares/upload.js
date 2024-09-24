const multer=require("multer")
const path=require("path")

//multer is used to handle multipart/form-data, which is primarily used for uploading files.
const storage=multer.diskStorage({
    //destination is the folder where the file will be stored
    destination:function(req,file,cb){
        //null means no error
        //uploads is the folder where the file will be stored
        cb(null,"uploads/")
    },
    //filename is the name of the file
    filename:function(req,file,cb){
        //ext is the extension of the file
        const ext=path.extname(file.originalname)
        //file.fieldname is the name of the file
        //Date.now() is the current timestamp
        cb(null,`${file.fieldname}-${Date.now()}${ext}`)
    }
})

const upload=multer({storage:storage})

module.exports={upload}
