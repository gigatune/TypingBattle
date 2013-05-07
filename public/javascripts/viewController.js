function viewController( ){

    this.setWord = function( team, word, index ){
        $('#word_word_' + team ).html( word.shownWord );
        $('#word_ruby_' + team ).html( word.ruby.substr( index, word.length ) );
    };

    this.setGraph = function( team, label, val ){
	$('#graphbar_' + team ).html( label );
	$('#graphbar_' + team ).css( 'width', ( val + '%' ) );
    };
};
