const Event = require('../models/event');

exports.getAllEvents = function(req, res, next) {
  Event.find(function(err, events) {
    if(err) {
      res.send(err);
    }

    res.json(events);
  });
}

exports.updateEvent = function(req, res) {
  Event.findById(req.params.event_id, function(err, event) {
    if (err) {
      res.send(err);
    }
    console.log(event);
    console.log(req.body);

    event.eventName = req.body.eventName;
    event.description = req.body.description;
    event.eventDate = req.body.eventDate;

    event.save(function(err) {
      if (err) {
        res.send(err);
      }

      res.json({ message: 'Event updated!'});
    });
  });
}
