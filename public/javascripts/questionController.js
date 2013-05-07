function questionController( qm ){
    this.team = null;
    this.qManager = qm;
    this.socket = null;
    this.wordIndex = 0;
    this.word = this.qManager.getWordAtIndex( this.wordIndex );
};

questionController.prototype.judge = function( keycode ){
    var char = String.fromCharCode( keycode ).toLowerCase();
    if( this.word.judge( char ) == true ){
	this.socket.emit('answer', ( this.team + ',' + this.wordIndex + ',' + this.word.answerIndex ) );
	if( this.word.isFinished() == true ){
	    if( this.qManager.isLastWord( this.wordIndex ) == true ){
		alert( 'Finish!' );
	    }else{
		this.incrementWord();
		this.socket.emit('answer', ( this.team + ',' + this.wordIndex + ',' + this.word.answerIndex ) );
	    };
	};

    };
};

questionController.prototype.incrementWord = function(){
    this.wordIndex = this.wordIndex + 1;
    this.word = this.qManager.getWordAtIndex( this.wordIndex );
};


questionController.prototype.currentWord = function(){
    return this.word;
};

questionController.prototype.setTeam = function( tName ){
    this.team = tName;
};
