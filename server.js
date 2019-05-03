const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');
const fs = require('fs');
const serveStatic = require('serve-static');
const cors = require('cors')
const bodyParser = require("body-parser");

// create the express app
const app = express();
app.use(bodyParser.json());
app.use(cors());

// create middleware to handle the serving the app
app.use(history());  
app.use(serveStatic(path.join(__dirname, 'public')));

// Create default port to serve the app on
const port = process.env.PORT || 5000;
app.listen(port);

// Log a feedback that this is actually running
console.log('Server started on port ' + port);

const MODULES_FOLDER_PATH = './public/modules/demo/';

function fromDir(startPath, filter, callback){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};

app.get('/modules', function(req, res)
{
    console.log('start searching');

    fromDir(MODULES_FOLDER_PATH, /\.html$/, function(filename){
        console.log('-- found: ',filename);
    });

    res.status(200).json({ result: 'ok' });
});