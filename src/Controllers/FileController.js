require('dotenv').config();

const fsp = require('fs/promises');
const B2 = require('backblaze-b2');

const {
    APPLICATIONKEYID,
    APPLICATIONKEY,
    BUCKETID,
    BASEURL
} = process.env;

const b2 = new B2({
    applicationKeyId: APPLICATIONKEYID,
    applicationKey: APPLICATIONKEY
});

const unlinkAsync = fsp.unlink;

class FileController {
    async upload(req, res) {
        const { filename, path } = req.file;
        
        try {
            
            const file = await fsp.readFile(`uploads/${filename}`, (err, data) => {
                if(err){
                    throw err
                }

                return data;
            });

            await b2.authorize();

            const { data:{ uploadUrl, authorizationToken} } = await b2.getUploadUrl({
                bucketId: BUCKETID
            })

            const { data } = await b2.uploadFile({
                uploadUrl: uploadUrl,
                uploadAuthToken: authorizationToken,
                fileName: filename,
                data: file
            });
            
            await unlinkAsync(path);

            return res.send({ url: `${BASEURL}${data.fileName}`});

        } catch (error) {
            return res.status(400).send({ message: 'Failed to upload!' });
        }

    }
}

module.exports = new FileController();