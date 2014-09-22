var express = require('express')
    , app = express()
    , cons = require('consolidate')
    , swig = require('swig')
    , routes = require('./routes');

//initialize templating engine
app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/app/views');
app.use("/assets", express.static(__dirname + '/app/assets'));
app.use("/css", express.static(__dirname + '/app/css'));
app.use("/js", express.static(__dirname + '/app/js'));

swig.setDefaults({ cache: false });

//initialize routes
routes(app);

//start server
app.listen(8080, function() {
  // app.close();
});
console.log('Express server started on port 8080');