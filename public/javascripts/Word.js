function Word( t_word, t_ruby ){
    this.shownWord = t_word;
    this.ruby = t_ruby;
    this.answerIndex = 0;
};

Word.prototype.showRuby = function( index ){
    return index;
};

Word.prototype.judge = function( character ){
    if( this.isFinished() == true ){
	return false;
    };

    if( this.ruby[ this.answerIndex ].toLowerCase() == character.toLowerCase() ){
        this.answerIndex = this.answerIndex + 1;
        return true;
    }
    return false;
};

Word.prototype.isFinished = function(){
    if( this.answerIndex >= this.ruby.length ){
        return true;
    }
    return false;
};
