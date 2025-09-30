const express = require('express');
const router = express.Router();
const uuid = require('uuid');
let upload = require('./upload');
const url = require('url');
let Image = require('../models/images');

// Home route
router.get('/', (req, res) => {
    Image.find({}, function(err, images) {
        if (err) {
            console.error(err);
            // Send empty array if DB fails (so the page still loads)
            return res.render('index', { images: [], msg: "Error fetching images" });
        }
        // Always send an array, even if no images are found
        res.render('index', { images: images || [], msg: req.query.msg });
    });
});

// Upload route
router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.redirect(`/?msg=${err}`);
        }

        if (!req.file) {
            return res.redirect('/?msg=Error: No file selected!');
        }

        console.log("Uploaded file:", req.file);

        // Create new image document
        let newImage = new Image({
            name: req.file.filename,
            size: req.file.size,
            path: 'images/' + req.file.filename
        });

        // Save the uploaded image to the database
        newImage.save()
            .then(() => res.redirect('/?msg=File uploaded successfully'))
            .catch(saveErr => {
                console.error(saveErr);
                res.redirect('/?msg=Error saving file to database');
            });
    });
});

module.exports = router;
