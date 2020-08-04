const express = require('express');
const cookieParser=require('cookie-parser');
const app = express();
const port=8000;/** On port 80 all website hosts */
/*app listen to the port*/
const db=require('./config/mongoose');
const bodyParser = require('body-parser');




//for reading key value pair in the html form add it before routes.
app.use(bodyParser.json());

app.use(express.urlencoded());




//set up view engine
app.set('view engine','ejs');
app.set('views','./views');




//going to use express router
//It is pointing to index file in routes folder
//app.use signify middlewares
app.use('/',require('./routes'));

app.listen(port,function(err){
    if(err){
        console.log('Error: ',err);
    }
    console.log(`server is running on port${port}`);
});
module.exports = app;