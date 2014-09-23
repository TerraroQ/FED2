// var express = require('express')
//     , app = express()
//     , cons = require('consolidate')
//     , swig = require('swig')
//     , routes = require('./routes');

// //initialize templating engine
// app.engine('html', cons.swig);
// app.set('view engine', 'html');
// app.set('views', __dirname + '/app/views');
// app.use("/assets", express.static(__dirname + '/app/assets'));
// app.use("/css", express.static(__dirname + '/app/css'));
// app.use("/js", express.static(__dirname + '/app/js'));

// swig.setDefaults({ cache: false });

// //initialize routes
// routes(app);

// //start server
// app.listen(8080, function() {
//   // app.close();
// });
// console.log('Express server started on port 8080');

// Object Oriented Programming
// Namespace
var app = app || {};

// Self Invoking Anonymous Function
(function(){
   // Hier worden 2 methodes geinit in een controller
   app.controller = { 
      init: function(){
         app.router.init();
         app.sections.init();
      }
   };
   // Het routie object aangeroepen met 2 properties, de about en movie
   app.router = {
      init: function () {  
         // Router-object
         routie({
            about: function () {
               // Toggle methode voor beide pagina's
               app.sections.toggle("about");
            },
            movies: function () {
               app.sections.toggle("movies");
            }
         });
      }
   };
   // Content beide pagina's
   app.content = {
            about: {
                title: 'About this app',
                p_1: 'Cities fall but they are rebuilt. heroes die but they are remembered. the man likes to play chess; let\'s get him some rocks. circumstances have taught me that a man\'s ethics are the only possessions he will take beyond the grave. multiply your anger by about a hundred, kate, that\'s how much he thinks he loves you. bruce... i\'m god. multiply your anger by about a hundred, kate, that\'s how much he thinks he loves you. no, this is mount everest. you should flip on the discovery channel from time to time. but i guess you can\'t now, being dead and all. rehabilitated? well, now let me see. you know, i don\'t have any idea what that means. mister wayne, if you don\'t want to tell me exactly what you\'re doing, when i\'m asked, i don\'t have to lie. but don\'t think of me as an idiot. rehabilitated? well, now let me see. you know, i don\'t have any idea what that means. cities fall but they are rebuilt. heroes die but they are remembered. no, this is mount everest. you should flip on the discovery channel from time to time. but i guess you can\'t now, being dead and all.',
                p_2: 'I did the same thing to gandhi, he didn\'t eat for three weeks. bruce... i\'m god. cities fall but they are rebuilt. heroes die but they are remembered. i once heard a wise man say there are no perfect men. only perfect intentions. cities fall but they are rebuilt. heroes die but they are remembered. boxing is about respect. getting it for yourself, and taking it away from the other guy. well, what is it today? more spelunking? let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. bruce... i\'m god. well, what is it today? more spelunking? it only took me six days. same time it took the lord to make the world. i did the same thing to gandhi, he didn\'t eat for three weeks.',
                p_3: 'Let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. boxing is about respect. getting it for yourself, and taking it away from the other guy. mister wayne, if you don\'t want to tell me exactly what you\'re doing, when i\'m asked, i don\'t have to lie. but don\'t think of me as an idiot. you measure yourself by the people who measure themselves by you. circumstances have taught me that a man\'s ethics are the only possessions he will take beyond the grave. circumstances have taught me that a man\'s ethics are the only possessions he will take beyond the grave. you measure yourself by the people who measure themselves by you. you measure yourself by the people who measure themselves by you. that tall drink of water with the silver spoon up his ass. i once heard a wise man say there are no perfect men. only perfect intentions. mister wayne, if you don\'t want to tell me exactly what you\'re doing, when i\'m asked, i don\'t have to lie. but don\'t think of me as an idiot. boxing is about respect. getting it for yourself, and taking it away from the other guy.',
                p_4: 'That tall drink of water with the silver spoon up his ass. well, what is it today? more spelunking? i now issue a new commandment: thou shalt do the dance. let me tell you something my friend. hope is a dangerous thing. hope can drive a man insane. i did the same thing to gandhi, he didn\'t eat for three weeks. the man likes to play chess; let\'s get him some rocks. i now issue a new commandment: thou shalt do the dance. i now issue a new commandment: thou shalt do the dance. multiply your anger by about a hundred, kate, that\'s how much he thinks he loves you. i don\'t think they tried to market it to the billionaire, spelunking, base-jumping crowd. that tall drink of water with the silver spoon up his ass. it only took me six days. same time it took the lord to make the world.'
            },
            movies: [
                {
                    title: 'Shawshank Redemption',
                    date: '14 October 1994',
                    cover: 'app/assets/img/shawshank-redemption.jpg',
                    p: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
                },            
                {
                    title: 'The Godfather',
                    date: '24 March 1972',
                    cover: 'app/assets/img/the-godfather.jpg',
                    p: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'
                },            
                {
                    title: 'Pulp Fiction',
                    date: '14 October 1994',
                    cover: 'app/assets/img/pulp-fiction.jpg',
                    p: 'The lives of two mob hit men, a boxer, a gangster\'s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
                },            
                {
                    title: 'The Dark Knight',
                    date: '18 July 2008',
                    cover: 'app/assets/img/the-dark-knight.jpg',
                    p: 'When Batman, Gordon and Harvey Dent launch an assault on the mob, they let the clown out of the box, the Joker, bent on turning Gotham on itself and bringing any heroes down to his level.'
                }],
                guideline: {
	            	cover: {
	                	src: function () {
	                    	return this.cover;
	                	}
	            	}
        		}
            
   };
   // Sections met Transparency ID
   app.sections = {
      // Oproepen about en movies methodes
      init: function () {
         app.sections.about();
         app.sections.movies();
      },
      about: function () {
         Transparency.render(document.getElementById("about"), app.content.about, app.content.guideline);
      },
      movies: function () {
         Transparency.render(document.getElementById("movies"), app.content.movies, app.content.guideline );
      },
      // Toggle methode met parameter 'section'
      toggle: function (section) {
         // Local Scope
         var selector = document.querySelectorAll("section");
         // For loop die 'active' weghaald, parameter controleerd en vervolgens weer de class toevoegd zodat er kan worden getoggled. Dit staat gekoppeld aan de css class .active (display:block;)
         for (i = 0; i < selector.length; i++) {
            selector[i].classList.remove('active');
         }
         document.getElementById(section).classList.add('active');
      }
   };
   // Start 'init' uit controller
app.controller.init();
})();