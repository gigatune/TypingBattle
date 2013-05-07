function Mediator( vcon ){
    this.vController = vcon;
    this.qContrroller = null;
};

Mediator.prototype.change = function(){
/*
    if( this.qController.judge( char ) == true ){
	$('#judge').html( 'correct' );
    }else{
	$('#judge').html( 'incorrect' );
    };
*/
    var w = this.qController.currentWord();
    this.vController.setScore_a( "123" );
    this.vController.setWord_a( w, w.answerIndex );
};

