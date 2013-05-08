function questionController( qm, vc ){
    this.team = null;
    this.qManager = qm;
    this.socket = null;
    this.wordIndex = 0;
    this.word = this.qManager.getWordAtIndex( this.wordIndex );
    this.viewController = vc;
    this.timer = null;
    this.isStarted = 0;
};

questionController.prototype.judge = function( keycode ){

    if( this.isStarted == 0 ){
	this.isStarted = 1;
	this.timer.start();
    }

    var char = String.fromCharCode( keycode );
    if( this.word.judge( char ) == true ){
	// ToDo : refactoring -> ( send socket / local view reload )

	this.viewController.setGraph( this.team, this.qManager.progressLabel( this.wordIndex ), this.qManager.progressValue( this.wordIndex ) );
	this.viewController.setWord(this.team, this.word, this.word.answerIndex );

	this.socket.emit('answer', ( this.team + ',' + this.wordIndex + ',' + this.word.answerIndex ) );
	if( this.word.isFinished() == true ){
	    if( this.qManager.isLastWord( this.wordIndex ) == true ){
		alert( 'Finish!' );
		this.socket.emit('answer', ( this.team + ',' + '1' + ',' + '0' + ',' + 'finished' + ',' + this.timer.getPassedTime() ) );
		this.viewController.finished( this.team, this.timer.getPassedTime() );
		this.timer.end();
	    }else{
		this.incrementWord();

		this.socket.emit('answer', ( this.team + ',' + this.wordIndex + ',' + this.word.answerIndex ) );
		this.viewController.setGraph( this.team, this.qManager.progressLabel( this.wordIndex ), this.qManager.progressValue( this.wordIndex ) );
		this.viewController.setWord(this.team, this.word, this.word.answerIndex );
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

questionController.prototype.getTeam = function(){
    return this.team;
};
