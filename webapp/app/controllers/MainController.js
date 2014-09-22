function MainController () {
    "use strict";

    this.home = function(req, res, next) {
     var data = {
      start: {
            title: 'Enter the exciting world of bartending',
            subtitle: 'Improbe your bartending and cocktail skills and create a solid spirit knowledge foundation.',
            button: 'See our courses',
            scroll: 'scroll down'
      },
            book: {
                title: 'Next master classes is on the 17 October',
                subtitle: 'Hey early birds! Book one month in advanced and get 15% discount!',
                button: 'Book a course'
            },
            about: {
                title: 'Bols bartending acedemy',
                content: '',
                button: 'learn more'
            }
        };
        
     return res.render('home', data);
    };

    this.courses = function(req, res, next) {
        var data = {
            start: {
               title: 'We supply top quality courses for novice to expert',
            },
            book: {
                title: 'Next master classes is on the 17 October',
                subtitle: 'Hey early birds! Book one month in advanced and get 15% discount!',
                button: 'Book a course'
            },
            about: {
                title: 'Bols bartending acedemy',
                content: '',
                button: 'learn more'
            }
        };
        
        return res.render('courses', data);
    };

}

module.exports = MainController;