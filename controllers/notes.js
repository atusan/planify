const Note = require('../models/note');
const S3 = require('aws-sdk/clients/s3');

const { v4: uuidv4 } = require('uuid');
const s3 = new S3();

const BUCKET_NAME = process.env.DOGGOS_BUCKET;

module.exports = {
    
    index
}

async function index(req, res){
    try {
        // on a query aka .find({}) you just call .exec() to execulate the .populate('user')
        const posts = await Note.find({}).populate('user').exec()
        res.status(200).json({posts})
    } catch(err){
        res.json(err)
    }
}
