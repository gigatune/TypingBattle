function questionManager( qid ){

    this.setInfo = function(){
	var len = 0;
	for( var idx in this.words ){
	    var w = this.words[ idx ];
	    len += w.ruby.length;
	}
	this.charLength = len;
    };

    this.words = Array();

    if( qid == 1 ){
	this.words.push( new Word( '動く', 'ugoku' ) );
	this.words.push( new Word( '働く', 'hataraku' ) );
	this.words.push( new Word( 'お世話になります', 'osewaninarimasu' ) );
	this.words.push( new Word( '仕様です', 'siyoudesu' ) );
    }else{
	this.words.push( new Word( 'print', 'print' ) );
	this.words.push( new Word( 'java', 'java' ) );
	this.words.push( new Word( 'perl', 'perl' ) );
	this.words.push( new Word( 'warn', 'warn' ) );
    }

    this.charLength ;

    this.setInfo();



    this.getWordAtIndex = function( idx ){
	if(  this.words[ idx ] ){
	    return this.words[ idx ];
	};
	return new Word('', '');
    };

    this.isLastWord = function( idx ){
	if( ( this.words.length - idx ) == 1 ){
	    return true;
	};
	return false;
    };

    this.progressValue = function( idx, wordIndex ){
	var progressChar = 0;
	for( var i = 0 ; i < idx ; i++ ){
	    progressChar += this.words[i].ruby.length;
	}
	progressChar += parseInt( wordIndex );

	var pValue = Math.floor(( progressChar / this.charLength ) * 100 );
	return ( pValue );
    };

    this.progressLabel = function( idx ){
	return idx + "/" + this.words.length;
    };

    this.setTestData = function(){
	this.words = Array();
	this.words.push( new Word( '動く', 'ugoku' ) );
	this.words.push( new Word( '働く', 'hataraku' ) );
	this.setInfo();
    };
};
