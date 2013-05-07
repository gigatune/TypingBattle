function Word( t_word, t_ruby ){

    this.shownWord = t_word;
    this.ruby = t_ruby;
    this.answerIndex = 0;
};

Word.prototype.showRuby = function( index ){
    return index;
};

Word.prototype.judge = function( character ){
//    alert( this.shownWord[ this.answerIndex ] );
};
