module.exports = {
  index: function(req, res) {
    res.view('base/index', {title: 'Hello'});
  },
  socketIO: function(req, res) {
    res.view('base/socketio');
  },
  landing: function(req, res) {
    res.view('base/landing');
  }
}