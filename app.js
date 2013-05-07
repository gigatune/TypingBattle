
/**
 * Module dependencies.
 */

var express = require('express')
  , routesIndex = require('./routes/index')
  , routesTest = require('./routes/test')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routesIndex.index);
app.get('/users', user.list);
app.get('/test', routesTest.test);

//http.createServer(app).listen(app.get('port'), function(){
//  console.log('Express server listening on port ' + app.get('port'));
//});
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

var io = require('socket.io').listen(server);
io.sockets.on( 'connection', function( socket ){
    socket.on('msg send', function(msg){
	console.log( msg );
	socket.emit('msg push', 'nonono');
	socket.broadcast.emit('msg push', 'wwwwwwwwww' );
    });
    socket.on( 'disconnect', function(){
	console.log(' disconnect' );
    });
});

