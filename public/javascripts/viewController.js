function viewController( ){

    this.initView = function(){
	$('#teamSelector').show();
	$('#playingArea').hide();

    };

    this.playingView = function(){
	$('#teamSelector').hide();
	$('#playingArea').show();
    };

    this.start = function(){
	$('.information').hide();
	$('#filter').hide();
    };

    this.setWord = function( team, word, index ){
        $('#word_word_' + team ).html( word.shownWord );
        $('#word_ruby_' + team ).html( word.ruby.substr( index, word.length ) );
    };

    this.setGraph = function( team, label, val ){
	$('#graphbar_' + team ).html( label );
	$('#graphbar_' + team ).css( 'width', ( val + '%' ) );
    };

    this.finished = function( team, time ){
	this.setGraph( team, '-', '100' );
	this.setWord( team, new Word('',''), 0 );
	$('#finished_time_' + team ).html( ( time / 1000 ) + '秒' );
    };


};
