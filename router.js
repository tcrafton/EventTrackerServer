const Authentication = require('./controllers/authentication');
const User = require('./controllers/userController');
const Event = require('./controllers/eventController');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function( req, res) {
    res.send({ message: 'Message from server' });
  });

  app.post('/signin', requireSignin, Authentication.signin);
  app.post('/signup', Authentication.signup);

  app.get('/users', User.getAllUsers);

  app.get('/events', Event.getAllEvents);

  app.put('/events/:event_id', Event.updateEvent);
}
