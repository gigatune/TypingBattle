function questionController( med ){
    this.team = null;
    this.mediator = med;
    this.word = new Word('動く', 'ugoku' );
};

questionController.prototype.judge = function( keycode ){
    var char = String.fromCharCode( keycode ).toLowerCase();
    this.word.judge( char );
    this.mediator.change();
};

questionController.prototype.currentWord = function(){
    return this.word;
};

questionController.prototype.setTeam = function( tName ){
    this.team = tName;
};
