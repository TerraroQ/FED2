var MainController = require('./app/controllers/MainController');

module.exports = exports = function(app) {
 var mainController = new MainController();

 app.get('/', mainController.home);
 app.get('/movies', mainController.movies);
 app.get('/movie/:slug', mainController.movie);
 
 app.get('*', function(req, res){
     res.send('Page Not Found', 404);
 });

    // app.get('/tag/:tag', contentHandler.displayMainPageByTag);
};