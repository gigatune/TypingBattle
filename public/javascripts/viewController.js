function viewController(){

    this.setScore_a = function( score ){
        $('#score_a').html( score );
    };

    this.setWord_a = function( word, index ){
        $('#word_word_a').html( word.shownWord );
        $('#word_ruby_a').html( word.ruby.substr( index, word.length ) );
    };

};
