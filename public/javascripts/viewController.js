function viewController( ){

    this.initView = function(){
	$('#teamSelector').show();
	$('#playingArea').hide();

    };

    this.playingView = function( team ){
	$('#teamSelector').hide();
	$('#playingArea').show();
	if( team == 'b' ){
	    $('#opponents').css('margin-left', 100 );
	    $('#word_info').css('margin-left', 550 );
	    $('#ruby_info').css('margin-left', 550 );
	}
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
	$('#icon_' + team).css( 'margin-left', ( 500 * val / 100 + 5 + 'px' ) );
    };

    this.finished = function( team, time ){
	this.setGraph( team, '-', '100' );
	this.setWord( team, new Word('',''), 0 );
	$('#finished_time_' + team ).html( ( time / 1000 ) + '秒' );
    };


};
