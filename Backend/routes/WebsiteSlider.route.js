import express from 'express';
import multer from 'multer';
import { WebsiteSlidercreate } from '../controller/WebsiteSliderController.js';

// Create a new router instance
const WebsiteSliderrouter = express.Router();

// Image storage configuration
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads/Slider');
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`);
    }
});

// Image filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith('image')) {
        callback(null, true);
    } else {
        callback(new Error('Only images are allowed'));
    }
};

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});

// Define the POST route with file upload and Image handler
WebsiteSliderrouter.post('/', upload.single('photo'),WebsiteSlidercreate );

// WebsiteSliderrouter.get('/', );

// WebsiteSliderrouter.delete('/:id', );

// WebsiteSliderrouter.put('/:id',upload.single('photo'), );

// WebsiteSliderrouter.get("/:id", )


export default WebsiteSliderrouter;
