function questionController( med ){
    this.team = null;
    this.mediator = med;
    this.word = new Word('動く', 'ugoku' );
    this.socket = null;
};

questionController.prototype.judge = function( keycode ){
    var char = String.fromCharCode( keycode ).toLowerCase();
    if( this.word.judge( char ) == true ){
	this.socket.emit('answer', ( 'a,' + this.word.answerIndex ) );
    };
};

questionController.prototype.currentWord = function(){
    return this.word;
};

questionController.prototype.setTeam = function( tName ){
    this.team = tName;
};
